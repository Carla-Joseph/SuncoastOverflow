using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace SuncoastOverflow.Models
{
    public class Questions
    {
        public int Id { get; set; }
        [Required]
        public string Name { get; set; }
        [Required]
        public string Language { get; set; }
        [Required]
        public string Question { get; set; }
        public List<Answer> Answer { get; set; }

    }
}