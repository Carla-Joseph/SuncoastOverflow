using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SuncoastOverflow.Models;

namespace SuncoastOverflow.Controllers
{
    // All of these routes will be at the base URL:     /api/Questions
    // That is what "api/[controller]" means below. It uses the name of the controller
    // in this case QuestionsController to determine the URL
    [Route("api/[controller]")]
    [ApiController]
    public class QuestionsController : ControllerBase
    {
        // This is the variable you use to have access to your database
        private readonly DatabaseContext _context;

        // Constructor that recives a reference to your database context
        // and stores it in _context for you to use in your API methods
        public QuestionsController(DatabaseContext context)
        {
            _context = context;
        }

        // GET: api/Questions
        //
        // Returns a list of all your Questions
        //
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Questions>>> GetQuestions(string filter)
        {
            if (filter == null)
            {
                return await _context.Questions.OrderBy(question => question.Language).Include(question => question.Answer).ToListAsync();
            }
            else
            {
                return await _context.Questions.Where(question => question.Language.Contains(filter)).OrderBy(question => question.Language).Include(question => question.Answer).ToListAsync();
            }

        }

        // GET: api/Questions/5
        //
        // Fetches and returns a specific questions by finding it by id. The id is specified in the
        // URL. In the sample URL above it is the `5`.  The "{id}" in the [HttpGet("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpGet("{id}")]
        public async Task<ActionResult<Questions>> GetQuestions(int id)
        {
            // Find the questions in the database using `FindAsync` to look it up by id
            var questions = await _context.Questions.FindAsync(id);

            // If we didn't find anything, we receive a `null` in return
            if (questions == null)
            {
                // Return a `404` response to the client indicating we could not find a questions with this id
                return NotFound();
            }

            //  Return the questions as a JSON object.
            return questions;
        }

        // PUT: api/Questions/5
        //
        // Update an individual questions with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpPut("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        // In addition the `body` of the request is parsed and then made available to us as a Questions
        // variable named questions. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Questions POCO class. This represents the
        // new values for the record.
        //
        [HttpPut("{id}")]
        public async Task<IActionResult> PutQuestions(int id, Questions questions)
        {
            // If the ID in the URL does not match the ID in the supplied request body, return a bad request
            if (id != questions.Id)
            {
                return BadRequest();
            }

            // Tell the database to consider everything in questions to be _updated_ values. When
            // the save happens the database will _replace_ the values in the database with the ones from questions
            _context.Entry(questions).State = EntityState.Modified;

            try
            {
                // Try to save these changes.
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                // Ooops, looks like there was an error, so check to see if the record we were
                // updating no longer exists.
                if (!QuestionsExists(id))
                {
                    // If the record we tried to update was already deleted by someone else,
                    // return a `404` not found
                    return NotFound();
                }
                else
                {
                    // Otherwise throw the error back, which will cause the request to fail
                    // and generate an error to the client.
                    throw;
                }
            }

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the updated data.
            //
            // return Ok(questions)
            //
            return NoContent();
        }

        // POST: api/Questions
        //
        // Creates a new questions in the database.
        //
        // The `body` of the request is parsed and then made available to us as a Questions
        // variable named questions. The controller matches the keys of the JSON object the client
        // supplies to the names of the attributes of our Questions POCO class. This represents the
        // new values for the record.
        //
        [HttpPost]
        public async Task<ActionResult<Questions>> PostQuestions(Questions questions)
        {
            // Indicate to the database context we want to add this new record
            _context.Questions.Add(questions);
            await _context.SaveChangesAsync();

            // Return a response that indicates the object was created (status code `201`) and some additional
            // headers with details of the newly created object.
            return CreatedAtAction("GetQuestions", new { id = questions.Id }, questions);
        }

        // DELETE: api/Questions/5
        //
        // Deletes an individual questions with the requested id. The id is specified in the URL
        // In the sample URL above it is the `5`. The "{id} in the [HttpDelete("{id}")] is what tells dotnet
        // to grab the id from the URL. It is then made available to us as the `id` argument to the method.
        //
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteQuestions(int id)
        {
            // Find this questions by looking for the specific id
            var questions = await _context.Questions.FindAsync(id);
            if (questions == null)
            {
                // There wasn't a questions with that id so return a `404` not found
                return NotFound();
            }

            // Tell the database we want to remove this record
            _context.Questions.Remove(questions);

            // Tell the database to perform the deletion
            await _context.SaveChangesAsync();

            // return NoContent to indicate the update was done. Alternatively you can use the
            // following to send back a copy of the deleted data.
            //
            // return Ok(questions)
            //
            return NoContent();
        }

        // Private helper method that looks up an existing questions by the supplied id
        private bool QuestionsExists(int id)
        {
            return _context.Questions.Any(questions => questions.Id == id);
        }
    }
}
