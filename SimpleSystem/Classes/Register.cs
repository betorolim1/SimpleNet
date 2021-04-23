using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SimpleSystem.Classes
{
    [Route("api/v1/register")]
    public class Register : ControllerBase
    {
        const decimal PERCENTAGE = 0.05M;

        [HttpPost]
        public IActionResult Post(int plots, decimal value)
        {
            var totalValue = (value * plots);
            var calculatedPercentage = totalValue * PERCENTAGE;
            var calculatedValue = totalValue + calculatedPercentage;

            return Ok(calculatedValue);
        }
    }
}
