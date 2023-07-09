import { AnalyzerInterface } from "../types/AnalyzerInterface";
import { MatchDataTuple } from "../constants/MatchDataTuple";
import { MatchResultEnum } from "../constants/MatchResultEnum";

// WinsAnalysis class that implements AnalyzerInterface
export class WinsAnalysis implements AnalyzerInterface {
  constructor(public teamName: string) {}

  /**
   * Analyzes an array of matches and generates a report.
   * @param matches - The matches to analyze.
   * @returns The generated report.
   */
  run(matches: MatchDataTuple[]): string {
    let wins = 0;

    matches.forEach((match) => {
      if (
        (match[1] === this.teamName && match[5] === MatchResultEnum.HomeWin) ||
        (match[2] === this.teamName && match[5] === MatchResultEnum.AwayWin)
      ) {
        wins++;
      }
    });

    return `${this.teamName} won ${wins} matches`;
  }
}
