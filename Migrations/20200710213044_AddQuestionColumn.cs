using Microsoft.EntityFrameworkCore.Migrations;

namespace SuncoastOverflow.Migrations
{
    public partial class AddQuestionColumn : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Question",
                table: "Questions",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Question",
                table: "Questions");
        }
    }
}
