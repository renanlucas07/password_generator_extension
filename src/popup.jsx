import React from "react";
import { render } from "react-dom";
import "core-js/stable";
import "regenerator-runtime/runtime";
import "./popup.css";

async function executeScript() {
  let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    func: generatePassword,
  });
}

function generatePassword() {
  let hostname = window.location.hostname;
  console.log(hostname);
  chrome.storage.sync.get("cypher", ({ cypher }) => {

  });
}

function Popup() {
  return (
    <button className="button" onClick={() => executeScript()} id="generate">Generate</button>
  );
}

render(<Popup />, document.getElementById('react-target'));
