using Microsoft.EntityFrameworkCore;
using RacingDigital.Api.Data;
using RacingDigital.Api.Models;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddDbContext<RacingDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("DefaultConnection")));

builder.Services.AddCors(options =>
{
  options.AddPolicy("AllowLocalhost4200", policy =>
  {
    policy.WithOrigins("http://localhost:4200")
            .AllowAnyHeader()
            .AllowAnyMethod();
  });
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
  config.DocumentName = "RacingDigitalAPI";
  config.Title = "Racing Digital Test v1";
  config.Version = "v1";
});

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
  app.UseOpenApi();
  app.UseSwaggerUi(config =>
  {
    config.DocumentTitle = "RacingDigitalAPI";
    config.Path = "/swagger";
    config.DocumentPath = "/swagger/{documentName}/swagger.json";
    config.DocExpansion = "list";
  });

  app.UseCors("AllowLocalhost4200");
}

using (var scope = app.Services.CreateScope())
{
  var db = scope.ServiceProvider.GetRequiredService<RacingDbContext>();
  db.Database.Migrate();
  SeedData.Initialize(db);
}

app.MapGet("/races", async (RacingDbContext db) =>
{
  await Task.Delay(1500);
  return await db.RaceResults.ToListAsync();

});

app.MapPatch("/races/{id}/notes", async (
    int id,
    UpdateRaceNotes dto,
    RacingDbContext db) =>
{
  await Task.Delay(1500);
  var race = await db.RaceResults.FindAsync(id);
  if (race is null)
  {
    return Results.NotFound();
  }

  race.Notes = dto.Notes;

  db.Entry(race).Property(r => r.Notes).IsModified = true;

  await db.SaveChangesAsync();

  return Results.Ok(race);
});




app.Run();
