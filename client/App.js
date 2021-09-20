import React, { useState, useEffect } from "react";
import {Scroll} from './components/Scroll'
import { apiKey } from "../secrets";


export const App = () => {

  return (
    <div id="main">
      <h1>Spacestagram</h1>
      <Scroll />
    </div>
  );
};
