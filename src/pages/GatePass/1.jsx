import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




function GatePass1() {
const navigate = useNavigate();

//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);

const handleClosePopup = () => {
  setShowPopup(false);
};


const HandleNext =()=>{
  navigate('/2')
};


  return (
    <div className="container">
    <div className='BOX'>
      <div className="group">
        <div className="header">
          <div className="title">Enter The following Details:</div>
          <div className="separator"></div>
          <div className="x-circle" onClick={() => setShowPopup(true)} >
            <div className='Vector'></div>
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
        <div className="popup-option">
          Exit
        </div>
        <div className="popup-option">Save</div>
      </div>
    </div>
  </div>
)}
        </div>
        <div className="stepper">
        <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">1</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step ">2</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step ">3</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step ">4</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step  ">5</div>
          </div>
          <div className='stepsHorizontal'>
          <div className="step ">6</div>
          </div>
        </div>
<div className='row'>
<div className="group">
        <div className="select">
          <div className="label">Slip Number : </div>
          <div><input className='select-box' type='text' id='slip_number' /></div>
        </div>
        </div>

        <div className="group">
          <div className="select">
            <div className="label">Date: </div>
            <div> <input className='select-box' type='date' id='date'  /></div>
        </div>
        
        </div>
        </div>

       
        <div className="button" onClick={HandleNext} >Next</div>
      </div>
      </div>
    </div>
  );
}

export default GatePass1;
