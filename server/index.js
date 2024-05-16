
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