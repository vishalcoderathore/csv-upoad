import { MatchDataTuple } from "../constants/MatchDataTuple";

export interface AnalyzerInterface {
  run(matches: MatchDataTuple[]): string;
}
