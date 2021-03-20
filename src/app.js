const express = require('express')
require("./db/conn")
const Student = require("./models/students")
const studentRouter = require('./routers/student')
const app = express()
const port  = process.env.PORT || 8000

app.use(express.json())
app.use(studentRouter)

// // 1: create a new router
// const router = new express.Router()

// // 2: we need to define the router

// router.get("/Home", (req, res) => {
//     res.send("Hello whatsapp")
// })

// // 3. we need to register our router instance which we want to use
// app.use(router)

// post request using promises
// app.post("/students", (req, res) => {
//     console.log(req.body)
//     const user = new Student(req.body)
    
//     user.save()
//     .then(() => {
//         res.status(201).send(user)
//     }).catch((e) => {
//         res.status(400).send(e)
//     })
// })

// // post request using async await
// app.post("/students", async (req, res) => {
//     try {
//         const user = new Student(req.body)
//         const createUser = await user.save()
//         res.status(201).send(createUser)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// // get requests to get all the students
// app.get("/students", async (req, res) => {
//     try {
//         const studentsData = await Student.find()
//         res.status(200).send(studentsData)
//     } catch (error) {
//         res.status(400).send(error)
//     }
// })

// // get individual student
// app.get("/students/:id", async (req, res) => {
//     try {
//         // u can use req.query but you will not get whole students data
//         // bcoz in restapi endpoint name should be the same
//         // const _id = req.query.id
//         const _id = req.params.id
//         // console.log(_id)
//         // if we use findById() then we pass id as string and we can enclosed 
//         // id in {_id} curly bracis too.
//         // but this is not the case in find() method u have to mandatory pass
//         // an object : {_id}
//         const studentData = await Student.findById(_id)
//         console.log({_id})
//         if(!studentData){
//             // not found
//             return res.status(404).send()
//         }else{
//             res.status(200).send(studentData)
//         }
//         // res.status(200).send(studentData)
//     } catch (error) {
//         // internal server error
//         res.status(500).send(error)
//     }
// })


// // update part of the document using PATCH HTTP method
// app.patch("/students/:id", async (req, res) => {
//     try {
//         const _id = req.params.id
//         // console.log(_id)
//         const updateStudent = await Student.findByIdAndUpdate(_id, req.body, {
//             new: true,
//         })
//         res.status(200).send(updateStudent) 
//     } catch (error) {
//         res.status(404).send()
//     }
// })


// // delete a student
// app.delete("/students/:id", async (req, res) => {
//     try {
//         const deleteStudent = await Student.findByIdAndDelete(req.params.id)
//         // if(!req.params.id){
//         //     return res.status(400).send()
//         // }
//         if(!deleteStudent){
//             return res.status(400).send()
//         }
//         res.status(200).send(deleteStudent)
//     } catch (error) {
//         // status code: 500 mean internal server error
//         res.status(500).send(error)
//     }
// })

app.listen(port, () => {
    console.log(`listning to port no ${port}...`)
})


//You DO NOT NEED express.json() and express.urlencoded()
// for GET Requests or DELETE Requests. We only need it for
// post and put requests.

// express.json() is a method inbuilt in express to recognize the incoming
// Request Object as a JSON Object. This method is called as a middleware
// in your application using the code: app.use(express.json());