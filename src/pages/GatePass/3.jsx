import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';





function GatePass3() {

  const navigate = useNavigate();


  //for the x-circle pop-up
const [showPopup, setShowPopup] = useState(false);
const handleClosePopup = () => {
  setShowPopup(false);
};
const HandleNext =()=>{
  navigate('/3(1)')
};

 

  const [workType, setWorkType] = useState('none');
  


  const handleWorkTypeChange = (event) => {
    setWorkType(event.target.value);
  };

  

  return (
    <div className="container">
      <div className="BOX" style={{ height: '590px' }}>
        <div className="group">
          <div className="header">
            <div className="title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle"  onClick={() => setShowPopup(true)}>
            <div className='Vector'></div>
          </div>
          {/* for x-circle */}
          {showPopup && (
  <div className="popup" style={{left : '19%', bottom: '26%'}}>
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
          <div className="step completed ">3</div>
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
          <div className="row">
            <div className="group">
              <div className="select">
                <div className="label">Work Type:</div>
                <div>
                  <select
                    className="select-box"
                    id="work_type"
                    value={workType}
                    onChange={handleWorkTypeChange}
                  >
                    <option id="none" value="none" selected>
                      None
                    </option>
                    <option id="tender" value="tender">
                      Tender
                    </option>
                    <option id="private" value="private">
                      Private
                    </option>
                  </select>
                </div>
              </div>

              {workType === 'tender' && (
                <>
                  <div className="select">
                    <div className="label">Block:</div>
                    <div>
                      <select className="select-box" id="block">
                        {/* Options for Block */}
                      </select>
                    </div>
                  </div>

                  <div className="select">
                    <div className="label">Area:</div>
                    <div>
                      <select className="select-box" id="area">
                        {/* Options for Area */}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {workType === 'private' && (
                <div className="select">
                  <div className="label">Party Name:</div>
                  <div>
                    <input
                      type="text"
                      className="select-box"
                      id="party_name"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="button" onClick={HandleNext} >Next</div>
        </div>
      </div>
    </div>
  );
}

export default GatePass3;
