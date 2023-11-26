const express = require("express");
const socketIO = require("socket.io");
const cors = require("cors"); 
const hpp = require("hpp");
const http = require("http");
const connectDB = require("./config/db");

const bodyParser = require('body-parser');
const article = require("./routes/article");
const Article = require("./models/Article");
 
const app = express();
const server = http.createServer(app);
const io = socketIO(server, { pingTimeout: 60000, cors: { origin: "*" } }); 

// app.use(express.static(path.join(__dirname, "public")));fv

connectDB();

const changeStream = Article.watch();


// ------ limit MB -----
app.use(bodyParser.json({ limit: '500mb' }));
app.use(bodyParser.urlencoded({ limit: '500mb', extended: true }));

app.use(hpp()); 
app.use(express.json()); 

app.use(cors()); 

io.on("connection", (socket) => {
  changeStream.on('change', (change) => {
    console.log('|====> ', change.fullDocument._id.toString());
    socket.emit('dataChange', change);
  });
  console.log("A user connected: ", socket.id);

  socket.on("disconnect", () => {
    console.log("A user disconnected");
  });
});

app.use("/api/v1/article", article);

 

server.listen(
   5000,
  console.log(`express--> 5000 ... `)
);
 
process.on("HunhandledRejection", (err) => {
  console.log(`errrrrr!!!! : ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
