namespace RacingDigital.Api.Models
{
  public class RaceResult
  {
    public int Id { get; set; }
    public required string Race { get; set; }
    public DateTime RaceDate { get; set; }
    public required string RaceTime { get; set; }
    public required string Racecourse { get; set; }
    public int RaceDistance { get; set; }
    public required string Jockey { get; set; }
    public required string Trainer { get; set; }
    public required string Horse { get; set; }
    public int FinishingPosition { get; set; }
    public double DistanceBeaten { get; set; }
    public double TimeBeaten { get; set; }
    public string? Notes { get; set; }
  }
}