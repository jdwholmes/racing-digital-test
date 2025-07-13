using Microsoft.EntityFrameworkCore;
using RacingDigital.Api.Models;

namespace RacingDigital.Api.Data
{
  public class RacingDbContext : DbContext
  {
    public RacingDbContext(DbContextOptions<RacingDbContext> options)
        : base(options) { }

    public DbSet<RaceResult> RaceResults => Set<RaceResult>();
  }
}