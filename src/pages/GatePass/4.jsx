import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';





function GatePass4() {

  const navigate = useNavigate();

  const handleNext = () => {
    //for loading one
    navigate('/4(1)');
  };
  const handleNext1 = () => {
    //for UNloading one
    navigate('/4(2)');
  };
  const handleNext2 = () => {
    //for Transfer one
    alert('Done! , Transfer Sheet Send to the Programmer');
  };


  //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};


const handleMaterialTypeChange = (event) => {
    setMaterialType(event.target.value);
  };


  const [materialType, setMaterialType] = useState('none');

  const renderButtons = () => {
    if (materialType === 'loading') {
      return (
        <div>
          <button className="button" onClick={handleNext} style={{margin : '12px', borderRadius:'18px'}}>Loading</button>
        </div>
      );
    } else if (materialType === 'unloading') {
      return (
        <div>
          <button className="button" onClick={handleNext1} style={{margin : '12px',borderRadius:'18px'}}>Unloading</button>
          
        </div>
      );
    } else if(materialType === 'transfer'){
        return(
            <div>
          <button className="button" onClick={handleNext2} style={{margin : '12px',borderRadius:'18px'}}>Transfer</button>
        </div>
        );
    }
    else {
      return null;
    }
  };

  return (
    <div className="container">
      <div className="BOX" >
        <div className="group">
          <div className="header">
            <div className="title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle"  onClick={() => setShowPopup(true)}>
            <div className='Vector'></div>
          </div>
          {/* for x-circle */}
          {showPopup && (
  <div className="popup" style={{left : '19%', bottom: '20%'}}>
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
          <div className="step completed ">4</div>
          </div>
          <div className='stepsHorizontal'>
        <div className='L'></div>
        <div className='R'></div>
          <div className="step completed  ">5</div>
          </div>
          <div className='stepsHorizontal'>
          <div className="step ">6</div>
          </div>
        </div>
          <div className="row">

          <div className="group">
        <div className="select">
          <div className="label">Material Type. : </div>
          <div><select className='select-box' id='material_type'>
          <option id='none' selected>None</option>
            <option id='material'>Material</option>
            <option id='raw_material'>Raw Material</option>
          </select></div>
        </div>
        </div>
           
        <div className="select">
              <div className="label">Truck Work Type:</div>
              <div>
                <select
                  className="select-box"
                  type="text"
                  id="truck_work_type"
                  value={materialType}
                  onChange={handleMaterialTypeChange}
                >
                  <option id="none" value="none" selected>
                    None
                  </option>
                  <option id="loading" value="loading">
                    Loading
                  </option>
                  <option id="unloading" value="unloading">
                    Unloading 
                  </option>
                  <option id="transfer" value="transfer">
                    Transfer 
                  </option>
                </select>
              </div>
            </div>
          </div>
          {renderButtons()}
        </div>
      </div>
    </div>
  );
}

export default GatePass4;
