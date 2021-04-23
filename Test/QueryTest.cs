using Microsoft.AspNetCore.Mvc;
using NUnit.Framework;
using SimpleSystem.Classes;

namespace Tests
{
    public class QueryTests
    {
        [Test]
        public void Result_most_be_Maria()
        {
            const int number = 2;

            var query = new Query();

            var result = query.Get(number) as OkObjectResult;

            Assert.NotNull(result);
            Assert.AreEqual("Maria", result.Value);
        }
        
        [Test]
        public void Result_most_be_empty()
        {
            const int number = 20;

            var query = new Query();

            var result = query.Get(number) as OkObjectResult;

            Assert.NotNull(result);
            Assert.AreEqual("", result.Value);
        }
    }
}