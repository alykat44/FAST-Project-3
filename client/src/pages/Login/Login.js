import React, { Component } from "react";
import Wrapper from "../../components/Wrapper";
import LoginNav from "../../components/LoginNav";


class Login extends Component {


    render() {
        return (
            <div>
                <Wrapper>
                    <LoginNav />
                </Wrapper>
            </div>

        );
    }
}

export default Login;