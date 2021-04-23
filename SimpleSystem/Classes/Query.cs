using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleSystem.Classes
{
    [Route("api/v1/query")]
    public class Query : ControllerBase
    {
        [HttpGet("{number}")]
        public IActionResult Get(int number)
        {
            var list = getList();

            var item = (from val in list where val.Key == number select val.Value).FirstOrDefault();

            return Ok(item ?? "");
        }

        private List<KeyValuePair<int, string>> getList()
        {
            var list = new List<KeyValuePair<int, string>>()
            {
                new KeyValuePair<int, string>(1, "João"),
                new KeyValuePair<int, string>(2, "Maria"),
                new KeyValuePair<int, string>(3, "Ana")
            };

            return list;
        }
    }
}
