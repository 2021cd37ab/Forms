import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Palledar1_3() {

  const navigate = useNavigate();

  //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};

const HandleDone = () => {
    alert('Data submitted!');
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
    <div className="label">Plot No. : </div>
    <div> <select className='select-box' id='plot_no'>
   </select></div>
</div>
</div>
<div className="group">
  <div className="select">
    <div className="label">Location : </div>
    <div> <select className='select-box' id='location'>
   </select></div>
</div>


</div>
</div>

<div className='row'>
<div className="group">
          <div className="select">
            <div className="label">Work Type 1(Bag Change)  : </div>
            <div> <select className='select-box' id='work_type1'>
          <option id='none' selected>None</option>
          <option id='dhang_bag_change'>Dhang Bag Change</option>
          <option id='stock_bag_change'>Stock Bag Change</option> </select></div>
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
    <div className="label">Work Type 2 : </div>
    <div> <select className='select-box' id='work_type2'>
    <option value="none" selected>None</option>
                        <option value="DhangBharai">Dhang Bharai</option>
                        <option value="DhangSalai">Dhang Salai</option>
                        <option value="DhangBharaiTulai">Dhang Bharai Tulai</option>
                        <option value="DhangBharaiTulaiSalai">Dhang Bharai Tulai Salai</option>
                        <option value="PaltiBharai">Palti Bharai</option>
                        <option value="PaltiSalai">Palti Salai</option>
                        <option value="PaltiBharaiTulai"> Palti Bharai Tulai</option>
                        <option value="PaltiBharaiTulaiSalai">Palti Bharai Tulai Salai</option>
   </select></div>
</div>


</div>
<div className="group">
        <div className="select">
          <div className="label">Max. Weight : </div>
          <div><input className='select-box' type='text' id='max_weight' /></div>
        </div>
        </div>


        </div>

        <div className='row'>

        <div className="group">
        <div className="select">
          <div className="label">Min. Weight : </div>
          <div><input className='select-box' type='text' id='min_weight' /></div>
        </div>
        </div>


        <div className="group">
              <div className="select">
                <div className="label">Remark:</div>
                <div>
                  <input className="select-box" type="text" id="remark" />
                </div>
              </div>
            </div>
</div>


       
<div
              className="button" 
              onClick={HandleDone}
              style={{ backgroundColor: 'rgb(50, 205, 50)' , marginLeft: '20px'}}
            >
              Done
            </div>
      </div>
      </div>
    </div>
  );
}

export default Palledar1_3;
