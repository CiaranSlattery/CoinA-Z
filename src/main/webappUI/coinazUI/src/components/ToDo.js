import React from "react";

class ListToDosComponents extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            todos : [
                { id: 1, description : 'Learn React', done:false, targetDate: new Date()},
                { id: 2, description : 'Implement dashboard', done:false, targetDate: new Date()},
                { id: 3, description : 'User Login', done:false, targetDate: new Date()}
            ]
        }
    }

    render() {
        return <div>
            <center>
                <h1>Coin A-Z Todos</h1>
            </center>
            <div className="container">

            <table className="table">
                <thead>
                    <tr>
                        <th>Description </th>
                        <th>Target Date </th>
                        <th>Is Completed? </th>
                    </tr>
                </thead>
                <tbody>
                {
                    this.state.todos.map (
                        todo =>
                            <tr key={todo.id}>
                                <td>{todo.description}</td>
                                <td>{todo.done.toString()}</td>
                                <td>{todo.targetDate.toString()}</td>
                            </tr>
                    )
                }
                </tbody>
            </table>
            </div>
        </div>
    }
}

export default ListToDosComponents;