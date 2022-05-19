import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("Enter Text Here");
  const handleClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert(" Converted to uppercase.", "success");
  };
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert(" Converted to Lowercase.", "success");
  };
  const handleClear = () => {
    let newText = "";
    setText(newText);
    props.showAlert(" Text Cleared.", "success");
  };
  const handleCopy = () => {
    const text = document.querySelector("#myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    props.showAlert(" Text Copied", "success");
  };
  const handleExtraScpaces = () => {
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    props.showAlert(" Extra spaces Removed.", "success");
  };
  return (
    <>
      <div style={{ color: props.mode === "dark" ? "white" : "black" }}>
        <div className="mb-3">
          <h1>{props.heading}</h1>
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>

        {/* Buttons */}
        <button
          disabled={text.length === 0}
          onClick={handleClick}
          className="btn btn-primary mx-1 my-1"
        >
          To Upper
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleLoClick}
          className="btn btn-primary mx-1 my-1"
        >
          To Lower
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleCopy}
          className="btn btn-primary mx-1 my-1"
        >
          Copy Text
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleExtraScpaces}
          className="btn btn-primary mx-1 my-1"
        >
          Remove Extra Space
        </button>
        <button
          disabled={text.length === 0}
          onClick={handleClear}
          className="btn btn-primary mx-1 my-1"
        >
          Clear
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>Your Summary</h1>
        <p>
          {
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length
          }{" "}
          Words and {text.length} Characters.
        </p>
        <p>
          {0.008 *
            text.split(" ").filter((ele) => {
              return ele.length !== 0;
            }).length}{" "}
          Minutes Read
        </p>
        <h1>Preview</h1>

        <p>{text.length > 0 ? text : "Enter something to preview it here"}</p>
      </div>
    </>
  );
}
