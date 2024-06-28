const express = require('express');
const app = express();

app.get("/list", (req, res) => {
    const response = {
        data: {
            item: [
                {
                    id: 1, name: "payment 1"
                },
                {
                    id: 2, name: "payment 2"
                }
            ]
        }
    }
    res.status(200).json(response)
});


app.get('/',(req,res)=>{
    res.status(200).json({message:"payment call successfully"})
})

app.listen(5003, () => {
    console.log("app list 5003 port")
})