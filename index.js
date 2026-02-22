// index.js
const http = require("http");
const os = require("os");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    return res.end(
      JSON.stringify({
        status: "ok",
        uptime: process.uptime(),
        timestamp: new Date(),
      })
    );
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(
    JSON.stringify({
      message: "🚀 Test server running successfully",
      hostname: os.hostname(),
      platform: os.platform(),
      memoryUsage: process.memoryUsage().rss,
      uptime: process.uptime(),
      port: PORT,
    })
  );
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
