import React, { useState } from "react";
import Tour from "reactour";
import PropTypes from "prop-types";
// import "./ReactTour.css";

function ReactTour({ steps }) {
  // Default open
  const [visible, setVisible] = useState(true);
  // Close React Tour
  const onClose = async () => {
    setVisible(false);
  };
  return <Tour steps={steps} isOpen={visible} onRequestClose={onClose} />;
}

ReactTour.propTypes = {
  steps: PropTypes.object,
};

export default ReactTour;
