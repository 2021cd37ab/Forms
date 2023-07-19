import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';




function Screen2() {
const navigate = useNavigate();

//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);

const handleClosePopup = () => {
  setShowPopup(false);
};


const HandleNext =()=>{
  navigate('/screen4')
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
            <div className="label">Plot No : </div>
            <div> <select className='select-box' id='plot_no'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>
        </div>

       
        <div className="button" onClick={HandleNext} >Next</div>
      </div>
      </div>
    </div>
  );
}

export default Screen2;
