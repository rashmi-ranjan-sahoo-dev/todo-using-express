const express = require("express");
const app = express()

let todo = [];
app.use(express.json());

app.post("/todos",function(req,res){
    let id = req.body.id;
    let add = req.body.add;
    todo.push({
        id:id,
        add:add
    })
    res.json({
        msg:"done"
    }) 
})

app.get("/todos",function(req,res){
   res.json(todo)
})

app.delete("/todos",function(req,res){
    //what ever id you can delete
    let id = req.body.id;
    for(i = 0 ; i < todo.length ; i++)
    {
        if(todo[i].id == id)
        {
            todo.splice(i,1);
        }
    }
    res.json({
        msg:"done"
    })
})

app.put("/todos",function(req,res){
    let id = req.body.id;
    let add = req.body.add;
    for(let i = 0 ; i < todo.length ; i++)
    {
        if(todo[i].id === id)
        {
            todo[i].add = add;
        }
    }
    res.json({
        msg:"done"
    })
})

app.listen(3000)