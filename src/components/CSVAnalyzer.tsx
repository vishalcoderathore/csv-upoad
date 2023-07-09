import { useState } from "preact/hooks";
import { CSVReader } from "../utils/CSVReader";
import { MatchReader } from "../services/MatchReader";
import { WinsAnalysis } from "../utils/WinsAnalysis";
import { ConsoleReport } from "../utils/ConsoleReport";
import { Summary } from "../services/Summary";
import { HTMLReport } from "../utils/HTMLReport";

const CSVAnalyzer = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const [matchReader, setMatchReader] = useState<MatchReader | null>(null);

  /**
   * Handles the file upload event.
   * @param event - The file upload event.
   */
  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];

    if (file) {
      const csvReader = new CSVReader();
      const reader = new MatchReader(csvReader);

      try {
        await reader.load(file);
        setMatchReader(reader);
        setIsUploaded(true);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  /**
   * Outputs analysis results to the console.
   */
  const handleConsoleOutput = () => {
    if (matchReader) {
      const summary = new Summary(
        new WinsAnalysis("Man United"),
        new ConsoleReport()
      );
      summary.buildAndPrintReport(matchReader.matches);
    }
  };

  /**
   * Downloads analysis results as a PDF.
   */
  const handleDownload = () => {
    if (matchReader) {
      const summary = new Summary(
        new WinsAnalysis("Man United"),
        new HTMLReport()
      );
      summary.buildAndPrintReport(matchReader.matches);
    }
  };

  return (
    <div>
      <input type='file' accept='.csv' onChange={handleFileUpload} />
      {isUploaded && (
        <div>
          <p>CSV uploaded successfully</p>
          <div style={{ display: "flex", gap: "10px" }}>
            <button onClick={handleConsoleOutput}>
              View Results in Console
            </button>
            <button onClick={handleDownload}>Download CSV</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CSVAnalyzer;
