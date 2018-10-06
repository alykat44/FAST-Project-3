import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
// import { Link } from "react-router-dom";

// import { List, ListItem } from "../../components/List";
import  LoginNav  from "../../components/LoginNav";


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