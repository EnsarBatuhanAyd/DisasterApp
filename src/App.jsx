import "./App.css";
import React from "react";
import { useState } from "react";
import firebase1 from "firebase/compat/app";

import "firebase/compat/firestore";
import {
  Viewer,
  Entity,
  EntityDescription,
  PointGraphics,
  BillboardGraphics,
} from "resium";
import {
  // JulianDate,
  // ClockRange,
  // ClockStep,
  Cartesian3,
  Color,
  // Clock,
} from "cesium";
import quakeicon from "./quake.png";
import homeicon from "./home.png"

function App() {
  const [Nameone, setNameone] = useState("");
  const [Timeone, setTimeone] = useState("");
  const [Detailsone, setDetailsone] = useState("");
  const [Typesone, setTypesone] = useState("");
  const [Farawayone, setFarawayone] = useState(0);
  const [Longitudeone, setLongitudeone] = useState(-0.001545);
  const [Latitudeone, setLatitudeone] = useState(51.477928);



  const [LiveLatitude] = useState(32.498914);
  const [LiveLongitude] = useState(37.87154);

  var firebaseConfig = {
    apiKey: "AIzaSyBgB_ygoRYktn85S5IAKD1VWktQzIqvLGg",
    databaseURL: "https://earthquake-dataset-default-rtdb.firebaseio.com",
    projectId: "earthquake-dataset",
  };

  // Initialize Firebase
  firebase1.initializeApp(firebaseConfig);
  const db = firebase1.firestore();
  // const doc_ref = db.collection("EarthQuakes");
  const doc_ref = db.collection("Disasters");
  console.log("Data Pulling!");
  doc_ref.get().then((snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));

    console.log(data);
  

    setLongitudeone(Number(data[0].Longitude));
    setLatitudeone(Number(data[0].Latitude));
    setNameone(data[0].Title);
    setDetailsone(data[0].Details);
    setFarawayone(data[0].FarAwayTo);
    setTypesone(data[0].Type);
  });

  return (
    <Viewer
      full
      homeButton={false}
      navigationHelpButton={false}
      geocoder={false}
      animation={false}
      timeline={false}
    >
      <Entity
        name="Your Location"
        position={Cartesian3.fromDegrees(LiveLatitude, LiveLongitude, 100)}
      >
        
        <PointGraphics
          pixelSize={20}
          color={Color.GREEN}
          outlineColor={Color.WHITE}
          outlineWidth={2}
        ></PointGraphics>
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            `}</style>
          <h2>Your Location</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="livetext">Live Data</h3>
          <h3>Latitude: {LiveLatitude}</h3>
          <h3>Longitude: {LiveLongitude}</h3>
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameone}
        position={Cartesian3.fromDegrees(Longitudeone, Latitudeone, 100)}
      >
        {/* <BillboardGraphics
          image={quakeicon}
          scale={0.05}
        ></BillboardGraphics> */}
        <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics>
        <EntityDescription>
          <style>{`
            .livetext {
              color: red;
            }
            .seperator{
              color:red;
            }
            .typetext{
              color:red;
              font-size:30px;
            
            }
            `}</style>
          <h2>{Nameone}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesone} </h3>
          <h3>Latitude: {Latitudeone}</h3>
          <h3>Longitude: {Longitudeone}</h3>
          <h3>Detail: {Detailsone} </h3>
          <h3>Far Away To: {Farawayone} km</h3>
  
        </EntityDescription>
      </Entity>
    </Viewer>
  );
}

export default App;
