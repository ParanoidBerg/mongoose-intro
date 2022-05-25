const { Router } = require("express");
const students = Router();
const Student = require('../models/Student.model')

students.get('/students', (req, res) => {
    Student.find().then((data) => {res.json(data)})
    
})
students.post('/students', (req, res) => {
    Student.create({
        name: req.body.name,
        phone: req.body.phone,
        age: req.body.age
    }).then(() => {
        res.json('Студент добавлен')
    })
   })

students.delete('/students/:id', (req, res) => {
    Student.findByIdAndRemove(
        req.params.id
    ).then(() => {
        res.json('Студент удален')
    })
    
})
students.patch('/students/:id', (req, res) => {
    Student.findByIdAndUpdate(req.params.id, {name: req.body.name, phone: req.body.phone, age: req.body.age})
        .then(() => {
        res.json()
    })
    
})

module.exports = students

