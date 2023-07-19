import React from 'react';
import { useState } from 'react';



function Loading4() {

    //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
    setShowPopup(false);
  };


  return (
    <div className="container" style={{height: '115vh'}}>
    <div className='BOX' style={{height: '944px'}}>
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
            <div className="label">Item Name : </div>
            <div> <select className='select-box' id='item_name'>
          <option id='none' selected>None</option> </select></div>
        </div>
        </div>
        <div className="group">
          <div className="select">
            <div className="label">SubItem Name : </div>
            <div> <select className='select-box' id='sub_item_name'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>
        </div>
<div className='row'>


        <div className="group">
          <div className="select">
            <div className="label">Quantity  : </div>
            <div> <select className='select-box' id='quantity'>
          <option id='Quantal' selected>Quantal</option>
          <option id='tons'>Tons</option>
          <option id='kg'>Kg</option> </select></div>
        </div>
        </div>
        <div className="group">
          <div className="select">
            <div className="label">Truck Type  : </div>
            <div> <select className='select-box' id='truck_type'>
          <option id='5tons' selected>5tons</option>
          <option id='10tons'>10Tons</option>
     </select></div>
        </div>
        </div>
        </div>
<div className='row'>

        <div className="group">
          <div className="select">
            <div className="label">Grade 1 : </div>
            <div> <select className='select-box' id='grade1'>
          <option id='none' selected>None</option> </select></div>
        </div>
        </div>
        <div className="group">
          <div className="select">
            <div className="label">Grade 2 : </div>
            <div> <select className='select-box' id='grade2'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>
        </div>
<div className='row'>


        <div className="group">
          <div className="select">
            <div className="label">Bag Color : </div>
            <div> <select className='select-box' id='bag_color'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>
        <div className="group">
          <div className="select">
            <div className="label">Bag Size : </div>
            <div> <select className='select-box' id='bag_size'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>
        </div>
<div className='row'>
<div className="group">
        <div className="select">
          <div className="label">No. of Bag : </div>
          <div><input className='select-box' type='text' id='no_of_bag' /></div>
        </div>
        </div>

        <div className="group">
          <div className="select">
            <div className="label">Work Type  : </div>
            <div> <select className='select-box' id='work_type'>
          <option id='none' selected>None</option></select></div>
        </div>

        
        </div>
        </div>
<div className='row'>

        <div className="group">
          <div className="select">
            <div className="label">Location : </div>
            <div> <select className='select-box' id='location'>
          <option id='none' selected>None</option> </select></div>
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
          <div className="label">Remark : </div>
          <div><input className='select-box' type='text' id='remark' /></div>
        </div>
        </div>
        <div className="group">
          <div className="select">
            <div className="label">Kanta Name : </div>
            <div> <select className='select-box' id='kanta_name'>
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

export default Loading4;
