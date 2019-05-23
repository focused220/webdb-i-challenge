const express = require('express');
const db = require('./data/accounts-model');

const server = express();
server.use(express.json())

// your code here

server.post('/', async (req, res) =>{
    const account = req.body;
    console.log(account)
    try{
        const newAccount = await db.add(account)
        res.status(201).json(newAccount)
    }catch(error){res.status(500).json(error)}
    
})

server.get('/', async (req, res) =>{
    try{
        const accounts = await db.find()
        res.status(201).json(accounts)
    }catch(error){res.status(500).json(error)}
})

server.get('/:id', async (req, res) =>{
    const {id} = req.params;
    console.log(id)
    try{
        const account = await db.findById(id)
        res.status(201).json(account)
    }catch(error){res.status(500).json(error)}
})

server.put('/:id', async (req, res) =>{
    const {id} = req.params;
    const changes = req.body;
    console.log(id)
    try{
        const update = await db.update(id, changes) 
        res.status(201).json(update)
    }catch(error){res.status(500).json(error)}
})

server.delete('/:id', async (req, res) =>{
    const {id} = req.params;
    try{
        const removed = await db.remove(id)
        res.status(201).json(removed);
    }catch(error){res.status(500).json(error)}
})


module.exports = server;