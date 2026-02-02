const express = require("express");

const app = express();

const PORT = 8000;


const students = [
    {id: 1, name: "raj", branch: "CSE"},
    {id: 2, name: "rahul", branch: "ECE"},
    {id: 3, name: "rishi", branch: "IT"},
];

app.get("/", (req, res)=>{
    res.send("welcome to home page");
});

app.get("/students", (req, res)=>{
    res.json(students);
})

app.get("/students/:id", (req,res)=>{
    const id= req.params.id;

    const arrayIndex= students.findIndex(s=>s.id==id);

    const data= students[arrayIndex];
    res.json(data);
    if (!student) {
        return res.status(404).json({ message: "Student not found" });
    }

    res.json(student);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});


