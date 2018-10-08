import React from "react";
import ReactMapboxGl, { Layer, Feature, Marker } from "react-mapbox-gl";
const Map = ReactMapboxGl({
  accessToken: "pk.eyJ1Ijoia2M5Z3BqIiwiYSI6ImNqbXhtdHFsbzBjajYzdXVtdXlpanFhZ2cifQ.NCOt6WIwO_19bmi8DUUANQ"
});

class Maps extends Component {
    render() {
        return (
<Map
style="mapbox://styles/mapbox/streets-v9"
containerStyle={{
  height: "100vh",
  width: "920px",
}}
center={{
  lng: "-94.7259",
  lat: "38.8990",
}}
>
<Layer
  type="symbol"
  id="marker"
  layout={{ "icon-image": "marker-15" }}>
  <Feature coordinates={[38.8990, -94.7259]} />
</Layer>
<Marker
  coordinates={[-94.7149, 38.8890]}
  anchor="bottom">
  <img src={"https://cdn4.iconfinder.com/data/icons/spirit20/marker.png"} />
</Marker>
<Marker
  coordinates={[-94.5149, 38.8890]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
<Marker
  coordinates={[-94.7349, 38.8790]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
<Marker
  coordinates={[-94.7049, 38.6890]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
<Marker
  coordinates={[-94.6149, 38.8590]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
<Marker
  coordinates={[-94.9149, 38.9590]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
<Marker
  coordinates={[-94.5781416, 39.100105]}
  anchor="bottom">
  <img src={"https://i.imgur.com/xmmhggT.png?1"} />
</Marker>
</Map>

);
}
}

export default Map;