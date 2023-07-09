/**
 * Interface for classes that can read and parse data from files.
 */
export interface DataReaderInterface {
  /**
   * Reads the content of a file and returns a promise that resolves with the content as a string.
   * @param file The file to read.
   * @returns A promise that resolves with the content of the file as a string.
   */
  readFile: (file: File) => Promise<string>;

  /**
   * Parses a string into a 2D array where each inner array represents a row of the CSV file,
   * and each item in the row represents a cell in the CSV.
   * @param contents The string to parse.
   * @returns A 2D array where each inner array represents a row of the CSV file.
   */
  parseCSV: (contents: string) => string[][];
}
