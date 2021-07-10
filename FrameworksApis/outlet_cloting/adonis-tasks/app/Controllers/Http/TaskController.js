'use strict'
const Task = use('App/Models/Task')
// app/Controllers/Http/TaskController.js

// remember to reference the Task model at the top


class TaskController {
    async index ({ view }) {
        const tasks = await Task.all()

        return view.render('tasks.index', { tasks: tasks.toJSON() })
}
}
module.exports = TaskController