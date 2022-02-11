import React from "react";
import { render } from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./popup.css";
import Header from "./Components/Header";
import ShowPassword from "./Components/ShowPassword";
import Description from "./Components/Description";

function Popup() {
  const [host, setHost] = React.useState("");

  const executeScript = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: generatePassword,
    });
  };
  const generatePassword = () => {
    let hostname = window.location.hostname;
    console.log(hostname);
    chrome.storage.sync.get("cypher", ({ cypher }) => {});
  };

  return (
    <div className="PopupContainer">
      <div className="PopupHeader">
        <Header />
      </div>
      <div className="PopupDescription">
        <Description />
      </div>
      <div className="PopupContent">
        <ShowPassword value={host} onClick={() => executeScript()} />
      </div>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
