//Declaring the framework im going to use for the server
const express = require('express')
const app = express()
const port = 3000   //Specifying port

const path = require('path');
const bodyParser = require("Body-parser");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

//Response shown when localhost 3000 URL is called
app.get('/', (req, res) => {    //Listening for get request
    res.send('Welcome to Data Representation & Querying');
})


//Adding new response path which listens for get /hello (and takes the next part of the url as an argument)
app.get('/hello/:name', (req, res) => { // Take note of the "":name" part
    res.send('Hello ' + req.params.name); //printing String and name variable
})
//Adding new path which listens for get /movies. Holds json data
app.get('/api/movies', (req, res) => {

    //Data in json format
    const myMovies = [
        {
            "Title": "Avengers: Infinity War",
            "Year": "2018",
            "imdbID": "tt4154756",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg"
        },
        {
            "Title": "Captain America: Civil War",
            "Year": "2016",
            "imdbID": "tt3498820",
            "Type": "movie",
            "Poster": "https://m.media-amazon.com/images/M/MV5BMjQ0MTgyNjAxMV5BMl5BanBnXkFtZTgwNjUzMDkyODE@._V1_SX300.jpg"
        }
    ];

    //Sending data from server to client as json
    res.json({ movies: myMovies })
})
//Adding new path which listens for get /test.
app.get('/test', (req,res)=>{
    res.sendFile(__dirname+'/index.html');
    
})
//Adding new path which listens for get /name
//It returns a message, which includes the typed in first and second names
app.get('/name',(req,res)=>{
    res.send('Hello '+ req.query.fname+ " "+ req.query.lname);
})
//Adding new response path which listens for post /name
app.post('/name', (req, res) => { 
    res.send('Hello '+ req.body.fname + ' ' + req.body.lname)
})


app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})