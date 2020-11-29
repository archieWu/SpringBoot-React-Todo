import React, {Component} from "react";
import AuthenticationService from "./AuthenticationService";

class LoginComponent extends Component{

    constructor(props) {
        super(props);

        this.state= {
            username: '',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false,
        }

        this.handlerChange = this.handlerChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    handlerChange(e){
        this.setState({
            [e.target.name]
                : e.target.value
        })
    }

    loginClicked(){
        // AuthenticationService
        //     .executeBasicAuthenticationService(this.state.username,this.state.password)
        //     .then(() => {
        //         AuthenticationService.registerSuccessfulLogin(this.state.username,this.state.password)
        //         this.props.history.push(`/welcome/${this.state.username}`)
        //     }).catch(() => {
        //         this.setState({
        //             showSuccessMessage:false,
        //             hasLoginFailed:true
        //         })
        //     })
        AuthenticationService
            .executeJwtAuthenticationService(this.state.username,this.state.password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.username,response.data.token)
                this.props.history.push(`/welcome/${this.state.username}`)
            }).catch(() => {
            this.setState({
                showSuccessMessage:false,
                hasLoginFailed:true
            })
        })
    }

    render() {
        return(
            <div className={'LoginComponent'}>
                <h1>登入</h1>
                <div className={"container"}>
                    {this.state.hasLoginFailed && <div className={"alert alert-warning"}>登入失敗</div>}
                    {this.state.showSuccessMessage && <div>Login Successful</div>}
                    使用者帳號: <input type={'text'} name={'username'} value={this.state.username} onChange={this.handlerChange}/>
                    密碼: <input type={'password'} name={'password'} value={this.state.password} onChange={this.handlerChange}/>
                    <button className={"btn btn-success"} onClick={this.loginClicked}>登入</button>
                </div>

            </div>



        );
    }


}
export default LoginComponent;