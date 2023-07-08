import { useState } from "preact/hooks";
import { MatchResult } from "../MatchResult";
import { MatchData } from "../MatchReader";
import { MatchReader } from "../MatchReader";

/**
 * Function to analyze the MatchData.
 * @param {MatchData[]} data - The array of MatchData.
 */
const performCustomAnalysis = (data: MatchData[]) => {
  console.log(data);

  const team = "Man United";
  let manUnitedWins = 0;
  data.forEach((match) => {
    if (
      (match[1] === team && match[5] === MatchResult.HomeWin) ||
      (match[2] === team && match[5] === MatchResult.AwayWin)
    ) {
      manUnitedWins++;
    }
  });
  console.log(`${team} won ${manUnitedWins} matches`);
};

/**
 * The CSVAnalyzer component for file upload and CSV analysis.
 */
const CSVAnalyzer = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const csvReader = new MatchReader();

  /**
   * Handle file upload and CSV parsing.
   * @param {Event} event - The file upload event.
   */
  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      try {
        const contents = await csvReader.readFile(file);
        const data = csvReader.parseCSV(contents);
        performCustomAnalysis(data);
        setIsUploaded(true);
      } catch (error) {
        console.error("Error reading file:", error);
      }
    }
  };

  return (
    <div>
      <input type='file' accept='.csv' onChange={handleFileUpload} />
      {isUploaded && <p>CSV uploaded successfully</p>}
    </div>
  );
};

export default CSVAnalyzer;
