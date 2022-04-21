
const express = require('express')();
const app = express();
const PORT = 8080;

app.use(express.json())

app.get('/skins/uncommon', (req, res)=>{
  res.status(200).send({
    Rarity:'Uncommon',
    Price:'800'
  })
});
app.get('/skins/rare', (req, res)=>{
  res.status(200).send({
    Rarity:'Rare',
    Price:'1500'
  })
});
app.get('/skins/epic', (req, res)=>{
  res.status(200).send({
    Rarity:'Epic',
    Price:'1500'
  })
});
app.get('/skins/legendary', (req, res)=>{
  res.status(200).send({
    Rarity:'Legendary',
    Price:'2000'
  })
});

app.post('skins/uncommon/:id',(req, res)=>{
  const {id} = req.params;
  const {name} = req.body; 
  const {source} = req.body

  if (!name){
    res.status(418).send({message: 'We need a name! '})
  }
  res.send({
    uncommon: 'Name of skin is ${name} and ID of $(id) and source of ${source}',
    
  })
});


app.listen(
  PORT,
  ()=>console.log("it's alive on https://Fortnite-skins.mewtwo50002.repl.co${PORT}")
)