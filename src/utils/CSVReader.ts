/**
 * Abstract CSVReader class for reading and parsing CSV files.
 * @class
 */
export abstract class CSVReader<T> {
  /**
   * Method to map a row in CSV to a typed object.
   * Implemented by the child classes that extend CSVReader.
   */
  abstract mapRow(entry: string[]): T;

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
   * @returns {T[]} A 2D array where each inner array represents a row of the CSV file,
   * and each item in the row represents a cell in the CSV.
   */
  parseCSV(contents: string): T[] {
    const lines = contents.split(/\r\n|\n/);
    return lines
      .map((entry: string): string[] => entry.split(","))
      .map(this.mapRow);
  }
}
