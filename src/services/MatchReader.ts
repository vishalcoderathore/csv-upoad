import { dateStringToDate } from "../utils";
import { MatchResultEnum } from "../constants/MatchResultEnum";
import { DataReaderInterface } from "../types/DataReaderInterface";
import { MatchDataTuple } from "../constants/MatchDataTuple";

/**
 * Class for reading and processing match data.
 */
export class MatchReader {
  /**
   * Array to hold match data.
   */
  matches: MatchDataTuple[] = [];

  /**
   * Creates a new MatchReader.
   * @param reader An object that implements the DataReader interface.
   */
  constructor(public reader: DataReaderInterface) {}

  /**
   * Loads match data from a file, parses it, and stores it in the `matches` property.
   * @param file The file to load the data from.
   * @returns void
   */
  async load(file: File): Promise<void> {
    const data = await this.reader.readFile(file);
    const parsedData = this.reader.parseCSV(data);
    this.matches = parsedData.map((entry: string[]): MatchDataTuple => {
      return [
        dateStringToDate(entry[0]),
        entry[1],
        entry[2],
        parseInt(entry[3]),
        parseInt(entry[4]),
        entry[5] as MatchResultEnum,
        entry[6],
      ];
    });
  }
}
