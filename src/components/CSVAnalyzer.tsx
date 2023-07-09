import { useState } from "preact/hooks";
import { CSVReader } from "../utils/CSVReader";
import { MatchResult } from "../MatchResult";
import { MatchReader } from "../MatchReader";

/**
 * Performs analysis on the matches data read from the CSV file.
 * @param matchReader - The MatchReader instance containing matches data.
 */
const performCustomAnalysis = (matchReader: MatchReader) => {
  console.log(matchReader.matches);

  const team = "Man United";
  let manUnitedWins = 0;
  matchReader.matches.forEach((match) => {
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
 * CSVAnalyzer component. Allows user to upload CSV files and performs analysis on the uploaded data.
 */
const CSVAnalyzer = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const csvReader = new CSVReader();

  /**
   * Handles the file upload event.
   * @param event - The file upload event.
   */
  const handleFileUpload = async (event: Event) => {
    const target = event.target as HTMLInputElement;
    const file = target.files?.[0];
    if (file) {
      try {
        const matchReader = new MatchReader(csvReader);
        await matchReader.load(file);
        performCustomAnalysis(matchReader);
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
