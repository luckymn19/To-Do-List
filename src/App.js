import React from 'react';
import TodoList from './component/ToDoList.js'

class App extends React.Component {
    render() {
        return (
            <div>
                <h1>To Do List</h1>
                <TodoList />
            </div>
        )
    }
}

export default App;