import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";
import {Link} from "react-router-dom";
import { withRouter } from 'react-router';

class HeaderComponent extends Component{
    constructor(props) {
        super(props);
        this.state={
            username: AuthenticationService.getLoggedInUserName(),
        }
    }
    render(){
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();
        return (
            <header>
                <nav className={"navbar fixed-top navbar-expand-md navbar-dark bg-dark"}>
                    <div><a href={"https://www.linkedin.com/in/%E5%90%B3-%E6%94%BF%E6%A8%BA-58585a1a7/"} className={"navbar-brand"}>Archie</a></div>
                    <ul className={"navbar-nav"}>
                        {isUserLoggedIn && <li><Link className={"nav-link"} to={`/welcome/${this.state.username}`}>首頁</Link></li>}
                        {isUserLoggedIn && <li><Link className={"nav-link"} to={"/todos"}>待辦事項</Link></li>}
                    </ul>
                    <ul className={"navbar-nav navbar-collapse justify-content-end"}>
                        <li><Link className={"nav-link"} to={`/adduser/${isUserLoggedIn?1:-1}`}>{isUserLoggedIn?"修改用戶資料":"註冊"}</Link></li>
                        {!isUserLoggedIn && <li><Link className={"nav-link"} to={"/login"}>登入</Link></li>}
                        {isUserLoggedIn && <li><Link className={"nav-link"} to={"/logout"} onClick={AuthenticationService.logout}>登出</Link></li>}
                    </ul>
                </nav>
            </header>

        );
    }
}

export default withRouter(HeaderComponent);