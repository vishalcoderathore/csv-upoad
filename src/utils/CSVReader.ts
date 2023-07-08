import { dateStringToDate } from ".";
import { MatchResult } from "../MatchResult";

export type MatchData = [Date, string, string, number, number, MatchResult, string];

/**
 * CSVReader class handles reading and parsing CSV files.
 * @class
 */
export class CSVReader {
  /**
   * Read the content of a file.
   * @param {File} file - The file to read.
   * @returns {Promise<string>} A Promise that resolves with the content of the file as a string.
   */
  readFile(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => {
        resolve(reader.result?.toString() || "");
      };
      reader.onerror = reject;
      reader.readAsText(file);
    });
  }

  /**
   * Parse a string into a 2D array representing the CSV content.
   * @param {string} contents - The string to parse.
   * @returns {MatchData[]} A 2D array where each inner array represents a row of the CSV file,
   * and each item in the row represents a cell in the CSV.
   */
  parseCSV(contents: string): MatchData[] {
    const lines = contents.split(/\r\n|\n/);
    const data: MatchData[] = lines
      .map((entry: string): string[] => entry.split(","))
      .map((entry: string[]): MatchData => {
        return [
          dateStringToDate(entry[0]),
          entry[1],
          entry[2],
          parseInt(entry[3]),
          parseInt(entry[4]),
          entry[5] as MatchResult,
          entry[6],
        ];
      });
    return data;
  }
}
