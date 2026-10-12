import express from "express";
import prisma from "./lib/prisma.js";

const app = express();

const port = 3000;

app.use(express.json());

app.get('/',(req,res)=>{
    res.send('hello world');
})

app.post('/comment', async (req, res) => {
    const { speech } = req.body;

    const result = await prisma.comment.create({
        data: {
            speech
        }
    });

    res.json(result);
});

app.listen(port,()=>{
    console.log(`example app listening on port ${port}`);
})