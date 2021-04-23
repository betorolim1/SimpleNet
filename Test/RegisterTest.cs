using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using SimpleSystem.Classes;
using System;
using System.Collections.Generic;
using System.Text;

namespace Tests
{
    public class RegisterTest
    {
        [Test]
        public void Most_be_correct_value()
        {
            const int plots = 10;
            const decimal value = 100M;

            var query = new Register();

            var result = query.Post(plots, value) as OkObjectResult;

            Assert.NotNull(result);
            Assert.AreEqual(1050, result.Value);
        }
    }
}
