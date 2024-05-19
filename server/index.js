
/*
console.log("beginning");

const {Translate} = require('@google-cloud/translate').v2;
const translate = new Translate();


async function quickStart() {
    // The text to translate
    const text = 'Hello, world!';
  
    // The target language
    const target = 'hi';
  
    // Translates some text into Russian
    const [translation] = await translate.translate(text, target);
    console.log(`Text: ${text}`);
    console.log(`Translation: ${translation}`);

  }
  
  quickStart();
  */

const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());


//Routes

//create a message
app.post("/babelfish", async (req, res)=>{
  try {
    console.log(req.body);

    const data = req.body;

    const newMessage = await pool.query("INSERT INTO messages (username, message, time) VALUES($1, $2, $3)", [data.username, data.message, data.time]);

    res.json(newMessage);

  } catch (err) {
    console.error(err.message);
  }
})

//update language

app.listen(5000, ()=>{
  console.log("Listening on port 5000");
})