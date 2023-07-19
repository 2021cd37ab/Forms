import React from 'react';

import { useState } from 'react';





function Loading2() {

  const [type, setType] = useState('none');
 



//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};


  return (
    <div className="container">
    <div className='BOX'>
      <div className="group">
        <div className="header">
          <div className="title">Enter The following Details:</div>
          <div className="separator"></div>
          <div className="x-circle"  onClick={() => setShowPopup(true)}>
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
          <div className="step completed">2</div>
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
    <div className="label">Time: </div>
    <div> <input className='select-box' type='time' id='time'  /></div>
</div>


</div>


          <div className="group">
          <div className="select">
            <div className="label">Programmer Name : </div>
             <select className='select-box'   id='programmer_name' ></select>
          </div>
        
        </div>
        </div>

        <div className='row'>
        <div className="group">
          <div className="select">
            <div className="label">Supervisor Name : </div>
             <select className='select-box'   id='supervisor_name' ></select>
          </div>
        
        </div>
        <div className="group" >
          <div className="select">
            <div className="label" >Truck No :</div>
             <select className='select-box'  id='truck_no' ></select>
            
          </div>
         
        </div>
        </div>
        <div className='row'>
        <div className="group">
          <div className="select">
            <div className="label">Driver Name : </div>
             <select className='select-box'   id='driver_name' ></select>
          </div>
        
        </div>
        <div className="group">
          <div className="select">
            <div className="label">Driver Number : </div>
             <input className='select-box'   id='driver_number' />
          </div>
        
        </div>

        </div>
    
        <div className="button" >Next</div>
      </div>
      </div>
    </div>
  );
}

export default Loading2;
