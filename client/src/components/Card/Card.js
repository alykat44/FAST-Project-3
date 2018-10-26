import React from "react";
import CardBtn from "../CardBtn";
import "./Card.css";
import Geolocated from "../Geolocation";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";

const Map = ReactMapboxGl({
  accessToken:
    "pk.eyJ1Ijoia2M5Z3BqIiwiYSI6ImNqbXhtdHFsbzBjajYzdXVtdXlpanFhZ2cifQ.NCOt6WIwO_19bmi8DUUANQ"
});

const Card = props => (
  <div className="card">
    <div>
      <Geolocated />
    </div>


    <Map
      style="mapbox://styles/mapbox/streets-v9"
      containerStyle={{
        height: "100vh",
        width: "920px"
      }}
      center={{
        lng: "-94.7259",
        lat: "38.8990"
      }}
    >
      <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
        <Feature coordinates={[38.8990, -94.7259]} />
        <Feature coordinates={[38.899, -93.7259]} />
      </Layer>
      <Marker coordinates={[-94.7149, 38.889]} anchor="bottom">
        <img
          alt=""
          src={"https://cdn4.iconfinder.com/data/icons/spirit20/marker.png"}
        />
      </Marker>
      <Marker coordinates={[-94.5149, 38.889]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
      <Marker coordinates={[-94.7349, 38.879]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
      <Marker coordinates={[-94.7049, 38.689]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
      <Marker coordinates={[-94.6149, 38.859]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
      <Marker coordinates={[-94.9149, 38.959]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
      <Marker coordinates={[-94.5781416, 39.100105]} anchor="bottom">
        <img alt="" src={"https://i.imgur.com/xmmhggT.png?1"} />
      </Marker>
    </Map>

  

  <CardBtn
    style={{ opacity: props.image ? 1 : 1 }}
    onClick={props.handleBtnClick}
    data-value="pass"
  />
  <CardBtn
    style={{ opacity: props.image ? 1 : 1 }}
    onClick={props.handleBtnClick}
    data-value="pick"
  />
  </div>

  );

export default Card;



