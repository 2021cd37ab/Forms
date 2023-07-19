import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

function Palledar1_4() {
  const navigate = useNavigate();

  // For the x-circle pop-up
  const [showPopup, setShowPopup] = useState(false);
  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const HandleDone = () => {
    alert('Data submitted!');
  };

  const [workType1, setWorkType1] = useState('none');
  const [workType2, setWorkType2] = useState('none');

  const handleWorkType1Change = (event) => {
    setWorkType1(event.target.value);
  };

  const handleWorkType2Change = (event) => {
    setWorkType2(event.target.value);
  };

  return (
    <div className="container" style={{ height: '99vh' }}>
      <div className="BOX" style={{ height: '740px' }}>
        <div className="group">
          <div className="header">
            <div className="title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle" onClick={() => setShowPopup(true)}>
              <div className="Vector"></div>
            </div>
            {/* for x-circle */}
            {showPopup && (
              <div className="popup" style={{ left: '20%', bottom: '26%' }}>
                <div className="popup-content">
                  <div className="popup-header">Options</div>
                  <div className="popup-body">
                    <div className="popup-option" onClick={handleClosePopup}>
                      Cancel
                    </div>
                    <div className="popup-option">Exit</div>
                    <div className="popup-option">Save</div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="stepper">
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step completed">1</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step completed">2</div>
            </div>
            <div className="stepsHorizontal">
              <div className="L"></div>
              <div className="R"></div>
              <div className="step completed">3</div>
            </div>
            <div className="stepsHorizontal">
              <div className="step completed">4</div>
            </div>
          </div>
          <div className="row">
            <div className="group">
              <div className="select">
                <div className="label">Kotha Type:</div>
                <div>
                  {' '}
                  <select className="select-box" id="kotha_type">
                    <option id="none" selected>
                      None
                    </option>{' '}
                  </select>
                </div>
              </div>
            </div>
            <div className="group">
              <div className="select">
                <div className="label">Kotha No.:</div>
                <div>
                  {' '}
                  <select className="select-box" id="kotha_no">
                    <option id="none" selected>
                      None
                    </option>{' '}
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="group">
              <div className="select">
                <div className="label">Work Type 1:</div>
                <div>
                  {' '}
                  <select
                    className="select-box"
                    id="work_type1"
                    value={workType1}
                    onChange={handleWorkType1Change}
                  >
                    <option value="none">None</option>
                    <option value="HodiKatai">Hodi Katai</option>
                    <option value="DhangtoHodi">Dhang to Hodi</option>
                    <option value="StocktoDhang">Stock to Dhang</option>
                    <option value="salai">Salai</option>
                    <option value="Bharai">Bharai</option>
                    <option value="BharaiTulai">Bharai Tulai</option>
                    <option value="BharaiTulaiSalai">Bharai Tulai Salai</option>
                    <option value="BharaiPeepa">Bharai Peepa</option>
                    <option value="BharaiTulaiPeepa">Bharai Tulai Peepa</option>
                    <option value="BharaiTulaiSalaiPeepa">Bharai Tulai Salai Peepa</option>
                    <option value="Dhang">Dhang</option>
                  </select>
                </div>
              </div>
            </div>

          
      
          <div className="group">
                <div className="select">
                  <div className="label">Plot No.:</div>
                  <div>
                    {' '}
                    <select className="select-box" id="plot_no1"></select>
                  </div>
                </div>
              </div>

            
          </div>

          <div className="row">

          {workType1.includes('Dhang') && (
              <div className="group">
                <div className="select">
                  <div className="label">Location:</div>
                  <div>
                    {' '}
                    <select className="select-box" id="location1"></select>
                  </div>
                </div>
              </div>
            )}


            <div className="group">
              <div className="select">
                <div className="label">Work Type 2:</div>
                <div>
                  {' '}
                  <select
                    className="select-box"
                    id="work_type2"
                    value={workType2}
                    onChange={handleWorkType2Change}
                  >
                    <option value="none">None</option>
                    <option value="DhangtoDhang">Dhang to Dhang</option>
                  </select>
                </div>
              </div>
            </div>

          </div>
          <div className='row'>
          {workType2 === 'DhangtoDhang' && (
              <div className="group">
                <div className="select">
                  <div className="label">Plot No.:</div>
                  <div>
                    {' '}
                    <select className="select-box" id="plot_no2"></select>
                  </div>
                </div>
              </div>
            )}

            {workType2 === 'DhangtoDhang' && (
              <div className="group">
                <div className="select">
                  <div className="label">Location:</div>
                  <div>
                    {' '}
                    <select className="select-box" id="location2"></select>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="row">
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

export default Palledar1_4;
