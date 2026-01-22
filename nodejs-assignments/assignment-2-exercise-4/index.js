import { createTodo, readTodo, updateTodo, deleteTodo } from "./todoapi.js"

console.log(createTodo("Learn Node.js"))
console.log(createTodo("Practice Assignment"))

console.log(readTodo())

console.log(updateTodo(0))
console.log(deleteTodo(1))