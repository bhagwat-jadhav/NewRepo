const express= require("express");
const path= require("path");
const app = express ();
const port= process.env.PORT || 3000;
app.get('/login',(req,res)={
        res.sendFile(path.join(__dirname,'index.html');
});
app.post('/login',(req,res)={
         res.json(req.body);
});
app.listen(port,()={
           console.log('server running at port 3000');
});
