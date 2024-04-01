const redis = require("redis");

const redisConfig = {
  password: process.env.REDIS_PASSWORD,
  socket: {
    host: process.env.REDIS_HOST,
    port: process.env.REDIS_PORT,
  },
};

const client = redis.createClient(redisConfig);

client.connect();

process.on("SIGINT", () => {
  client.quit();
});

module.exports = client;
