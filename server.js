const app = require("./src/app");

const PORT = process.env.PORT || 3000;

//notification start server
const server = app.listen(3000, function (err) {
  if (err) console.log("Error when start server: ", err);
  else console.log(`Server running on port ${PORT}`);
});

//notification close server
// process.on("SIGINT", () => {
//   server.close(() => console.log("Exit Server Express"));
// });
