const http = require("http")
const request = require('request');

const PORT = 3000
const server = http.createServer()
server.setTimeout(100)
server.listen({  host: '127.0.0.1',port:  PORT}, error => {
  if (error) {
    return console.error(error)
  }

  console.log(`Server listening on port ${PORT}`)
})

server.on("request", (req, response) => {
  console.log("Request received")
  request.get("https://database.lichess.org/antichess/lichess_db_antichess_rated_2024-08.pgn.zst").pipe(response)
})
