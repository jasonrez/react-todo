let express =require('express');

let app = express();
const PORT = process.env.PORT || 3010;

app.use(function (req, res, next){
  if(req.headers['x-forwarded-proto'] === 'https'){
    res.redirect('http://' + req.hostname + req.url);
  } else {
    next();
  }
});

app.use(express.static('public'));

app.listen(PORT, function(){
  console.log(`server listening on ${PORT}... or should be`);
});
