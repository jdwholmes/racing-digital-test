export interface RaceData {
  id: number;
  race: string;
  raceDate: string;
  raceTime: string;
  racecourse: string;
  raceDistance: number;
  jockey: string;
  trainer: string;
  horse: string;
  finishingPosition: number;
  distanceBeaten: number;
  timeBeaten: number;
  notes: string | null;
}
