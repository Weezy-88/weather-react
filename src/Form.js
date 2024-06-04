import React from "react";

export default function Form() {
  return (
    <form>
      <div className="row">
        <div className="col-9">
          <input
            type="search"
            className="form-control"
            autoComplete="off"
            placeholder="Type a City..."
          />
        </div>
        <div className="col-3">
          <input className="btn btn-primary" type="submit" value="Search" />
        </div>
      </div>
    </form>
  );
}
