import React, { useState } from "react";

export default function Textform(props) {
  const handleUpClick = () => {
    //console.log("Uppercase was clicked"+text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showalerts("Changed to Uppercase", "success");
  };
  const handleloClick = () => {
    //console.log("Uppercase was clicked"+text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showalerts("Changed to Lowercase", "success");
  };
  const handleOnChange = (event) => {
    console.log("On change");
    setText(event.target.value);
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showalerts("Text Cleard!", "success");
  };
  const handleCopy = () => {
    var copyText = document.getElementById("mybox");
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    props.showalerts("Copied to Clipboard", "success");
  };
  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            value={text}
            style={{
              backgroundColor: props.mode === "light" ? "white" : "grey",
              color: props.mode === "light" ? "black" : "white",
            }}
            onChange={handleOnChange}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button
          className="btn btn-primary mx-3 my-3"
          disabled={text.length === 0}
          onClick={handleUpClick}
        >
          Convert to uppercase
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          disabled={text.length === 0}
          onClick={handleloClick}
        >
          Convert to lowercase
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          disabled={text.length === 0}
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          className="btn btn-primary mx-3 my-3"
          disabled={text.length === 0}
          onClick={handleCopy}
        >
          Copy
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "light" ? "black" : "white" }}
      >
        <h1>Your text summary is:</h1>
        <p>
          {
            text.split(/\s+/).filter((element) => {
              return element.length !== 0;
            }).length
          }{" "}
          Words {text.length} Characters
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((element) => {
              return element.length !== 0;
            }).length}{" "}
          minutes reading time
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
