import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Palledar2_3() {

  const navigate = useNavigate();

  //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};

  const HandleNext = () => {
    navigate('/palledar2(4)');
  };

  return (
    <div className="container" style={{height: '99vh'}}>
    <div className='BOX' style={{height: '740px'}}>
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
          <div className="step ">4</div>
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
            <div className="label">Grade 1 : </div>
            <div> <select className='select-box' id='grade1'>
          <option id='none' selected>None</option> </select></div>
        </div>
        </div>
        </div>
<div className='row'>
<div className="group">
          <div className="select">
            <div className="label">Grade 2 : </div>
            <div> <select className='select-box' id='grade2'>
          <option id='none' selected>None</option> </select></div>
        </div>

        
        </div>

        <div className="group">
        <div className="select">
          <div className="label">No. of Bag : </div>
          <div><input className='select-box' type='text' id='no_of_bag' /></div>
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
          <div className="label">Max. Weight : </div>
          <div><input className='select-box' type='text' id='max_weight' /></div>
        </div>
        </div>
<div className="group">
        <div className="select">
          <div className="label">Min. Weight : </div>
          <div><input className='select-box' type='text' id='min_weight' /></div>
        </div>
        </div>

        </div>


       
        <div className='inline'>
       <div className="button" onClick={HandleNext} >Next</div>
       </div>
      </div>
      </div>
    </div>
  );
}

export default Palledar2_3;
