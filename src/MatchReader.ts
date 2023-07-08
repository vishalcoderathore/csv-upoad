import { CSVReader } from "./utils/CSVReader";
import { dateStringToDate } from "../src/utils";
import { MatchResult } from "./MatchResult";

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

/**
 * MatchReader class to map rows of CSV to MatchData.
 * @class
 * @extends {CSVReader<MatchData>}
 */
export class MatchReader extends CSVReader<MatchData> {
  /**
   * Method to map a row in CSV to a MatchData object.
   * @param {string[]} entry - The CSV row as an array of strings.
   * @returns {MatchData} The MatchData object.
   */
  mapRow(entry: string[]): MatchData {
    return [
      dateStringToDate(entry[0]),
      entry[1],
      entry[2],
      parseInt(entry[3]),
      parseInt(entry[4]),
      entry[5] as MatchResult,
      entry[6],
    ];
  }
}
