import React, { Component } from 'react'

class Home extends Component {
    


    render() {
        const imageStyle = {
            width: 400
        }
        return (
            <div>
                <p>Trust Us to Get You Home Safely</p>
                <img style={imageStyle} alt="tow" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMKC8cyElCY_hrnhzhH049iSpDc37IC0TBhoqadvADRtzLe72h"/>
            </div>
        )
    }
}
export default Home;

