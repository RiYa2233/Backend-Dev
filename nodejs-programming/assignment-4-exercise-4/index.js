const express = require("express");
const app = express();
app.use(express.json());

let tasks = [];
let id = 1;

app.post("/tasks", (req, res) => {
  const { title, description } = req.body;
  const task = { id: id++, title, description, completed: false };
  tasks.push(task);
  res.status(201).json(task);
});

app.get("/tasks", (req, res) => {
  res.json(tasks);
});

app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });
  res.json(task);
});

app.put("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ message: "Task not found" });

  const { title, description, completed } = req.body;
  task.title = title ?? task.title;
  task.description = description ?? task.description;
  task.completed = completed ?? task.completed;

  res.json(task);
});

app.delete("/tasks/:id", (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ message: "Task not found" });

  tasks.splice(index, 1);
  res.json({ message: "Task deleted successfully" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
