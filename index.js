const express = require('express')
const app = express();


app.set('view engine', 'ejs');
app.set('views', './views');
app.use(express.static('public'));

app.get('/', (req, res)=>{
  res.render('index', {
    title:"Home",
  })
})

app.get('/api/example', (req, res)=>{
  res.status(200).json({title:"API", code:"200", name:"EXAMPLE"})
})

app.get('api/bad', (req,res)=> {
  let err = Functions.test([val=200])
  Functions.print([err])
  res.send('index.js')
})


app.listen(8080, function(){
console.log("[TENS MOBILE PROJECT]  Server started!")
})