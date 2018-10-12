import React, { Component } from "react";
import Navbar from "../../components/Navbar";
import Wrapper from "../../components/Wrapper";
// import API from "../../utils/API";
import { Container } from "../../components/Container";
import { TextArea } from "../../components/Form";
import Card from "../../components/Card";
import MessBtn from "../../components/MessBtn";
import { CardDispatch, ListCardDispatch } from "../../components/CardDispatch";


class Dispatch extends Component {
   




    render() {
        return (
            <div>

                <Wrapper>
                    <Navbar />
                    <Container fluid>

                        <form>

                            <Card />

                            <CardDispatch>

                                <ListCardDispatch> 
                            
                                        
                                    
                                </ListCardDispatch>

                            </CardDispatch> 

                            <MessBtn />



                            < TextArea />


                        </form>

                    </Container>

                </Wrapper>
            </div>

        );
    }
}

export default Dispatch;

