import { AnalyzerInterface } from "../types/AnalyzerInterface";
import { OutputTargetInterface } from "../types/OutputTargetInterface";
import { MatchDataTuple } from "../constants/MatchDataTuple";

// Summary class that uses the AnalyzerInterface and OutputTargetInterface
export class Summary {

  constructor(
    public analyzer: AnalyzerInterface,
    public outputTarget: OutputTargetInterface
  ) {}

  /**
   * Builds a report using the given matches and prints it.
   * @param matches - The matches to analyze.
   */
  buildAndPrintReport(matches: MatchDataTuple[]): void {
    const report = this.analyzer.run(matches);
    this.outputTarget.print(report);
  }
}
