export function addTasks(taskParam) {
    return {
        type: 'ADD_TASK',
        data: taskParam,
    }
}