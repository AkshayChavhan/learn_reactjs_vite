import { createSlice, nanoid } from '@reduxjs/toolkit'

const initialState = { todos: [] }

const addTodoFunction = (state, action) => {
    const todo = {
        id: nanoid(),
        text: action.payload
    }
    state.todos.push(todo);
}

const removeTodoFunction = (state, action) => {
    state.todos = state.todos.filter((item) => item.id !== action.payload)
    //id will passed in payload of action
}


const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: addTodoFunction,
        removeTodo: removeTodoFunction

    },
})

export const { addTodo , removeTodo } = todoSlice.actions ;

export default todoSlice.reducer;
