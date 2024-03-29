import React, { useState } from "react";
import view from "../assets/eye.png";
import unview from "../assets/hidden.png";

//custom textfield input
const Textfieldcomponent = ({ placeholder, type, height, value, onChange }) => {
  const [inputType, setInputType] = useState(type);

  return (
    <div className="w-full relative">
      <input
        value={value}
        style={{ height: height }}
        type={inputType}
        className="bg-element outline-none px-4 py-2 w-full my-2 rounded-sm"
        placeholder={placeholder}
        onChange={onChange}
      />

      {/* my custom button is not used here as it is too big and not suitable here */}
      {type === "password" && (
        //if the type of input is password then make it text on icon click and vice versa along that also change the src of icon
        <button
          onClick={(e) => {
            e.preventDefault();
            if (inputType === "password") {
              setInputType("text");
              return;
            }
            setInputType("password");
          }}
          className="text-xs absolute right-5 top-5"
        >
          {inputType === "password" ? (
            <img className="w-4" src={view} alt="" />
          ) : (
            <img className="w-4" src={unview} alt="" />
          )}
        </button>
      )}
    </div>
  );
};

export default Textfieldcomponent;
