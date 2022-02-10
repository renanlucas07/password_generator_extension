import React from "react";
import { render } from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./popup.css";
import Header from "./Components/Header";
import Button from "./Components/Button";
import ShowPassword from "./Components/ShowPassword";

function Popup() {
  const [host, setHost] = React.useState(1);

  function generatePassword() {
    hostname = window.location.hostname;
    console.log(hostname);
    chrome.storage.sync.get("cypher", ({ cypher }) => {});
  }

  async function executeScript() {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      func: generatePassword,
    });
    setHost(host + 1);
  }

  return (
    <div className="PopupContainer">
      <div className="PopupHeader">
        <Header />
      </div>
      <div className="PopupDescription">
        <p>
          generate your passwords for websites using a secret key and the url of
          the actual site.
        </p>
      </div>
      <div className="PopupContent">
        <ShowPassword value={host} onClick={() => executeScript()} />
      </div>
    </div>
  );
}

render(<Popup />, document.getElementById("react-target"));
