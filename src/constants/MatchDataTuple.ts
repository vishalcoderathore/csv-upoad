import { MatchResultEnum } from "./MatchResultEnum";

/**
 * MatchData represents a match in the CSV file. It includes a Date,
 * two strings for teams, two numbers for goals, a MatchResult for match result,
 * and a string for referee.
 */
export type MatchDataTuple = [
  Date, // The date of the match.
  string, // The home team.
  string, // The away team.
  number, // The number of goals scored by the home team.
  number, // The number of goals scored by the away team.
  MatchResultEnum, // The result of the match.
  string // The referee of the match.
];
