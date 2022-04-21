const express = require('express');
const app = express();

// Parse JSON bodies for this app. Make sure you put
// `app.use(express.json())` **before** your route handlers!
app.use(express.json());

app.post('*', (req, res) => {
  req.body; // JavaScript object containing the parse JSON
  res.json(req.body);
});
const PORT = 8080;
app.get('/skins/uncommon', (req, res)=>{
  res.status(200).send({
   name:'',
    source:''
 })
});
app.get('', (res, req)=>{
  res.status(200).send({
    State:'Running'
  })
})
app.get('/skins/rare', (req, res)=>{
  res.status(200).send({
    name:'',
    source:''
  })
});
app.get('/skins/epic', (req, res)=>{
  res.status(200).send({
   name:'',
    source:''
  })
});
app.get('/skins/legendary', (req, res)=>{
  res.status(200).send({
    name:'',
    source:''
  
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
  ()=>console.log("it's alive on https://Fortnite-skins.mewtwo50002.repl.co/${PORT}")
)