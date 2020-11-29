import React, {Component} from "react";

class FooterComponent extends Component{
    render() {
        return (
            <div className="container">
                <footer className={"footer"}>
                    <nav className="navbar fixed-bottom navbar-dark bg-dark justify-content-center">
                        <div className="row">
                            <span className="navbar-text ">All Right Reserved 2020 @Archie</span>
                        </div>
                    </nav>
                </footer>
            </div>
        );
    }
}

export default FooterComponent;