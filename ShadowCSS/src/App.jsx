import React, { useState, useCallback } from 'react'; // Dodaj useCallback
import './App.css';
import Header from './components/Header';
import Picker from './components/Picker';
import Showcase from './components/Showcase';
import Main from './components/Main';

function App() {
  const [settings, setSettings] = useState({
    horizontal: 0,
    vertical: 0,
    blur: 50,
    spread: 0,
    color: "#000000",
    inset: false,
  });

  const updateSetting = useCallback((key, value) => {
    setSettings(prevSettings => ({
      ...prevSettings,
      [key]: value
    }));
  }, []);


  const insetKeyword = settings.inset ? "inset " : "";
  const boxShadowValue = `${insetKeyword}${settings.horizontal}px ${settings.vertical}px ${settings.blur}px ${settings.spread}px ${settings.color}`;

  return (
    <>
      <Header />
      <Main>
        <Picker
          settings={settings}
          updateSetting={updateSetting}
          boxShadowValue={boxShadowValue}
        />
        <Showcase
          boxShadowValue={boxShadowValue}
        />
      </Main>
    </>
  );
}

export default App;