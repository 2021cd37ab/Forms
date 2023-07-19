import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';





function GatePass2_1() {
const navigate = useNavigate();

//for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};

const HandleDone =()=>{
  alert('Data submitted !');
};

return(
<div className="container">
        <div className='BOX' style={{height: '560px'}}>
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
        {/* <div className='L'></div>
        <div className='R'></div> */}
          <div className="step completed ">3</div>
          </div>
          {/* <div className='stepsHorizontal'>
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
          </div> */}
        </div>
        <div className='row'>
        <div className='group'>
           <div className='select'>
           <div className="label">Truck Type : </div>
           <div> <select className='select-box' id='type'>
              <option id='outside' defaultValue={'own'}  selected>OWN</option> </select></div>
    
    
           </div>
           </div>
        </div>

            <div className='row'>
           

           <div className="group" >
          <div className="select">
            <div className="label" >Plot No :</div>
             <select className='select-box'  id='plot_no' ></select>
            
          </div>
         
        </div>
           <div className="group" >
          <div className="select">
            <div className="label" >Truck Work :</div>
             <select className='select-box'  id='truck_work' >
              <option id='none'>None</option>
              <option id='empty'>Empty</option>
              <option id='load'>Load</option>
             </select>
            
          </div>
         
        </div>

            </div>
            <div className='row'>

       
        <div className="group">
          <div className="select">
            <div className="label">Programmer Name : </div>
             <select className='select-box'   id='programmer_name' ></select>
          </div>
        
        </div>

        <div className="group">
          <div className="select">
            <div className="label">Supervisor Name : </div>
             <select className='select-box'   id='supervisor_name' ></select>
          </div>
        
        </div>
        </div>
      

       
        <div className="button" onClick={HandleDone} style={{backgroundColor :'rgb(50, 205, 50)'}} >Done</div>
          </div>
          </div>
        </div> 
);
}


export default GatePass2_1;