import { MatchResult } from "../constants/MatchResultEnum";
import { AnalyzerInterface } from "../types/AnalyzerInterface";
import { MatchDataType } from "../constants/MatchDataTuple";

export class AverageGoalsAnalysis implements AnalyzerInterface{
    run(matches: MatchDataType[]): string {
        throw new Error("Method not implemented.");
    }
}