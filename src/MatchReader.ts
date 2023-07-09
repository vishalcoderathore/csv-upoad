import { dateStringToDate } from "./utils";
import { MatchResult } from "./MatchResult";
import { DataReader } from "./DataReader";

/**
 * MatchData represents a match in the CSV file. It includes a Date,
 * two strings for teams, two numbers for goals, a MatchResult for match result,
 * and a string for referee.
 */
export type MatchData = [
  Date, // The date of the match.
  string, // The home team.
  string, // The away team.
  number, // The number of goals scored by the home team.
  number, // The number of goals scored by the away team.
  MatchResult, // The result of the match.
  string // The referee of the match.
];

/**
 * Class for reading and processing match data.
 */
export class MatchReader {
  /**
   * Array to hold match data.
   */
  matches: MatchData[] = [];

  /**
   * Creates a new MatchReader.
   * @param reader An object that implements the DataReader interface.
   */
  constructor(public reader: DataReader) {}

  /**
   * Loads match data from a file, parses it, and stores it in the `matches` property.
   * @param file The file to load the data from.
   * @returns void
   */
  async load(file: File): Promise<void> {
    const data = await this.reader.readFile(file);
    const parsedData = this.reader.parseCSV(data);
    this.matches = parsedData.map((entry: string[]): MatchData => {
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
  }
}
