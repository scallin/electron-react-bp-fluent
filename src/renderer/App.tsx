/* eslint-disable prettier/prettier */
import * as React from 'react';
import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import { PrimaryButton, Panel } from '@fluentui/react';
import { useBoolean } from '@fluentui/react-hooks';
import './App.css';
import { initializeIcons } from '@fluentui/react/lib/Icons';

initializeIcons();

function Landing() {
  const [isOpen, { setTrue: openPanel, setFalse: dismissPanel }] =
    useBoolean(false);

  return (
    <div className="container ms-Grid" dir="ltr">
      <h1>Electron React with Fluent</h1>
      <div className="ms-Grid-row">
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">
          <PrimaryButton onClick={openPanel}>Click Me</PrimaryButton>
        </div>
        <div className="ms-Grid-col ms-sm6 ms-md4 ms-lg2">Column 2</div>
      </div>
      <Panel
        headerText="Sample panel"
        isOpen={isOpen}
        onDismiss={dismissPanel}
        // You MUST provide this prop! Otherwise screen readers will just say "button" with no label.
        closeButtonAriaLabel="Close"
      >
        <p>Content goes here.</p>
      </Panel>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </Router>
  );
}
