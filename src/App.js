import { Route } from "react-router-dom";
import React, { useState } from "react";

import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

import Visual from "./components/main/Visual";

import NewArrival from "./components/sub/NewArrival";
import WeeklyBest from "./components/sub/WeeklyBest";
import Event from "./components/sub/Event";
import Football from "./components/sub/Football";

import "./scss/style.scss";

function App() {
  const [selectedTab, setSelectedTab] = useState("tab1");
  return (
    <>
      <Header></Header>

      {/* <Visual></Visual> */}

      <Route exact path="/">
        <Visual onSelectTab={setSelectedTab} />
      </Route>

      <Route path="/new" component={NewArrival} />
      <Route path="/best" component={WeeklyBest} />
      <Route path="/event">
        <Event selectedMenu={selectedTab} />
      </Route>
      <Route path="/football" component={Football} />

      <Footer></Footer>

    </>


  );
}

export default App;