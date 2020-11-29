import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import moment from 'moment'
import TodoServices from "../../services/TodoServices";


class ListTodosComponent extends Component{

    constructor(props) {
        super(props);
        this.state={
            todos: [],
            message : null,
            username: AuthenticationService.getLoggedInUserName(),
        }
        this.query = this.query.bind(this);

    }

    componentDidMount() {
        this.query()

    }

    query(){
        TodoServices.findAll(this.state.username)
            .then(
                response => {
                    this.setState({
                        todos: response.data
                    })
                }
            )
    }

    render() {
        return (

            <div className={'listtodoscomponent'}>
                <div className={"container"}>
                    <h1>待辦事項</h1>
                    {this.state.message && <div className={"alert alert-success"}>{this.state.message}</div>}
                    <div className={"row justify-content-end"}>
                        <button className={"btn btn-primary"} onClick={() => {
                            this.props.history.push('/todos/-1');
                        }}>新增</button>
                    </div>
                    <table className={"table"}>
                        <thead>
                        <tr>
                            <th>事項</th>
                            <th>日期</th>
                            <th>達成 ?</th>
                            <th>修改</th>
                            <th>刪除</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            this.state.todos.map(
                                todo => (
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                        <td>{todo.done?"達成":"未達成"}</td>
                                        <td><button className={"btn btn-warning"}onClick={
                                            () => {
                                                this.props.history.push(`/todos/${todo.id}`);
                                            }}>修改</button> </td>
                                        <td><button className={"btn btn-danger"} onClick={
                                            () =>
                                            TodoServices.deleTodo(this.state.username,todo.id)
                                                .then(
                                                    response => {
                                                        this.setState({
                                                            message:`已刪除成功`
                                                        })
                                                        this.query()
                                                    }
                                                )
                                        }>刪除</button> </td>
                                    </tr>
                                )
                            )
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }

}

export default ListTodosComponent;