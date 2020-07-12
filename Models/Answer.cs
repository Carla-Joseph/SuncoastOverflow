using System;

namespace SuncoastOverflow.Models
{
    public class Answer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Language { get; set; }
        public DateTime CreateAt { get; private set; } = DateTime.Now;
        public string Question { get; set; }
        public int QuestionId { get; set; }
    }
}