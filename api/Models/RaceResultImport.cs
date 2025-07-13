namespace RacingDigital.Api.Models
{
  public class RaceResultCsv
  {
    public required string Race { get; set; }
    public required string RaceDate { get; set; }
    public required string RaceTime { get; set; }
    public required string Racecourse { get; set; }
    public required string RaceDistance { get; set; }
    public required string Jockey { get; set; }
    public required string Trainer { get; set; }
    public required string Horse { get; set; }
    public required string FinishingPosition { get; set; }
    public required string DistanceBeaten { get; set; }
    public required string TimeBeaten { get; set; }
  }

}