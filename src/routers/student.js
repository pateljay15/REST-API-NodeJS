const express = require('express')
const Student = require("../models/students")
const router = new express.Router()

// post request using async await
router.post("/students", async (req, res) => {
    try {
        const user = new Student(req.body)
        const createUser = await user.save()
        res.status(201).send(createUser)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get requests to get all the students
router.get("/students", async (req, res) => {
    try {
        const studentsData = await Student.find()
        res.status(200).send(studentsData)
    } catch (error) {
        res.status(400).send(error)
    }
})

// get individual student
router.get("/students/:id", async (req, res) => {
    try {
        // u can use req.query but you will not get whole students data
        // bcoz in restapi endpoint name should be the same
        // const _id = req.query.id
        const _id = req.params.id
        // console.log(_id)
        // if we use findById() then we pass id as string and we can enclosed 
        // id in {_id} curly bracis too.
        // but this is not the case in find() method u have to mandatory pass
        // an object : {_id}
        const studentData = await Student.findById(_id)
        console.log({_id})
        if(!studentData){
            // not found
            return res.status(404).send()
        }else{
            res.status(200).send(studentData)
        }
        // res.status(200).send(studentData)
    } catch (error) {
        // internal server error
        res.status(500).send(error)
    }
})


// update part of the document using PATCH HTTP method
router.patch("/students/:id", async (req, res) => {
    try {
        const _id = req.params.id
        // console.log(_id)
        const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
            new: true,
        })
        res.status(200).send(updateStudent) 
    } catch (error) {
        res.status(404).send()
    }
})


// delete a student
router.delete("/students/:id", async (req, res) => {
    try {
        const deleteStudent = await Student.findByIdAndDelete(req.params.id)
        // if(!req.params.id){
        //     return res.status(400).send()
        // }
        if(!deleteStudent){
            return res.status(400).send()
        }
        res.status(200).send(deleteStudent)
    } catch (error) {
        // status code: 500 mean internal server error
        res.status(500).send(error)
    }
})

module.exports = router