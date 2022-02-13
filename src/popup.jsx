import React from 'react';
import { render } from 'react-dom';
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import CryptoJS from 'crypto-js';
import './popup.css';
import Header from './Components/Header';
import ShowPassword from './Components/ShowPassword';
import Description from './Components/Description';
import SecretKey from './Components/SecretKey';

function Popup() {
  const [host, setHost] = React.useState('');
  const [secretKey, setSecretKey] = React.useState('');

  function onChangeSecretKey(value) {
    setSecretKey(value);
  }

  const executeScript = async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    const domain = new URL(tab.url).hostname.replace('www.', '').split('.')[0];

    let password;
    password = CryptoJS.HmacMD5(domain, secretKey).toString();
    password =
      password.substring(15, 20).toUpperCase() +
      password.substring(20, 30).match(/.{5}/g).join('#');
    setHost(password);
  };

  return (
    <div className="PopupContainer">
      <div className="PopupHeader">
        <Header />
      </div>
      <div className="PopupDescription">
        <Description />
      </div>

      <div className="PopupContent"></div>
      <SecretKey onChangeSecretKey={onChangeSecretKey} secretKey={secretKey} />
      <ShowPassword value={host} onClick={() => executeScript()} />
    </div>
  );
}

render(<Popup />, document.getElementById('react-target'));
