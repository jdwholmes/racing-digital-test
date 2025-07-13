using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace api.Migrations
{
    /// <inheritdoc />
    public partial class Initial : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "RaceResults",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Race = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RaceDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    RaceTime = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Racecourse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    RaceDistance = table.Column<int>(type: "int", nullable: false),
                    Jockey = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Trainer = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Horse = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    FinishingPosition = table.Column<int>(type: "int", nullable: false),
                    DistanceBeaten = table.Column<double>(type: "float", nullable: false),
                    TimeBeaten = table.Column<double>(type: "float", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_RaceResults", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "RaceResults");
        }
    }
}
