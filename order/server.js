const express = require('express');
const app = express();

app.get("/list", (req, res) => {
    console.log("hello")
    const response = {
        data: {
            item: [
                {
                    id: 1, name: "order 1"
                },
                {
                    id: 2, name: "order 2"
                }
            ]
        }
    }
    res.status(200).json(response)
});

app.get('/',(req,res)=>{
    res.status(200).json({message:"order call successfully"})
})

app.listen(5002, () => {
    console.log("app list 5002 port")
})