import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    render() {
        return (
            <div class="pos-f-t">
                <div class="collapse" id="navbarToggleExternalContent">
                    <div class="bg-dark p-4">
                        <a class="text-white h4" href="/towing">TOWING</a>
                        <a class="text-white h4" href="/gas">NEED GAS</a>
                        <a class="text-white h4" href="/jumpstart">NEED A JUMPSTART</a>
                        <a class="text-white h4" href="/unlock">UNLOCK VEHICLE</a>
                        <a class="text-white h4" href="/tire">CHANGE A TIRE</a>
                    </div>
                </div>
                <nav class="navbar navbar-dark bg-dark">
                    <button class="navbar-toggler" id="navbtn" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                        {/* <span class="navbar-toggler-icon"></span> */}
                    </button>
                    <h1 class="text" id="title">FAST</h1>
                </nav>
            </div>

        );
    }
}


export default Navbar;