// backend/elastic-client.js
const { Client } = require("@elastic/elasticsearch");

require("dotenv").config({ path: ".elastic.env" });

const elasticClient = new Client({
  cloud: {
    id: "638558af472f40cab08a97efb7a0aedf:dXMtY2VudHJhbDEuZ2NwLmNsb3VkLmVzLmlvJGMyZTQwOWZiMzc5ODRmYmQ5NWU5NWJiNzNmYTUyMjc2JDExZTdiYWQxMWUxNjQ5ZTg4NWQ2YzQ2Nzk2YTljZDU2"
  },
  auth: {
    username: "enterprise_search",
    password: "uhUj8T6SVJif7CC",
  },
});

module.exports = elasticClient;