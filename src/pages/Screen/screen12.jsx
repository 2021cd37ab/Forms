import React from 'react';
import { useState } from 'react';



function Screen12() {

    //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="container" style={{height: '115vh'}}>
    <div className='BOX' style={{height: '824px'}}>
      <div className="group">
        <div className="header">
          <div className="title">Enter The following Details:</div>
          <div className="separator"></div>
          <div className="x-circle"  onClick={() => setShowPopup(true)}>
            <div className='Vector'></div>
          </div>
          {/* for x-circle */}
          {showPopup && (
  <div className="popup" style={{left : '20%', bottom: '26%'}}>
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
          <div className="step completed">3</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed">4</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed ">5</div>
          </div>
          <div className='stepsHorizontal'>
          <div className="step completed ">6</div>
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

       
        <div className='inline'>
       <div className="button" >Add More</div>
       <div className="button" >Next</div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default Screen12;
