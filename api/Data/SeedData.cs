
using System.Globalization;
using CsvHelper;
using RacingDigital.Api.Models;

namespace RacingDigital.Api.Data
{
  public static class SeedData
  {
    public static void Initialize(RacingDbContext context)
    {
      if (context.RaceResults.Any()) return; // Already seeded

      using var reader = new StreamReader("Seed/Engineer Exercise.csv");
      using var csv = new CsvReader(reader, CultureInfo.InvariantCulture);

      var records = csv.GetRecords<RaceResultCsv>().ToList();

      foreach (var record in records)
      {
        var result = new RaceResult
        {
          Race = record.Race,
          RaceDate = DateTime.ParseExact(record.RaceDate, "dd/MM/yyyy", CultureInfo.InvariantCulture),
          RaceTime = record.RaceTime,
          Racecourse = record.Racecourse,
          RaceDistance = int.Parse(record.RaceDistance),
          Jockey = record.Jockey,
          Trainer = record.Trainer,
          Horse = record.Horse,
          FinishingPosition = int.Parse(record.FinishingPosition),
          DistanceBeaten = double.Parse(record.DistanceBeaten),
          TimeBeaten = double.Parse(record.TimeBeaten)
        };

        context.RaceResults.Add(result);
      }

      context.SaveChanges();
    }
  }
}