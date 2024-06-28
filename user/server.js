const express = require('express');
const app = express();

app.get("/list", (req, res) => {
    const response = {
        data: {
            item: [
                {
                    id: 1, name: "user1"
                },
                {
                    id: 2, name: "user2"
                }
            ]
        }
    }
    res.status(200).json(response)
});

app.get("/",(req,res)=>{
    res.status(200).json({message:"user call successfully"})
})

app.listen(5001, () => {
    console.log("app list 5001 port")
})