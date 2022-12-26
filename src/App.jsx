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
import disastericon from "./disastericon.png";
import homeicon from "./home.png"

function App() {
  const [Nameone, setNameone] = useState("");
  const [Timeone, setTimeone] = useState("");
  const [Detailsone, setDetailsone] = useState("");
  const [Typesone, setTypesone] = useState("");
  const [Farawayone, setFarawayone] = useState(0);
  const [Longitudeone, setLongitudeone] = useState(-0.001545);
  const [Latitudeone, setLatitudeone] = useState(51.477928);

  const [Nametwo, setNametwo] = useState("");
  const [Timetwo, setTimetwo] = useState("");
  const [Detailstwo, setDetailstwo] = useState("");
  const [Typestwo, setTypestwo] = useState("");
  const [Farawaytwo, setFarawaytwo] = useState(0);
  const [Longitudetwo, setLongitudetwo] = useState(-0.001545);
  const [Latitudetwo, setLatitudetwo] = useState(51.477928);

  const [Namethree, setNamethree] = useState("");
  const [Timethree, setTimethree] = useState("");
  const [Detailsthree, setDetailsthree] = useState("");
  const [Typesthree, setTypesthree] = useState("");
  const [Farawaythree, setFarawaythree] = useState(0);
  const [Longitudethree, setLongitudethree] = useState(-0.001545);
  const [Latitudethree, setLatitudethree] = useState(51.477928);

  const [Namefour, setNamefour] = useState("");
  const [Timefour, setTimefour] = useState("");
  const [Detailsfour, setDetailsfour] = useState("");
  const [Typesfour, setTypesfour] = useState("");
  const [Farawayfour, setFarawayfour] = useState(0);
  const [Longitudefour, setLongitudefour] = useState(-0.001545);
  const [Latitudefour, setLatitudefour] = useState(51.477928);

  const [Namefive, setNamefive] = useState("");
  const [Timefive, setTimefive] = useState("");
  const [Detailsfive, setDetailsfive] = useState("");
  const [Typesfive, setTypesfive] = useState("");
  const [Farawayfive, setFarawayfive] = useState(0);
  const [Longitudefive, setLongitudefive] = useState(-0.001545);
  const [Latitudefive, setLatitudefive] = useState(51.477928);

  const [Namesix, setNamesix] = useState("");
  const [Timesix, setTimesix] = useState("");
  const [Detailssix, setDetailssix] = useState("");
  const [Typessix, setTypessix] = useState("");
  const [Farawaysix, setFarawaysix] = useState(0);
  const [Longitudesix, setLongitudesix] = useState(-0.001545);
  const [Latitudesix, setLatitudesix] = useState(51.477928);

  const [Nameseven, setNameseven] = useState("");
  const [Timeseven, setTimeseven] = useState("");
  const [Detailsseven, setDetailsseven] = useState("");
  const [Typesseven, setTypesseven] = useState("");
  const [Farawayseven, setFarawayseven] = useState(0);
  const [Longitudeseven, setLongitudeseven] = useState(-0.001545);
  const [Latitudeseven, setLatitudeseven] = useState(51.477928);

  const [Nameeight, setNameeight] = useState("");
  const [Timeeight, setTimeeight] = useState("");
  const [Detailseight, setDetailseight] = useState("");
  const [Typeseight, setTypeseight] = useState("");
  const [Farawayeight, setFarawayeight] = useState(0);
  const [Longitudeeight, setLongitudeeight] = useState(-0.001545);
  const [Latitudeeight, setLatitudeeight] = useState(51.477928);

  const [Namenine, setNamenine] = useState("");
  const [Timenine, setTimenine] = useState("");
  const [Detailsnine, setDetailsnine] = useState("");
  const [Typesnine, setTypesnine] = useState("");
  const [Farawaynine, setFarawaynine] = useState(0);
  const [Longitudenine, setLongitudenine] = useState(-0.001545);
  const [Latitudenine, setLatitudenine] = useState(51.477928);

  const [Nameten, setNameten] = useState("");
  const [Timeten, setTimeten] = useState("");
  const [Detailsten, setDetailsten] = useState("");
  const [Typesten, setTypesten] = useState("");
  const [Farawayten, setFarawayten] = useState(0);
  const [Longitudeten, setLongitudeten] = useState(-0.001545);
  const [Latitudeten, setLatitudeten] = useState(51.477928);

  const [Nameeleven, setNameeleven] = useState("");
  const [Timeeleven, setTimeeleven] = useState("");
  const [Detailseleven, setDetailseleven] = useState("");
  const [Typeseleven, setTypeseleven] = useState("");
  const [Farawayeleven, setFarawayeleven] = useState(0);
  const [Longitudeeleven, setLongitudeeleven] = useState(-0.001545);
  const [Latitudeeleven, setLatitudeeleven] = useState(51.477928);

  const [Nametwelve, setNametwelve] = useState("");
  const [Timetwelve, setTimetwelve] = useState("");
  const [Detailstwelve, setDetailstwelve] = useState("");
  const [Typestwelve, setTypestwelve] = useState("");
  const [Farawaytwelve, setFarawaytwelve] = useState(0);
  const [Longitudetwelve, setLongitudetwelve] = useState(-0.001545);
  const [Latitudetwelve, setLatitudetwelve] = useState(51.477928);

  const [Namethirteen, setNamethirteen] = useState("");
  const [Timethirteen, setTimethirteen] = useState("");
  const [Detailsthirteen, setDetailsthirteen] = useState("");
  const [Typesthirteen, setTypesthirteen] = useState("");
  const [Farawaythirteen, setFarawaythirteen] = useState(0);
  const [Longitudethirteen, setLongitudethirteen] = useState(-0.001545);
  const [Latitudethirteen, setLatitudethirteen] = useState(51.477928);

  const [Namefourteen, setNamefourteen] = useState("");
  const [Timefourteen, setTimefourteen] = useState("");
  const [Detailsfourteen, setDetailsfourteen] = useState("");
  const [Typesfourteen, setTypesfourteen] = useState("");
  const [Farawayfourteen, setFarawayfourteen] = useState(0);
  const [Longitudefourteen, setLongitudefourteen] = useState(-0.001545);
  const [Latitudefourteen, setLatitudefourteen] = useState(51.477928);

  const [Namefiveteen, setNamefiveteen] = useState("");
  const [Timefiveteen, setTimefiveteen] = useState("");
  const [Detailsfiveteen, setDetailsfiveteen] = useState("");
  const [Typesfiveteen, setTypesfiveteen] = useState("");
  const [Farawayfiveteen, setFarawayfiveteen] = useState(0);
  const [Longitudefiveteen, setLongitudefiveteen] = useState(-0.001545);
  const [Latitudefiveteen, setLatitudefiveteen] = useState(51.477928);

  const [Namesixteen, setNamesixteen] = useState("");
  const [Timesixteen, setTimesixteen] = useState("");
  const [Detailssixteen, setDetailssixteen] = useState("");
  const [Typessixteen, setTypessixteen] = useState("");
  const [Farawaysixteen, setFarawaysixteen] = useState(0);
  const [Longitudesixteen, setLongitudesixteen] = useState(-0.001545);
  const [Latitudesixteen, setLatitudesixteen] = useState(51.477928);

  const [Nameseventeen, setNameseventeen] = useState("");
  const [Timeseventeen, setTimeseventeen] = useState("");
  const [Detailsseventeen, setDetailsseventeen] = useState("");
  const [Typesseventeen, setTypesseventeen] = useState("");
  const [Farawayseventeen, setFarawayseventeen] = useState(0);
  const [Longitudeseventeen, setLongitudeseventeen] = useState(-0.001545);
  const [Latitudeseventeen, setLatitudeseventeen] = useState(51.477928);

  const [Nameeightteen, setNameeightteen] = useState("");
  const [Timeeightteen, setTimeeightteen] = useState("");
  const [Detailseightteen, setDetailseightteen] = useState("");
  const [Typeseightteen, setTypeseightteen] = useState("");
  const [Farawayeightteen, setFarawayeightteen] = useState(0);
  const [Longitudeeightteen, setLongitudeeightteen] = useState(-0.001545);
  const [Latitudeeightteen, setLatitudeeightteen] = useState(51.477928);

  const [Namenineteen, setNamenineteen] = useState("");
  const [Timenineteen, setTimenineteen] = useState("");
  const [Detailsnineteen, setDetailsnineteen] = useState("");
  const [Typesnineteen, setTypesnineteen] = useState("");
  const [Farawaynineteen, setFarawaynineteen] = useState(0);
  const [Longitudenineteen, setLongitudenineteen] = useState(-0.001545);
  const [Latitudenineteen, setLatitudenineteen] = useState(51.477928);

  const [Nametwenty, setNametwenty] = useState("");
  const [Timetwenty, setTimetwenty] = useState("");
  const [Detailstwenty, setDetailstwenty] = useState("");
  const [Typestwenty, setTypestwenty] = useState("");
  const [Farawaytwenty, setFarawaytwenty] = useState(0);
  const [Longitudetwenty, setLongitudetwenty] = useState(-0.001545);
  const [Latitudetwenty, setLatitudetwenty] = useState(51.477928);

  const [Nametwentyone, setNametwentyone] = useState("");
  const [Timetwentyone, setTimetwentyone] = useState("");
  const [Detailstwentyone, setDetailstwentyone] = useState("");
  const [Typestwentyone, setTypestwentyone] = useState("");
  const [Farawaytwentyone, setFarawaytwentyone] = useState(0);
  const [Longitudetwentyone, setLongitudetwentyone] = useState(-0.001545);
  const [Latitudetwentyone, setLatitudetwentyone] = useState(51.477928);

  const [Nametwentytwo, setNametwentytwo] = useState("");
  const [Timetwentytwo, setTimetwentytwo] = useState("");
  const [Detailstwentytwo, setDetailstwentytwo] = useState("");
  const [Typestwentytwo, setTypestwentytwo] = useState("");
  const [Farawaytwentytwo, setFarawaytwentytwo] = useState(0);
  const [Longitudetwentytwo, setLongitudetwentytwo] = useState(-0.001545);
  const [Latitudetwentytwo, setLatitudetwentytwo] = useState(51.477928);

  
  const [Nametwentythree, setNametwentythree] = useState("");
  const [Timetwentythree, setTimetwentythree] = useState("");
  const [Detailstwentythree, setDetailstwentythree] = useState("");
  const [Typestwentythree, setTypestwentythree] = useState("");
  const [Farawaytwentythree, setFarawaytwentythree] = useState(0);
  const [Longitudetwentythree, setLongitudetwentythree] = useState(-0.001545);
  const [Latitudetwentythree, setLatitudetwentythree] = useState(51.477928);


  const [Nametwentyfour, setNametwentyfour] = useState("");
  const [Timetwentyfour, setTimetwentyfour] = useState("");
  const [Detailstwentyfour, setDetailstwentyfour] = useState("");
  const [Typestwentyfour, setTypestwentyfour] = useState("");
  const [Farawaytwentyfour, setFarawaytwentyfour] = useState(0);
  const [Longitudetwentyfour, setLongitudetwentyfour] = useState(-0.001545);
  const [Latitudetwentyfour, setLatitudetwentyfour] = useState(51.477928);


  const [Nametwentyfive, setNametwentyfive] = useState("");
  const [Timetwentyfive, setTimetwentyfive] = useState("");
  const [Detailstwentyfive, setDetailstwentyfive] = useState("");
  const [Typestwentyfive, setTypestwentyfive] = useState("");
  const [Farawaytwentyfive, setFarawaytwentyfive] = useState(0);
  const [Longitudetwentyfive, setLongitudetwentyfive] = useState(-0.001545);
  const [Latitudetwentyfive, setLatitudetwentyfive] = useState(51.477928);

  const [Nametwentysix, setNametwentysix] = useState("");
  const [Timetwentysix, setTimetwentysix] = useState("");
  const [Detailstwentysix, setDetailstwentysix] = useState("");
  const [Typestwentysix, setTypestwentysix] = useState("");
  const [Farawaytwentysix, setFarawaytwentysix] = useState(0);
  const [Longitudetwentysix, setLongitudetwentysix] = useState(-0.001545);
  const [Latitudetwentysix, setLatitudetwentysix] = useState(51.477928);

  const [Nametwentyseven, setNametwentyseven] = useState("");
  const [Timetwentyseven, setTimetwentyseven] = useState("");
  const [Detailstwentyseven, setDetailstwentyseven] = useState("");
  const [Typestwentyseven, setTypestwentyseven] = useState("");
  const [Farawaytwentyseven, setFarawaytwentyseven] = useState(0);
  const [Longitudetwentyseven, setLongitudetwentyseven] = useState(-0.001545);
  const [Latitudetwentyseven, setLatitudetwentyseven] = useState(51.477928);

  const [Nametwentyeight, setNametwentyeight] = useState("");
  const [Timetwentyeight, setTimetwentyeight] = useState("");
  const [Detailstwentyeight, setDetailstwentyeight] = useState("");
  const [Typestwentyeight, setTypestwentyeight] = useState("");
  const [Farawaytwentyeight, setFarawaytwentyeight] = useState(0);
  const [Longitudetwentyeight, setLongitudetwentyeight] = useState(-0.001545);
  const [Latitudetwentyeight, setLatitudetwentyeight] = useState(51.477928);

  const [Nametwentynine, setNametwentynine] = useState("");
  const [Timetwentynine, setTimetwentynine] = useState("");
  const [Detailstwentynine, setDetailstwentynine] = useState("");
  const [Typestwentynine, setTypestwentynine] = useState("");
  const [Farawaytwentynine, setFarawaytwentynine] = useState(0);
  const [Longitudetwentynine, setLongitudetwentynine] = useState(-0.001545);
  const [Latitudetwentynine, setLatitudetwentynine] = useState(51.477928);

  const [Namethirty, setNamethirty] = useState("");
  const [Timethirty, setTimethirty] = useState("");
  const [Detailsthirty, setDetailsthirty] = useState("");
  const [Typesthirty, setTypesthirty] = useState("");
  const [Farawaythirty, setFarawaythirty] = useState(0);
  const [Longitudethirty, setLongitudethirty] = useState(-0.001545);
  const [Latitudethirty, setLatitudethirty] = useState(51.477928);
 
  const [Namethirtyone, setNamethirtyone] = useState("");
  const [Timethirtyone, setTimethirtyone] = useState("");
  const [Detailsthirtyone, setDetailsthirtyone] = useState("");
  const [Typesthirtyone, setTypesthirtyone] = useState("");
  const [Farawaythirtyone, setFarawaythirtyone] = useState(0);
  const [Longitudethirtyone, setLongitudethirtyone] = useState(-0.001545);
  const [Latitudethirtyone, setLatitudethirtyone] = useState(51.477928);

  const [Namethirtytwo, setNamethirtytwo] = useState("");
  const [Timethirtytwo, setTimethirtytwo] = useState("");
  const [Detailsthirtytwo, setDetailsthirtytwo] = useState("");
  const [Typesthirtytwo, setTypesthirtytwo] = useState("");
  const [Farawaythirtytwo, setFarawaythirtytwo] = useState(0);
  const [Longitudethirtytwo, setLongitudethirtytwo] = useState(-0.001545);
  const [Latitudethirtytwo, setLatitudethirtytwo] = useState(51.477928);

  const [Namethirtythree, setNamethirtythree] = useState("");
  const [Timethirtythree, setTimethirtythree] = useState("");
  const [Detailsthirtythree, setDetailsthirtythree] = useState("");
  const [Typesthirtythree, setTypesthirtythree] = useState("");
  const [Farawaythirtythree, setFarawaythirtythree] = useState(0);
  const [Longitudethirtythree, setLongitudethirtythree] = useState(-0.001545);
  const [Latitudethirtythree, setLatitudethirtythree] = useState(51.477928);

  const [Namethirtyfour, setNamethirtyfour] = useState("");
  const [Timethirtyfour, setTimethirtyfour] = useState("");
  const [Detailsthirtyfour, setDetailsthirtyfour] = useState("");
  const [Typesthirtyfour, setTypesthirtyfour] = useState("");
  const [Farawaythirtyfour, setFarawaythirtyfour] = useState(0);
  const [Longitudethirtyfour, setLongitudethirtyfour] = useState(-0.001545);
  const [Latitudethirtyfour, setLatitudethirtyfour] = useState(51.477928);

  const [Namethirtyfive, setNamethirtyfive] = useState("");
  const [Timethirtyfive, setTimethirtyfive] = useState("");
  const [Detailsthirtyfive, setDetailsthirtyfive] = useState("");
  const [Typesthirtyfive, setTypesthirtyfive] = useState("");
  const [Farawaythirtyfive, setFarawaythirtyfive] = useState(0);
  const [Longitudethirtyfive, setLongitudethirtyfive] = useState(-0.001545);
  const [Latitudethirtyfive, setLatitudethirtyfive] = useState(51.477928);

  const [Namethirtysix, setNamethirtysix] = useState("");
  const [Timethirtysix, setTimethirtysix] = useState("");
  const [Detailsthirtysix, setDetailsthirtysix] = useState("");
  const [Typesthirtysix, setTypesthirtysix] = useState("");
  const [Farawaythirtysix, setFarawaythirtysix] = useState(0);
  const [Longitudethirtysix, setLongitudethirtysix] = useState(-0.001545);
  const [Latitudethirtysix, setLatitudethirtysix] = useState(51.477928);

  const [Namethirtyseven, setNamethirtyseven] = useState("");
  const [Timethirtyseven, setTimethirtyseven] = useState("");
  const [Detailsthirtyseven, setDetailsthirtyseven] = useState("");
  const [Typesthirtyseven, setTypesthirtyseven] = useState("");
  const [Farawaythirtyseven, setFarawaythirtyseven] = useState(0);
  const [Longitudethirtyseven, setLongitudethirtyseven] = useState(-0.001545);
  const [Latitudethirtyseven, setLatitudethirtyseven] = useState(51.477928);

  const [Namethirtyeight, setNamethirtyeight] = useState("");
  const [Timethirtyeight, setTimethirtyeight] = useState("");
  const [Detailsthirtyeight, setDetailsthirtyeight] = useState("");
  const [Typesthirtyeight, setTypesthirtyeight] = useState("");
  const [Farawaythirtyeight, setFarawaythirtyeight] = useState(0);
  const [Longitudethirtyeight, setLongitudethirtyeight] = useState(-0.001545);
  const [Latitudethirtyeight, setLatitudethirtyeight] = useState(51.477928);

  const [Namethirtynine, setNamethirtynine] = useState("");
  const [Timethirtynine, setTimethirtynine] = useState("");
  const [Detailsthirtynine, setDetailsthirtynine] = useState("");
  const [Typesthirtynine, setTypesthirtynine] = useState("");
  const [Farawaythirtynine, setFarawaythirtynine] = useState(0);
  const [Longitudethirtynine, setLongitudethirtynine] = useState(-0.001545);
  const [Latitudethirtynine, setLatitudethirtynine] = useState(51.477928);

  const [Nameforty, setNameforty] = useState("");
  const [Timeforty, setTimeforty] = useState("");
  const [Detailsforty, setDetailsforty] = useState("");
  const [Typesforty, setTypesforty] = useState("");
  const [Farawayforty, setFarawayforty] = useState(0);
  const [Longitudeforty, setLongitudeforty] = useState(-0.001545);
  const [Latitudeforty, setLatitudeforty] = useState(51.477928);

  const [Namefortyone, setNamefortyone] = useState("");
  const [Timefortyone, setTimefortyone] = useState("");
  const [Detailsfortyone, setDetailsfortyone] = useState("");
  const [Typesfortyone, setTypesfortyone] = useState("");
  const [Farawayfortyone, setFarawayfortyone] = useState(0);
  const [Longitudefortyone, setLongitudefortyone] = useState(-0.001545);
  const [Latitudefortyone, setLatitudefortyone] = useState(51.477928);

  const [Namefortytwo, setNamefortytwo] = useState("");
  const [Timefortytwo, setTimefortytwo] = useState("");
  const [Detailsfortytwo, setDetailsfortytwo] = useState("");
  const [Typesfortytwo, setTypesfortytwo] = useState("");
  const [Farawayfortytwo, setFarawayfortytwo] = useState(0);
  const [Longitudefortytwo, setLongitudefortytwo] = useState(-0.001545);
  const [Latitudefortytwo, setLatitudefortytwo] = useState(51.477928);

  const [Namefortythree, setNamefortythree] = useState("");
  const [Timefortythree, setTimefortythree] = useState("");
  const [Detailsfortythree, setDetailsfortythree] = useState("");
  const [Typesfortythree, setTypesfortythree] = useState("");
  const [Farawayfortythree, setFarawayfortythree] = useState(0);
  const [Longitudefortythree, setLongitudefortythree] = useState(-0.001545);
  const [Latitudefortythree, setLatitudefortythree] = useState(51.477928);

  const [Namefortyfour, setNamefortyfour] = useState("");
  const [Timefortyfour, setTimefortyfour] = useState("");
  const [Detailsfortyfour, setDetailsfortyfour] = useState("");
  const [Typesfortyfour, setTypesfortyfour] = useState("");
  const [Farawayfortyfour, setFarawayfortyfour] = useState(0);
  const [Longitudefortyfour, setLongitudefortyfour] = useState(-0.001545);
  const [Latitudefortyfour, setLatitudefortyfour] = useState(51.477928);

  const [Namefortyfive, setNamefortyfive] = useState("");
  const [Timefortyfive, setTimefortyfive] = useState("");
  const [Detailsfortyfive, setDetailsfortyfive] = useState("");
  const [Typesfortyfive, setTypesfortyfive] = useState("");
  const [Farawayfortyfive, setFarawayfortyfive] = useState(0);
  const [Longitudefortyfive, setLongitudefortyfive] = useState(-0.001545);
  const [Latitudefortyfive, setLatitudefortyfive] = useState(51.477928);

  const [Namefortysix, setNamefortysix] = useState("");
  const [Timefortysix, setTimefortysix] = useState("");
  const [Detailsfortysix, setDetailsfortysix] = useState("");
  const [Typesfortysix, setTypesfortysix] = useState("");
  const [Farawayfortysix, setFarawayfortysix] = useState(0);
  const [Longitudefortysix, setLongitudefortysix] = useState(-0.001545);
  const [Latitudefortysix, setLatitudefortysix] = useState(51.477928);

  const [Namefortyseven, setNamefortyseven] = useState("");
  const [Timefortyseven, setTimefortyseven] = useState("");
  const [Detailsfortyseven, setDetailsfortyseven] = useState("");
  const [Typesfortyseven, setTypesfortyseven] = useState("");
  const [Farawayfortyseven, setFarawayfortyseven] = useState(0);
  const [Longitudefortyseven, setLongitudefortyseven] = useState(-0.001545);
  const [Latitudefortyseven, setLatitudefortyseven] = useState(51.477928);

  const [Namefortyeight, setNamefortyeight] = useState("");
  const [Timefortyeight, setTimefortyeight] = useState("");
  const [Detailsfortyeight, setDetailsfortyeight] = useState("");
  const [Typesfortyeight, setTypesfortyeight] = useState("");
  const [Farawayfortyeight, setFarawayfortyeight] = useState(0);
  const [Longitudefortyeight, setLongitudefortyeight] = useState(-0.001545);
  const [Latitudefortyeight, setLatitudefortyeight] = useState(51.477928);

  const [Namefortynine, setNamefortynine] = useState("");
  const [Timefortynine, setTimefortynine] = useState("");
  const [Detailsfortynine, setDetailsfortynine] = useState("");
  const [Typesfortynine, setTypesfortynine] = useState("");
  const [Farawayfortynine, setFarawayfortynine] = useState(0);
  const [Longitudefortynine, setLongitudefortynine] = useState(-0.001545);
  const [Latitudefortynine, setLatitudefortynine] = useState(51.477928);

  const [Namefifty, setNamefifty] = useState("");
  const [Timefifty, setTimefifty] = useState("");
  const [Detailsfifty, setDetailsfifty] = useState("");
  const [Typesfifty, setTypesfifty] = useState("");
  const [Farawayfifty, setFarawayfifty] = useState(0);
  const [Longitudefifty, setLongitudefifty] = useState(-0.001545);
  const [Latitudefifty, setLatitudefifty] = useState(51.477928);




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

    setLongitudetwo(Number(data[1].Longitude));
    setLatitudetwo(Number(data[1].Latitude));
    setNametwo(data[1].Title);
    setDetailstwo(data[1].Details);
    setFarawaytwo(data[1].FarAwayTo);
    setTypestwo(data[1].Type);

    setLongitudethree(Number(data[2].Longitude));
    setLatitudethree(Number(data[2].Latitude));
    setNamethree(data[2].Title);
    setDetailsthree(data[2].Details);
    setFarawaythree(data[2].FarAwayTo);
    setTypesthree(data[2].Type);

    setLongitudefour(Number(data[3].Longitude));
    setLatitudefour(Number(data[3].Latitude));
    setNamefour(data[3].Title);
    setDetailsfour(data[3].Details);
    setFarawayfour(data[3].FarAwayTo);
    setTypesfour(data[3].Type);

    setLongitudefive(Number(data[4].Longitude));
    setLatitudefive(Number(data[4].Latitude));
    setNamefive(data[4].Title);
    setDetailsfive(data[4].Details);
    setFarawayfive(data[4].FarAwayTo);
    setTypesfive(data[4].Type);

    setLongitudesix(Number(data[5].Longitude));
    setLatitudesix(Number(data[5].Latitude));
    setNamesix(data[5].Title);
    setDetailssix(data[5].Details);
    setFarawaysix(data[5].FarAwayTo);
    setTypessix(data[5].Type);

    setLongitudeseven(Number(data[6].Longitude));
    setLatitudeseven(Number(data[6].Latitude));
    setNameseven(data[6].Title);
    setDetailsseven(data[6].Details);
    setFarawayseven(data[6].FarAwayTo);
    setTypesseven(data[6].Type);

    setLongitudeeight(Number(data[7].Longitude));
    setLatitudeeight(Number(data[7].Latitude));
    setNameeight(data[7].Title);
    setDetailseight(data[7].Details);
    setFarawayeight(data[7].FarAwayTo);
    setTypeseight(data[7].Type);

    setLongitudenine(Number(data[8].Longitude));
    setLatitudenine(Number(data[8].Latitude));
    setNamenine(data[8].Title);
    setDetailsnine(data[8].Details);
    setFarawaynine(data[8].FarAwayTo);
    setTypesnine(data[8].Type);

    setLongitudeten(Number(data[9].Longitude));
    setLatitudeten(Number(data[9].Latitude));
    setNameten(data[9].Title);
    setDetailsten(data[9].Details);
    setFarawayten(data[9].FarAwayTo);
    setTypesten(data[9].Type);

    setLongitudeeleven(Number(data[10].Longitude));
    setLatitudeeleven(Number(data[10].Latitude));
    setNameeleven(data[10].Title);
    setDetailseleven(data[10].Details);
    setFarawayeleven(data[10].FarAwayTo);
    setTypeseleven(data[10].Type);
 
    setLongitudetwelve(Number(data[11].Longitude));
    setLatitudetwelve(Number(data[11].Latitude));
    setNametwelve(data[11].Title);
    setDetailstwelve(data[11].Details);
    setFarawaytwelve(data[11].FarAwayTo);
    setTypestwelve(data[11].Type);

    setLongitudethirteen(Number(data[12].Longitude));
    setLatitudethirteen(Number(data[12].Latitude));
    setNamethirteen(data[12].Title);
    setDetailsthirteen(data[12].Details);
    setFarawaythirteen(data[12].FarAwayTo);
    setTypesthirteen(data[12].Type);

    setLongitudefourteen(Number(data[13].Longitude));
    setLatitudefourteen(Number(data[13].Latitude));
    setNamefourteen(data[13].Title);
    setDetailsfourteen(data[13].Details);
    setFarawayfourteen(data[13].FarAwayTo);
    setTypesfourteen(data[13].Type);

    setLongitudefiveteen(Number(data[14].Longitude));
    setLatitudefiveteen(Number(data[14].Latitude));
    setNamefiveteen(data[14].Title);
    setDetailsfiveteen(data[14].Details);
    setFarawayfiveteen(data[14].FarAwayTo);
    setTypesfiveteen(data[14].Type);

    setLongitudesixteen(Number(data[15].Longitude));
    setLatitudesixteen(Number(data[15].Latitude));
    setNamesixteen(data[15].Title);
    setDetailssixteen(data[15].Details);
    setFarawaysixteen(data[15].FarAwayTo);
    setTypessixteen(data[15].Type);

    setLongitudeseventeen(Number(data[16].Longitude));
    setLatitudeseventeen(Number(data[16].Latitude));





    setNameseventeen(data[16].Title);
    setDetailsseventeen(data[16].Details);
    setFarawayseventeen(data[16].FarAwayTo);
    setTypesseventeen(data[16].Type);

    setLongitudeeightteen(Number(data[17].Longitude));
    setLatitudeeightteen(Number(data[17].Latitude));
    setNameeightteen(data[17].Title);
    setDetailseightteen(data[17].Details);
    setFarawayeightteen(data[17].FarAwayTo);
    setTypeseightteen(data[17].Type);

    setLongitudenineteen(Number(data[18].Longitude));
    setLatitudenineteen(Number(data[18].Latitude));
    setNamenineteen(data[18].Title);
    setDetailsnineteen(data[18].Details);
    setFarawaynineteen(data[18].FarAwayTo);
    setTypesnineteen(data[18].Type);


    setLongitudetwenty(Number(data[19].Longitude));
    setLatitudetwenty(Number(data[19].Latitude));
    setNametwenty(data[19].Title);
    setDetailstwenty(data[19].Details);
    setFarawaytwenty(data[19].FarAwayTo);
    setTypestwenty(data[19].Type);


    setLongitudetwentyone(Number(data[20].Longitude));
    setLatitudetwentyone(Number(data[20].Latitude));
    setNametwentyone(data[20].Title);
    setDetailstwentyone(data[20].Details);
    setFarawaytwentyone(data[20].FarAwayTo);
    setTypestwentyone(data[20].Type);


    setLongitudetwentytwo(Number(data[21].Longitude));
    setLatitudetwentytwo(Number(data[21].Latitude));
    setNametwentytwo(data[21].Title);
    setDetailstwentytwo(data[21].Details);
    setFarawaytwentytwo(data[21].FarAwayTo);
    setTypestwentytwo(data[21].Type);


    setLongitudetwentythree(Number(data[22].Longitude));
    setLatitudetwentythree(Number(data[22].Latitude));
    setNametwentythree(data[22].Title);
    setDetailstwentythree(data[22].Details);
    setFarawaytwentythree(data[22].FarAwayTo);
    setTypestwentythree(data[22].Type);

    setLongitudetwentyfour(Number(data[23].Longitude));
    setLatitudetwentyfour(Number(data[23].Latitude));
    setNametwentyfour(data[23].Title);
    setDetailstwentyfour(data[23].Details);
    setFarawaytwentyfour(data[23].FarAwayTo);
    setTypestwentyfour(data[23].Type);


    setLongitudetwentyfive(Number(data[24].Longitude));
    setLatitudetwentyfive(Number(data[24].Latitude));
    setNametwentyfive(data[24].Title);
    setDetailstwentyfive(data[24].Details);
    setFarawaytwentyfive(data[24].FarAwayTo);
    setTypestwentyfive(data[24].Type);


    setLongitudetwentysix(Number(data[25].Longitude));
    setLatitudetwentysix(Number(data[25].Latitude));
    setNametwentysix(data[25].Title);
    setDetailstwentysix(data[25].Details);
    setFarawaytwentysix(data[25].FarAwayTo);
    setTypestwentysix(data[25].Type);


    setLongitudetwentyseven(Number(data[26].Longitude));
    setLatitudetwentyseven(Number(data[26].Latitude));
    setNametwentyseven(data[26].Title);
    setDetailstwentyseven(data[26].Details);
    setFarawaytwentyseven(data[26].FarAwayTo);
    setTypestwentyseven(data[26].Type);


    setLongitudetwentyeight(Number(data[27].Longitude));
    setLatitudetwentyeight(Number(data[27].Latitude));
    setNametwentyeight(data[27].Title);
    setDetailstwentyeight(data[27].Details);
    setFarawaytwentyeight(data[27].FarAwayTo);
    setTypestwentyeight(data[27].Type);


    setLongitudetwentynine(Number(data[28].Longitude));
    setLatitudetwentynine(Number(data[28].Latitude));
    setNametwentynine(data[28].Title);
    setDetailstwentynine(data[28].Details);
    setFarawaytwentynine(data[28].FarAwayTo);
    setTypestwentynine(data[28].Type);

    setLongitudethirty(Number(data[29].Longitude));
    setLatitudethirty(Number(data[29].Latitude));
    setNamethirty(data[29].Title);
    setDetailsthirty(data[29].Details);
    setFarawaythirty(data[29].FarAwayTo);
    setTypesthirty(data[29].Type);

    setLongitudethirtyone(Number(data[30].Longitude));
    setLatitudethirtyone(Number(data[30].Latitude));
    setNamethirtyone(data[30].Title);
    setDetailsthirtyone(data[30].Details);
    setFarawaythirtyone(data[30].FarAwayTo);
    setTypesthirtyone(data[30].Type);
    
    setLongitudethirtytwo(Number(data[31].Longitude));
    setLatitudethirtytwo(Number(data[31].Latitude));
    setNamethirtytwo(data[31].Title);
    setDetailsthirtytwo(data[31].Details);
    setFarawaythirtytwo(data[31].FarAwayTo);
    setTypesthirtytwo(data[31].Type);

    setLongitudethirtythree(Number(data[32].Longitude));
    setLatitudethirtythree(Number(data[32].Latitude));
    setNamethirtythree(data[32].Title);
    setDetailsthirtythree(data[32].Details);
    setFarawaythirtythree(data[32].FarAwayTo);
    setTypesthirtythree(data[32].Type);

    setLongitudethirtyfour(Number(data[33].Longitude));
    setLatitudethirtyfour(Number(data[33].Latitude));
    setNamethirtyfour(data[33].Title);
    setDetailsthirtyfour(data[33].Details);
    setFarawaythirtyfour(data[33].FarAwayTo);
    setTypesthirtyfour(data[33].Type);

    setLongitudethirtyfive(Number(data[34].Longitude));
    setLatitudethirtyfive(Number(data[34].Latitude));
    setNamethirtyfive(data[34].Title);
    setDetailsthirtyfive(data[34].Details);
    setFarawaythirtyfive(data[34].FarAwayTo);
    setTypesthirtyfive(data[34].Type);

    setLongitudethirtysix(Number(data[35].Longitude));
    setLatitudethirtysix(Number(data[35].Latitude));
    setNamethirtysix(data[35].Title);
    setDetailsthirtysix(data[35].Details);
    setFarawaythirtysix(data[35].FarAwayTo);
    setTypesthirtysix(data[35].Type);

    setLongitudethirtyseven(Number(data[36].Longitude));
    setLatitudethirtyseven(Number(data[36].Latitude));
    setNamethirtyseven(data[36].Title);
    setDetailsthirtyseven(data[36].Details);
    setFarawaythirtyseven(data[36].FarAwayTo);
    setTypesthirtyseven(data[36].Type);

    setLongitudethirtyeight(Number(data[37].Longitude));
    setLatitudethirtyeight(Number(data[37].Latitude));
    setNamethirtyeight(data[37].Title);
    setDetailsthirtyeight(data[37].Details);
    setFarawaythirtyeight(data[37].FarAwayTo);
    setTypesthirtyeight(data[37].Type);

    setLongitudethirtynine(Number(data[38].Longitude));
    setLatitudethirtynine(Number(data[38].Latitude));
    setNamethirtynine(data[38].Title);
    setDetailsthirtynine(data[38].Details);
    setFarawaythirtynine(data[38].FarAwayTo);
    setTypesthirtynine(data[38].Type);

    setLongitudeforty(Number(data[39].Longitude));
    setLatitudeforty(Number(data[39].Latitude));
    setNameforty(data[39].Title);
    setDetailsforty(data[39].Details);
    setFarawayforty(data[39].FarAwayTo);
    setTypesforty(data[39].Type);


    setLongitudefortyone(Number(data[40].Longitude));
    setLatitudefortyone(Number(data[40].Latitude));
    setNamefortyone(data[40].Title);
    setDetailsfortyone(data[40].Details);
    setFarawayfortyone(data[40].FarAwayTo);
    setTypesfortyone(data[40].Type);

    setLongitudefortytwo(Number(data[41].Longitude));
    setLatitudefortytwo(Number(data[41].Latitude));
    setNamefortytwo(data[41].Title);
    setDetailsfortytwo(data[41].Details);
    setFarawayfortytwo(data[41].FarAwayTo);
    setTypesfortytwo(data[41].Type);

    setLongitudefortythree(Number(data[42].Longitude));
    setLatitudefortythree(Number(data[42].Latitude));
    setNamefortythree(data[42].Title);
    setDetailsfortythree(data[42].Details);
    setFarawayfortythree(data[42].FarAwayTo);
    setTypesfortythree(data[42].Type);

    setLongitudefortyfour(Number(data[43].Longitude));
    setLatitudefortyfour(Number(data[43].Latitude));
    setNamefortyfour(data[43].Title);
    setDetailsfortyfour(data[43].Details);
    setFarawayfortyfour(data[43].FarAwayTo);
    setTypesfortyfour(data[43].Type);

    setLongitudefortyfive(Number(data[44].Longitude));
    setLatitudefortyfive(Number(data[44].Latitude));
    setNamefortyfive(data[44].Title);
    setDetailsfortyfive(data[44].Details);
    setFarawayfortyfive(data[44].FarAwayTo);
    setTypesfortyfive(data[44].Type);


    setLongitudefortysix(Number(data[45].Longitude));
    setLatitudefortysix(Number(data[45].Latitude));
    setNamefortysix(data[45].Title);
    setDetailsfortysix(data[45].Details);
    setFarawayfortysix(data[45].FarAwayTo);
    setTypesfortysix(data[45].Type);


    setLongitudefortyseven(Number(data[46].Longitude));
    setLatitudefortyseven(Number(data[46].Latitude));
    setNamefortyseven(data[46].Title);
    setDetailsfortyseven(data[46].Details);
    setFarawayfortyseven(data[46].FarAwayTo);
    setTypesfortyseven(data[46].Type);


    setLongitudefortyeight(Number(data[47].Longitude));
    setLatitudefortyeight(Number(data[47].Latitude));
    setNamefortyeight(data[47].Title);
    setDetailsfortyeight(data[47].Details);
    setFarawayfortyeight(data[47].FarAwayTo);
    setTypesfortyeight(data[47].Type);

    setLongitudefortynine(Number(data[48].Longitude));
    setLatitudefortynine(Number(data[48].Latitude));
    setNamefortynine(data[48].Title);
    setDetailsfortynine(data[48].Details);
    setFarawayfortynine(data[48].FarAwayTo);
    setTypesfortynine(data[48].Type);

    setLongitudefifty(Number(data[49].Longitude));
    setLatitudefifty(Number(data[49].Latitude));
    setNamefifty(data[49].Title);
    setDetailsfifty(data[49].Details);
    setFarawayfifty(data[49].FarAwayTo);
    setTypesfifty(data[49].Type);

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
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
        {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
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
      <Entity
        name={Nametwo}
        position={Cartesian3.fromDegrees(Longitudetwo, Latitudetwo, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwo} </h3>
          <h3>Latitude: {Latitudetwo}</h3>
          <h3>Longitude: {Longitudetwo}</h3>
          <h3>Detail: {Detailstwo} </h3>
          <h3>Far Away To: {Farawaytwo} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethree}
        position={Cartesian3.fromDegrees(Longitudethree, Latitudethree, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthree} </h3>
          <h3>Latitude: {Latitudethree}</h3>
          <h3>Longitude: {Longitudethree}</h3>
          <h3>Detail: {Detailsthree} </h3>
          <h3>Far Away To: {Farawaythree} km</h3>
  
        </EntityDescription>
      </Entity>   
      <Entity
        name={Nametwo}
        position={Cartesian3.fromDegrees(Longitudetwo, Latitudetwo, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwo} </h3>
          <h3>Latitude: {Latitudetwo}</h3>
          <h3>Longitude: {Longitudetwo}</h3>
          <h3>Detail: {Detailstwo} </h3>
          <h3>Far Away To: {Farawaytwo} km</h3>
  
        </EntityDescription>
      </Entity>

      <Entity
        name={Namethree}
        position={Cartesian3.fromDegrees(Longitudethree, Latitudethree, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthree} </h3>
          <h3>Latitude: {Latitudethree}</h3>
          <h3>Longitude: {Longitudethree}</h3>
          <h3>Detail: {Detailsthree} </h3>
          <h3>Far Away To: {Farawaythree} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefour}
        position={Cartesian3.fromDegrees(Longitudefour, Latitudefour, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfour} </h3>
          <h3>Latitude: {Latitudefour}</h3>
          <h3>Longitude: {Longitudefour}</h3>
          <h3>Detail: {Detailsfour} </h3>
          <h3>Far Away To: {Farawayfour} km</h3>
  
        </EntityDescription>
      </Entity>
        <Entity
        name={Namefour}
        position={Cartesian3.fromDegrees(Longitudefour, Latitudefour, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfour} </h3>
          <h3>Latitude: {Latitudefour}</h3>
          <h3>Longitude: {Longitudefour}</h3>
          <h3>Detail: {Detailsfour} </h3>
          <h3>Far Away To: {Farawayfour} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefive}
        position={Cartesian3.fromDegrees(Longitudefive, Latitudefive, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefive}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfive} </h3>
          <h3>Latitude: {Latitudefive}</h3>
          <h3>Longitude: {Longitudefive}</h3>
          <h3>Detail: {Detailsfive} </h3>
          <h3>Far Away To: {Farawayfive} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namesix}
        position={Cartesian3.fromDegrees(Longitudesix, Latitudesix, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namesix}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typessix} </h3>
          <h3>Latitude: {Latitudesix}</h3>
          <h3>Longitude: {Longitudesix}</h3>
          <h3>Detail: {Detailssix} </h3>
          <h3>Far Away To: {Farawaysix} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameseven}
        position={Cartesian3.fromDegrees(Longitudeseven, Latitudeseven, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameseven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesseven} </h3>
          <h3>Latitude: {Latitudeseven}</h3>
          <h3>Longitude: {Longitudeseven}</h3>
          <h3>Detail: {Detailsseven} </h3>
          <h3>Far Away To: {Farawayseven} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameeight}
        position={Cartesian3.fromDegrees(Longitudeeight, Latitudeeight, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameeight}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typeseight} </h3>
          <h3>Latitude: {Latitudeeight}</h3>
          <h3>Longitude: {Longitudeeight}</h3>
          <h3>Detail: {Detailseight} </h3>
          <h3>Far Away To: {Farawayeight} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namenine}
        position={Cartesian3.fromDegrees(Longitudenine, Latitudenine, 100)}
      >
          {/* <PointGraphics
          pixelSize={5}
          color={Color.RED}
          outlineColor={Color.INDIANRED}
          outlineWidth={30}
        ></PointGraphics> */}
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namenine}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesnine} </h3>
          <h3>Latitude: {Latitudenine}</h3>
          <h3>Longitude: {Longitudenine}</h3>
          <h3>Detail: {Detailsnine} </h3>
          <h3>Far Away To: {Farawaynine} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameten}
        position={Cartesian3.fromDegrees(Longitudeten, Latitudeten, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameten}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesten} </h3>
          <h3>Latitude: {Latitudeten}</h3>
          <h3>Longitude: {Longitudeten}</h3>
          <h3>Detail: {Detailsten} </h3>
          <h3>Far Away To: {Farawayten} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameeleven}
        position={Cartesian3.fromDegrees(Longitudeeleven, Latitudeeleven, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameeleven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typeseleven} </h3>
          <h3>Latitude: {Latitudeeleven}</h3>
          <h3>Longitude: {Longitudeeleven}</h3>
          <h3>Detail: {Detailseleven} </h3>
          <h3>Far Away To: {Farawayeleven} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwelve}
        position={Cartesian3.fromDegrees(Longitudetwelve, Latitudetwelve, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwelve}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwelve} </h3>
          <h3>Latitude: {Latitudetwelve}</h3>
          <h3>Longitude: {Longitudetwelve}</h3>
          <h3>Detail: {Detailstwelve} </h3>
          <h3>Far Away To: {Farawaytwelve} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirteen}
        position={Cartesian3.fromDegrees(Longitudethirteen, Latitudethirteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirteen} </h3>
          <h3>Latitude: {Latitudethirteen}</h3>
          <h3>Longitude: {Longitudethirteen}</h3>
          <h3>Detail: {Detailsthirteen} </h3>
          <h3>Far Away To: {Farawaythirteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefourteen}
        position={Cartesian3.fromDegrees(Longitudefourteen, Latitudefourteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefourteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfourteen} </h3>
          <h3>Latitude: {Latitudefourteen}</h3>
          <h3>Longitude: {Longitudefourteen}</h3>
          <h3>Detail: {Detailsfourteen} </h3>
          <h3>Far Away To: {Farawayfourteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefiveteen}
        position={Cartesian3.fromDegrees(Longitudefiveteen, Latitudefiveteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefiveteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfiveteen} </h3>
          <h3>Latitude: {Latitudefiveteen}</h3>
          <h3>Longitude: {Longitudefiveteen}</h3>
          <h3>Detail: {Detailsfiveteen} </h3>
          <h3>Far Away To: {Farawayfiveteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namesixteen}
        position={Cartesian3.fromDegrees(Longitudesixteen, Latitudesixteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namesixteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typessixteen} </h3>
          <h3>Latitude: {Latitudesixteen}</h3>
          <h3>Longitude: {Longitudesixteen}</h3>
          <h3>Detail: {Detailssixteen} </h3>
          <h3>Far Away To: {Farawaysixteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameseventeen}
        position={Cartesian3.fromDegrees(Longitudeseventeen, Latitudeseventeen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameseventeen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesseventeen} </h3>
          <h3>Latitude: {Latitudeseventeen}</h3>
          <h3>Longitude: {Longitudeseventeen}</h3>
          <h3>Detail: {Detailsseventeen} </h3>
          <h3>Far Away To: {Farawayseventeen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameeightteen}
        position={Cartesian3.fromDegrees(Longitudeeightteen, Latitudeeightteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameeightteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typeseightteen} </h3>
          <h3>Latitude: {Latitudeeightteen}</h3>
          <h3>Longitude: {Longitudeeightteen}</h3>
          <h3>Detail: {Detailseightteen} </h3>
          <h3>Far Away To: {Farawayeightteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namenineteen}
        position={Cartesian3.fromDegrees(Longitudenineteen, Latitudenineteen, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namenineteen}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesnineteen} </h3>
          <h3>Latitude: {Latitudenineteen}</h3>
          <h3>Longitude: {Longitudenineteen}</h3>
          <h3>Detail: {Detailsnineteen} </h3>
          <h3>Far Away To: {Farawaynineteen} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwenty}
        position={Cartesian3.fromDegrees(Longitudetwenty, Latitudetwenty, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwenty}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwenty} </h3>
          <h3>Latitude: {Latitudetwenty}</h3>
          <h3>Longitude: {Longitudetwenty}</h3>
          <h3>Detail: {Detailstwenty} </h3>
          <h3>Far Away To: {Farawaytwenty} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentyone}
        position={Cartesian3.fromDegrees(Longitudetwentyone, Latitudetwentyone, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentyone}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentyone} </h3>
          <h3>Latitude: {Latitudetwentyone}</h3>
          <h3>Longitude: {Longitudetwentyone}</h3>
          <h3>Detail: {Detailstwentyone} </h3>
          <h3>Far Away To: {Farawaytwentyone} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentytwo}
        position={Cartesian3.fromDegrees(Longitudetwentytwo, Latitudetwentytwo, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentytwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentytwo} </h3>
          <h3>Latitude: {Latitudetwentytwo}</h3>
          <h3>Longitude: {Longitudetwentytwo}</h3>
          <h3>Detail: {Detailstwentytwo} </h3>
          <h3>Far Away To: {Farawaytwentytwo} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentythree}
        position={Cartesian3.fromDegrees(Longitudetwentythree, Latitudetwentythree, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentythree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentythree} </h3>
          <h3>Latitude: {Latitudetwentythree}</h3>
          <h3>Longitude: {Longitudetwentythree}</h3>
          <h3>Detail: {Detailstwentythree} </h3>
          <h3>Far Away To: {Farawaytwentythree} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentyfour}
        position={Cartesian3.fromDegrees(Longitudetwentyfour, Latitudetwentyfour, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentyfour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentyfour} </h3>
          <h3>Latitude: {Latitudetwentyfour}</h3>
          <h3>Longitude: {Longitudetwentyfour}</h3>
          <h3>Detail: {Detailstwentyfour} </h3>
          <h3>Far Away To: {Farawaytwentyfour} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentyfive}
        position={Cartesian3.fromDegrees(Longitudetwentyfive, Latitudetwentyfive, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentyfive}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentyfive} </h3>
          <h3>Latitude: {Latitudetwentyfive}</h3>
          <h3>Longitude: {Longitudetwentyfive}</h3>
          <h3>Detail: {Detailstwentyfive} </h3>
          <h3>Far Away To: {Farawaytwentyfive} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentysix}
        position={Cartesian3.fromDegrees(Longitudetwentysix, Latitudetwentysix, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentysix}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentysix} </h3>
          <h3>Latitude: {Latitudetwentysix}</h3>
          <h3>Longitude: {Longitudetwentysix}</h3>
          <h3>Detail: {Detailstwentysix} </h3>
          <h3>Far Away To: {Farawaytwentysix} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentyseven}
        position={Cartesian3.fromDegrees(Longitudetwentyseven, Latitudetwentyseven, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentyseven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentyseven} </h3>
          <h3>Latitude: {Latitudetwentyseven}</h3>
          <h3>Longitude: {Longitudetwentyseven}</h3>
          <h3>Detail: {Detailstwentyseven} </h3>
          <h3>Far Away To: {Farawaytwentyseven} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentyeight}
        position={Cartesian3.fromDegrees(Longitudetwentyeight, Latitudetwentyeight, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentyeight}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentyeight} </h3>
          <h3>Latitude: {Latitudetwentyeight}</h3>
          <h3>Longitude: {Longitudetwentyeight}</h3>
          <h3>Detail: {Detailstwentyeight} </h3>
          <h3>Far Away To: {Farawaytwentyeight} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nametwentynine}
        position={Cartesian3.fromDegrees(Longitudetwentynine, Latitudetwentynine, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nametwentynine}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typestwentynine} </h3>
          <h3>Latitude: {Latitudetwentynine}</h3>
          <h3>Longitude: {Longitudetwentynine}</h3>
          <h3>Detail: {Detailstwentynine} </h3>
          <h3>Far Away To: {Farawaytwentynine} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirty}
        position={Cartesian3.fromDegrees(Longitudethirty, Latitudethirty, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirty}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirty} </h3>
          <h3>Latitude: {Latitudethirty}</h3>
          <h3>Longitude: {Longitudethirty}</h3>
          <h3>Detail: {Detailsthirty} </h3>
          <h3>Far Away To: {Farawaythirty} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtyone}
        position={Cartesian3.fromDegrees(Longitudethirtyone, Latitudethirtyone, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyone}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtyone} </h3>
          <h3>Latitude: {Latitudethirtyone}</h3>
          <h3>Longitude: {Longitudethirtyone}</h3>
          <h3>Detail: {Detailsthirtyone} </h3>
          <h3>Far Away To: {Farawaythirtyone} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtytwo}
        position={Cartesian3.fromDegrees(Longitudethirtytwo, Latitudethirtytwo, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtytwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtytwo} </h3>
          <h3>Latitude: {Latitudethirtytwo}</h3>
          <h3>Longitude: {Longitudethirtytwo}</h3>
          <h3>Detail: {Detailsthirtytwo} </h3>
          <h3>Far Away To: {Farawaythirtytwo} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtythree}
        position={Cartesian3.fromDegrees(Longitudethirtythree, Latitudethirtythree, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtythree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtythree} </h3>
          <h3>Latitude: {Latitudethirtythree}</h3>
          <h3>Longitude: {Longitudethirtythree}</h3>
          <h3>Detail: {Detailsthirtythree} </h3>
          <h3>Far Away To: {Farawaythirtythree} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtyfour}
        position={Cartesian3.fromDegrees(Longitudethirtyfour, Latitudethirtyfour, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyfour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtyfour} </h3>
          <h3>Latitude: {Latitudethirtyfour}</h3>
          <h3>Longitude: {Longitudethirtyfour}</h3>
          <h3>Detail: {Detailsthirtyfour} </h3>
          <h3>Far Away To: {Farawaythirtyfour} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtyfive}
        position={Cartesian3.fromDegrees(Longitudethirtyfive, Latitudethirtyfive, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyfive}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtyfive} </h3>
          <h3>Latitude: {Latitudethirtyfive}</h3>
          <h3>Longitude: {Longitudethirtyfive}</h3>
          <h3>Detail: {Detailsthirtyfive} </h3>
          <h3>Far Away To: {Farawaythirtyfive} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtysix}
        position={Cartesian3.fromDegrees(Longitudethirtysix, Latitudethirtysix, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtysix}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtysix} </h3>
          <h3>Latitude: {Latitudethirtysix}</h3>
          <h3>Longitude: {Longitudethirtysix}</h3>
          <h3>Detail: {Detailsthirtysix} </h3>
          <h3>Far Away To: {Farawaythirtysix} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtyseven}
        position={Cartesian3.fromDegrees(Longitudethirtyseven, Latitudethirtyseven, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyseven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtyseven} </h3>
          <h3>Latitude: {Latitudethirtyseven}</h3>
          <h3>Longitude: {Longitudethirtyseven}</h3>
          <h3>Detail: {Detailsthirtyseven} </h3>
          <h3>Far Away To: {Farawaythirtyseven} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtyeight}
        position={Cartesian3.fromDegrees(Longitudethirtyeight, Latitudethirtyeight, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyeight}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtyeight} </h3>
          <h3>Latitude: {Latitudethirtyeight}</h3>
          <h3>Longitude: {Longitudethirtyeight}</h3>
          <h3>Detail: {Detailsthirtyeight} </h3>
          <h3>Far Away To: {Farawaythirtyeight} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namethirtynine}
        position={Cartesian3.fromDegrees(Longitudethirtynine, Latitudethirtynine, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtynine}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesthirtynine} </h3>
          <h3>Latitude: {Latitudethirtynine}</h3>
          <h3>Longitude: {Longitudethirtynine}</h3>
          <h3>Detail: {Detailsthirtynine} </h3>
          <h3>Far Away To: {Farawaythirtynine} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Nameforty}
        position={Cartesian3.fromDegrees(Longitudeforty, Latitudeforty, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Nameforty}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesforty} </h3>
          <h3>Latitude: {Latitudeforty}</h3>
          <h3>Longitude: {Longitudeforty}</h3>
          <h3>Detail: {Detailsforty} </h3>
          <h3>Far Away To: {Farawayforty} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortyone}
        position={Cartesian3.fromDegrees(Longitudefortyone, Latitudefortyone, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortyone}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortyone} </h3>
          <h3>Latitude: {Latitudefortyone}</h3>
          <h3>Longitude: {Longitudefortyone}</h3>
          <h3>Detail: {Detailsfortyone} </h3>
          <h3>Far Away To: {Farawayfortyone} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortytwo}
        position={Cartesian3.fromDegrees(Longitudefortytwo, Latitudefortytwo, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortytwo}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortytwo} </h3>
          <h3>Latitude: {Latitudefortytwo}</h3>
          <h3>Longitude: {Longitudefortytwo}</h3>
          <h3>Detail: {Detailsfortytwo} </h3>
          <h3>Far Away To: {Farawayfortytwo} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortythree}
        position={Cartesian3.fromDegrees(Longitudefortythree, Latitudefortythree, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortythree}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortythree} </h3>
          <h3>Latitude: {Latitudefortythree}</h3>
          <h3>Longitude: {Longitudefortythree}</h3>
          <h3>Detail: {Detailsfortythree} </h3>
          <h3>Far Away To: {Farawayfortythree} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortyfour}
        position={Cartesian3.fromDegrees(Longitudefortyfour, Latitudefortyfour, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortyfour}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortyfour} </h3>
          <h3>Latitude: {Latitudefortyfour}</h3>
          <h3>Longitude: {Longitudefortyfour}</h3>
          <h3>Detail: {Detailsfortyfour} </h3>
          <h3>Far Away To: {Farawayfortyfour} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortyfive}
        position={Cartesian3.fromDegrees(Longitudefortyfive, Latitudefortyfive, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortyfive}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortyfive} </h3>
          <h3>Latitude: {Latitudefortyfive}</h3>
          <h3>Longitude: {Longitudefortyfive}</h3>
          <h3>Detail: {Detailsfortyfive} </h3>
          <h3>Far Away To: {Farawayfortyfive} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortysix}
        position={Cartesian3.fromDegrees(Longitudefortysix, Latitudefortysix, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefortysix}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortysix} </h3>
          <h3>Latitude: {Latitudefortysix}</h3>
          <h3>Longitude: {Longitudefortysix}</h3>
          <h3>Detail: {Detailsfortysix} </h3>
          <h3>Far Away To: {Farawayfortysix} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortyseven}
        position={Cartesian3.fromDegrees(Longitudefortyseven, Latitudefortyseven, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyseven}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortyseven} </h3>
          <h3>Latitude: {Latitudefortyseven}</h3>
          <h3>Longitude: {Longitudefortyseven}</h3>
          <h3>Detail: {Detailsfortyseven} </h3>
          <h3>Far Away To: {Farawayfortyseven} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortyeight}
        position={Cartesian3.fromDegrees(Longitudefortyeight, Latitudefortyeight, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtyeight}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortyeight} </h3>
          <h3>Latitude: {Latitudefortyeight}</h3>
          <h3>Longitude: {Longitudefortyeight}</h3>
          <h3>Detail: {Detailsfortyeight} </h3>
          <h3>Far Away To: {Farawayfortyeight} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefortynine}
        position={Cartesian3.fromDegrees(Longitudefortynine, Latitudefortynine, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namethirtynine}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfortynine} </h3>
          <h3>Latitude: {Latitudefortynine}</h3>
          <h3>Longitude: {Longitudefortynine}</h3>
          <h3>Detail: {Detailsfortynine} </h3>
          <h3>Far Away To: {Farawayfortynine} km</h3>
  
        </EntityDescription>
      </Entity>
      <Entity
        name={Namefifty}
        position={Cartesian3.fromDegrees(Longitudefifty, Latitudefifty, 100)}
      >
        <BillboardGraphics
          image={disastericon}
          scale={0.3}
        ></BillboardGraphics>
      
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
          <h2>{Namefifty}</h2>
          <p className="seperator">_______________________________________</p>
          <h3 className="typetext"> {Typesfifty} </h3>
          <h3>Latitude: {Latitudefifty}</h3>
          <h3>Longitude: {Longitudefifty}</h3>
          <h3>Detail: {Detailsfifty} </h3>
          <h3>Far Away To: {Farawayfifty} km</h3>
  
        </EntityDescription>
      </Entity>
    </Viewer>
  );
}

export default App;
