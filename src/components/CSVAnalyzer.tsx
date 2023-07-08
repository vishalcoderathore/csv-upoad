import { useState } from "preact/hooks";
import { CSVReader } from "../utils/CSVReader";
import { MatchResult } from "../MatchResult";
import {MatchData} from '../utils/CSVReader'

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

const CSVAnalyzer = () => {
  const [isUploaded, setIsUploaded] = useState(false);
  const csvReader = new CSVReader();

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
