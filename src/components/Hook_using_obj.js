import React from "react";
import { useState } from "react";
function Hook_using_obj(props) {
  const [name, setname] = useState({
    firstname: "",
    lastname: "",
  });
  return (
    <div>
      <form>
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setname({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setname({ ...name, lastname: e.target.value })}
        />
        <h2>Firstname : {name.firstname} </h2>
        <h2>Lastname : {name.lastname} </h2>
      </form>
    </div>
  );
}

export default Hook_using_obj;
//using object as firstname and lastname
//used spread operator ->(...name)
