// let nextTodoId = 0;

export function addTasks(taskParam) {
    return {
        type: 'ADD_TASK',
        data: {
            text: taskParam,
            id: Date.now()
        }
    }
}

export function deleteTasks(id) {
    return {
        type: 'DELETE_TASK',
        id: id,
    }
}







