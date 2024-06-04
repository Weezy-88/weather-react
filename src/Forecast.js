import React from "react";
import City from "./City";
import Emoji from "./Emoji";
import Description from "./Description";

import Humidity from "./Humidity";
import Temperature from "./Temperature";
import Windspeed from "./Windspeed";

export default function Forecast() {
  return (
    <div>
      <div className="row">
        <div className="col-9">
          <City />
        </div>
        <div className="col-3">
          <Emoji />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Description />
          <Humidity />
        </div>
        <div className="col-6">
          <Windspeed />
          <Temperature />
        </div>
      </div>
    </div>
  );
}
