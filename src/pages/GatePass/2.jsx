import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function GatePass2() {
  const [type, setType] = useState('none');
  const navigate = useNavigate();
  const handleNext = () => {
    if (type === 'own') {
      navigate('/2(1)');
    } else if (type === 'outside') {
      navigate('/2(2)');
    }
  };

  // for the x-circle pop-up
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <div className="BOX">
        <div className="group">
          <div className="header">
            <div className="title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle" onClick={() => setShowPopup(true)}>
              <div className="Vector"></div>
            </div>
            {/* for x-circle */}
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <div className="popup-header">Options</div>
                  <div className="popup-body">
                    <div className="popup-option" onClick={handleClosePopup}>
                      Cancel
                    </div>
                    <div className="popup-option">Exit</div>
                    <div className="popup-option">Save</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="stepper">
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step completed">1</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step completed">2</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step">3</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step">4</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step">5</div>
            </div>
            <div className="stepsHorizontal">
              <div className="step">6</div>
            </div>
          </div>

          <div className="row">
            <div className="group">
              <div className="select">
                <div className="label">Truck Type:</div>
                <div>
                  <select
                    className="select-box"
                    id="type"
                    value={type} // Set the selected value to 'type' state variable
                    onChange={(e) => setType(e.target.value)} // Update the 'type' state variable on change
                  >
                    <option value="none">None</option>
                    <option value="own">OWN</option>
                    <option value="outside">OUTSIDE</option>
                  </select>
                </div>
              </div>
            </div>

            {type === 'own' && ( // Display Truck No div only when 'own' option is selected
              <div className="group">
                <div className="select">
                  <div className="label">Truck No:</div>
                  <div>
                    <select className="select-box" id="truck_no">
                      <option id="none" selected>
                        None
                      </option>
                    </select>
                  </div>
                </div>
              </div>
            )}

            {type === 'outside' && ( // Display Truck Weight div only when 'outside' option is selected
              <div className="group">
                <div className="select">
                  <div className="label">Truck Weight:</div>
                  <div>
                    <select className="select-box" id="truck_weight">
                      <option id="none" selected>
                        None
                      </option>
                      <option id="5tons">5 Tons</option>
                      <option id="10tons">10 Tons</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="button" onClick={handleNext}>
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default GatePass2;
