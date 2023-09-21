const connectToMongo = require('./db');
const express = require('express');
var cors = require('cors');
const app = express();
const path=require('path')
//port
const port = 5000;
//static files
app.use(express.static(path.join(__dirname, './client/build')))
app.get("*",function(req,res){
  res.sendFile(path.join(__dirname,'./client/build/index.html'))
});
app.use(cors())
connectToMongo();
app.use(express.json());
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {
  res.send('GET request to the homepage')
})

// POST method route
app.post('/', (req, res) => {
  res.send('POST request to the homepage')
})
app.listen(port, () => {
  console.log(`iNotebook backened listining at http://localhost:${port}`)
})