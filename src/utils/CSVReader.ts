/**
 * CSVReader class handles reading and parsing CSV files.
 */
export class CSVReader {
  /**
   * Reads the content of a file.
   * @param file - The file to read.
   * @returns A Promise that resolves with the content of the file as a string.
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
   * Parses a string into a 2D array representing the CSV content.
   * @param contents - The string to parse.
   * @returns A 2D array where each inner array represents a row of the CSV file,
   * and each item in the row represents a cell in the CSV.
   */
  parseCSV(contents: string): string[][] {
    const lines = contents.split(/\r\n|\n/);
    const data: string[][] = lines.map((entry: string): string[] =>
      entry.split(",")
    );
    return data;
  }
}
