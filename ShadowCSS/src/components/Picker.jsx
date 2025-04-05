import React, { useState } from "react";
import styles from "./Picker.module.css";

const Picker = ({ settings, updateSetting, boxShadowValue }) => {
  const [copySuccess, setCopySuccess] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;
    updateSetting(name, newValue);
  };

  const handleCopy = () => {
    const textToCopy = `box-shadow: ${boxShadowValue};\n-webkit-box-shadow: ${boxShadowValue};\n-moz-box-shadow: ${boxShadowValue};`;
    navigator.clipboard.writeText(textToCopy)
      .then(() => setCopySuccess('Copied to clipboard!'))
      // .catch((err) => setCopySuccess('Failed to copy!'));
  };

  return (
    <div className={styles.picker}>
      <h1 className={styles.picker__title}>SETTINGS_</h1>
      <div className={styles.picker__content}>
        <p>#Horizontal ({settings.horizontal}px)</p>
        <input
          type="range"
          name="horizontal"
          min="-100"
          max="100"
          value={settings.horizontal}
          onChange={handleChange}
        />
        <p>#Vertical ({settings.vertical}px)</p>
        <input
          type="range"
          name="vertical"
          min="-100"
          max="100"
          value={settings.vertical}
          onChange={handleChange}
        />
        <p>#Blur ({settings.blur}px)</p>
        <input
          type="range"
          name="blur"
          min="0"
          max="100"
          value={settings.blur}
          onChange={handleChange}
        />
        <p>#Spread ({settings.spread}px)</p>
        <input
          type="range"
          name="spread"
          min="-100"
          max="100"
          value={settings.spread}
          onChange={handleChange}
        />
        <div className={styles.wrapper}>
          <p>#Inset:</p>
          <input
            type="checkbox"
            name="inset"
            checked={settings.inset}
            onChange={handleChange}
          />
        </div>
        <div className={styles.wrapper}>
          <p>#Color:</p>
          <input
            type="color"
            name="color"
            value={settings.color}
            onChange={handleChange}
          />
        </div>
      </div>
      <h1 className={styles.picker__title}>CODE_</h1>
      <div className={styles.picker__content}>
        <pre><code>box-shadow: {boxShadowValue};</code></pre>
        <pre><code>-webkit-box-shadow: {boxShadowValue};</code></pre>
        <pre><code>-moz-box-shadow: {boxShadowValue};</code></pre>
        <button className={styles.copyButton} onClick={handleCopy}>Copy Code to Clipboard</button>
        {copySuccess && <p>{copySuccess}</p>}
      </div>
    </div>
  );
};

export default Picker;
