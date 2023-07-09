import { OutputTargetInterface } from "../types/OutputTargetInterface";

// ConsoleReport class that implements OutputTargetInterface
export class ConsoleReport implements OutputTargetInterface {
  /**
   * Prints the given report.
   * @param report - The report to print.
   */
  print(report: string): void {
    console.log(report);
  }
}
