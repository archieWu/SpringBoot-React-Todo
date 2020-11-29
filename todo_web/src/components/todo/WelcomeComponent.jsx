import React, {Component} from "react";
import {Link} from "react-router-dom";
import axios from 'axios'

class WelcomeComponent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            welcomeMessage: ''
        }

        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)


    }

    render() {
        return (
            <div className={'welcomecomponent'}>
                <h1>歡迎!</h1>
                <div className={"container"}>
                    歡迎 {this.props.match.params.name}.
                    你可以修改您的待辦事項 <Link to={"/todos"}>這裡</Link>.
                </div>
                <div className={"container"}>
                    點擊並創造歡迎訊息
                    <button onClick={this.retrieveWelcomeMessage}
                            className={"btn btn-success"}>
                        獲得歡迎訊息
                    </button>
                </div>
                <div className={"container"}>
                    {this.state.welcomeMessage}
                </div>
            </div>
        );
    }

    retrieveWelcomeMessage() {
        axios.get(`http://localhost:8080/hello-world/path-variable/${this.props.match.params.name}`)
            .then(response => {
                this.setState({
                    welcomeMessage: response.data.message
                })
            })
            .catch(error => {
                let errorMessage = '';

                if(error.message)
                    errorMessage += error.message

                if(error.response && error.response.data){
                    errorMessage += error.response.data.message
                }

                this.setState({
                    welcomeMessage: errorMessage
                })
            });
    }
}

export default WelcomeComponent;