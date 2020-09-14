import React, { useState } from "react";
import "./App.css";
import Modal from "./Modal";

const BUTTON_WRAPPRER_STYLE = {
  position: "relative",
  zIndex: 1,
};

const OTHER_CONTENT_STYLES = {
  position: "relative",
  zIndex: 2,
  backgroundColor: "red",
  padding: "10px",
};

function App() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <div style={BUTTON_WRAPPRER_STYLE}>
        <button onClick={() => setIsOpen(true)}>OPEN MODAL</button>

        <Modal open={isOpen} onClose={() => setIsOpen(false)}>
          Fancy Modal
        </Modal>
      </div>

      <div style={OTHER_CONTENT_STYLES}></div>
    </>
  );
}

export default App;
