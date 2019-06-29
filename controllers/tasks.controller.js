const Task = require("../models/Task");

const get = async function(req, res){
    try {    
        const tasks = await Task.find();
    

        return res.send(tasks);
        
    } catch (error) {
        res.status(500).send('Erro ao buscar tarefa');      
    }
}

const create = async function(req, res){
    try {
        const task = await Task.create(req.body);

        return res.send(task);
        
    } catch (error) {
        res.status(500).send('Erro ao cadastrar tarefa');
    }
}

const update = function(req, res){

}
const remove = function(req, res){

}

module.exports = {get, create, update, remove};
