import React, { Component } from 'react';
import HomePage from '../content/homePage';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isModalLogin: false
        };
    }

    //function to show Login Form
    modalLogin = () => {
        this.setState(prevState => ({
            isModalLogin: !prevState.isModalLogin
        }));

    }


    render() {
        const { isModalLogin } = this.state;
        return (

            <React.Fragment>
                <header>

                    <div className="logo">
                        <img src="/image/undraw_elements_cipa.svg" alt="BROKEN" />
                        HOME
                    </div>

                    <nav className="menu">
                        <span className="menuItem">
                            <a href="#menuAbout">ABOUT</a>
                        </span>
                        <span className="menuItem">
                            <a href="#menuPricing">PRICING</a>
                        </span>
                        <span className="menuItem">
                            <a href="#menuContact">CONTACT</a>
                        </span>
                        <span className="menuItem">
                            <button onClick={this.modalLogin}>LOGIN</button>
                        </span>
                    </nav>
                </header>
                {isModalLogin && <div className="bg-loginModal">
                    <div className="loginModalContent">
                        <div className="mdiv" onClick={this.modalLogin}>
                            <div className="md" ></div>
                        </div>
                        <img src="/image/profile_pic.svg" alt="BROKEN"></img>
                        <input className="loginInput" type="text" placeholder="Username"></input>
                        <input className="loginInput" type="password" placeholder="Password"></input>
                        <div className="button_cont" align="center">
                            <a className="loginButton" href="#" onClick={this.modalLogin}>Login</a></div>
                    </div>

                </div>}

                <body>
                <HomePage id="menuHome"></HomePage>

                </body>
            </React.Fragment>
        );
    }
}

export default Header;
