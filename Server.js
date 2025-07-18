const express= require("express");
const path= require("path");
const app = express ();
app.use(express.json());
app.get('\login',(req,res)={
        res.sendFile(path.join(__dirname,'index.html');
});
app.post('\login',(req,res)={
         res.json(req.body);
});
app.listen(3000,()={
           console.log('server running at port 3000');
});
