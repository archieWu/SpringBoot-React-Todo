import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute.jsx'
import LoginComponent from './LoginComponent.jsx'
import ListTodosComponent from './ListTodosComponent.jsx'
import ErrorComponent from './ErrorComponent.jsx'
import HeaderComponent from './HeaderComponent.jsx'
import FooterComponent from './FooterComponent.jsx'
import LogoutComponent from './LogoutComponent.jsx'
import WelcomeComponent from './WelcomeComponent.jsx'
import TodoCompent from './TodoComponent.jsx'
import AddUserComponent from "./AddUserComponent";


class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp ">
                <Router>
                        <HeaderComponent/>
                        <div className={"container"}>
                            <Switch>
                                <Route path="/" exact component={LoginComponent}/>
                                <Route path="/login" component={LoginComponent}/>
                                <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent}/>
                                <AuthenticatedRoute path="/todos/:id" component={TodoCompent}/>
                                <AuthenticatedRoute path="/todos" component={ListTodosComponent}/>
                                <Route path="/logout" component={LogoutComponent}/>
                                <Route path="/adduser/:id" component={AddUserComponent}/>

                                <Route component={ErrorComponent}/>
                            </Switch>
                        </div>
                        <FooterComponent/>
                </Router>
            </div>
        )
    }
}

export default TodoApp