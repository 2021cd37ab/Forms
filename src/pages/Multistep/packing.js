import React, { useState } from 'react';
import { useEffect } from 'react';
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
} from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import { DateTimePicker } from '@mui/lab';
import './Multistep.css';
// import { TextField } from '@mui/material';

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4','Step 5'];

const Packing = () => {
  const [activeStep, setActiveStep] = useState(0);
const [tasksheetNo, setTasksheetNo] = useState('')
  const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(null);
const [programmerName, setProgrammerName] = useState('');
const [programmerName2, setProgrammerName2] = useState('');
const [operatorName , setOperatorName] = useState('')
const [supervisorName, setSupervisorName] = useState('');
const [selectedType, setSelectedType] = useState('');

  const [timingLimit, setTimingLimit] = useState(null);


  const[plantTime,setPlantTime]=useState('')
  const [itemName , setItemName] = useState('');

  const [subItemName, setSubItemName] =useState('');

  const [bagColor, setBagColor] =useState('');
  const [rollColor, setRollColor] =useState('');

  const [bagSize1, setBagSize1] =useState('');

  const [maxWeight, setMaxWeight] =useState('');
  const [minWeight, setMinWeight] =useState('');

  const[perPacketSize,setPerPacketSize]=useState('')
  const [noOfMachine,setNoOfMachine] =useState('')
  const [noOfLabour,setNoOfLabour]=useState('')
  const[target,setTarget] =useState('')
const[remark , setRemark] =useState('');

  const [showPopup, setShowPopup] = useState(false);

  const handleNext = () => {
   
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  
  const handleSubmit = () => {
    // Perform submission logic here
    // You can access all the form values and perform your desired actions
    console.log('Form submitted!');
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  useEffect(() => {
  if (activeStep === 0) {
    setSelectedType('');
  }
}, [activeStep]);

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
            <TextField
              label="Task Sheet No"
              value={tasksheetNo}
              onChange={(e) => setTasksheetNo(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
            <TextField
  label="Date"
  type='date'
  value={date}
  onChange={(e) => setDate(e.target.value)}
  fullWidth
  style={{ padding: '10px', width: '60%' }}
/>

            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Select Date"
                value={selectedDate}
                onChange={handleDateChange}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        );
         
    
        case 1:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Plant Time:</InputLabel>
                  <Select
                    value={plantTime}
                    onChange={(e) => setPlantTime(e.target.value)}
                  >
                   <MenuItem value="none" selected>None</MenuItem>
                   <MenuItem value="day">Day</MenuItem>
                   <MenuItem value="night">Night</MenuItem>
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Item Name:</InputLabel>
                  <Select
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                  >
                   <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>SubItem Name</InputLabel>
                  <Select
                    value={subItemName}
                    onChange={(e) => setSubItemName(e.target.value)}
                  >
                    <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>


             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Bag Color </InputLabel>
                  <Select
                    value={bagColor}
                    onChange={(e) => setBagColor(e.target.value)}
                  >
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Bag Size </InputLabel>
                  <Select
                    value={bagSize1}
                    onChange={(e) => setBagSize1(e.target.value)}
                  >
                  </Select>
                </FormControl>

                <TextField
              label="Per Packet Size:"
              value={perPacketSize}
              onChange={(e) => setPerPacketSize(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
           
          </div>
        );
        case 2:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
          
          <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Roll Color </InputLabel>
                  <Select
                    value={rollColor}
                    onChange={(e) => setRollColor(e.target.value)}
                  >
                  </Select>
                </FormControl>

                
                <TextField
              label="Max Weight"
              value={maxWeight}
              onChange={(e) => setMaxWeight(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label="Min Weight"
              value={minWeight}
              onChange={(e) => setMinWeight(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
 
           
          </div>
        );

        case 3:
        return(
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>

                  
  
  <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                    <InputLabel>Programmer Name:</InputLabel>
                    <Select
                      value={programmerName}
                      onChange={(e) => setProgrammerName(e.target.value)}
                    >
                    
                    </Select>
                  </FormControl>

  <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                    <InputLabel>Programmer Name 2:</InputLabel>
                    <Select
                      value={programmerName2}
                      onChange={(e) => setProgrammerName2(e.target.value)}
                    >
                    
                    </Select>
                  </FormControl>
  
                  <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                    <InputLabel>Supervisor Name:</InputLabel>
                    <Select
                      value={supervisorName}
                      onChange={(e) => setSupervisorName(e.target.value)}
                    >
                     
                    </Select>
                  </FormControl>
  
                  <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                          <InputLabel>Operator Name:</InputLabel>
                          <Select
                            value={operatorName}
                            onChange={(e) => setOperatorName(e.target.value)}
                          >
                          
                          </Select>
                        </FormControl>
   
             
            </div>
        );
        case 4:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
             
             

                <TextField
              label="No of Machine"
              value={noOfMachine}
              onChange={(e) => setNoOfMachine(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label="No. of Labour"
              value={noOfLabour}
              onChange={(e) => setNoOfLabour(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label=" Target"
              value={target}
              onChange={(e) => setTarget(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label=" Remark"
              value={remark}
              onChange={(e) => setRemark(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
           
          </div>
        );
      
      default:
        return null;
    }
  };


  

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className='multistep'>
      <div className='multistep-main'>
        <div className='group'>
          <div className="detail-header">
            <div className="detail-title">Enter The following Details:</div>
            <div className="separator"></div>
            <div className="x-circle" onClick={() => setShowPopup(true)}>
              <div className="Vector"></div>
            </div>

            {/* for x-circle */}
            {showPopup && (
              <div className="popup">
                <div className="popup-content">
                  <div className="popup-header">Options</div>
                  <div className="popup-body">
                    {/* <div className="popup-option" onClick={handleClosePopup}>
                      Cancel
                    </div> */}
                    <div className="popup-option" onClick={handleClosePopup}>Exit</div>
                    <div className="popup-option">Save</div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <Stepper activeStep={activeStep} alternativeLabel className='steps-num'>
            {steps.map((label) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
              </Step>
            ))}
          </Stepper>
          <div className="multi-form">
            {activeStep === steps.length ? (
              <div>
                <p>Form submitted successfully!</p>
                {/* Display submitted form data here */}
              </div>
            ) : (
              <div>
                <form onSubmit={handleSubmit}>
                  {renderStepContent(activeStep)}
                  <div className="action-btn">
                    <Button disabled={activeStep === 0} onClick={handleBack}>
                      Back
                    </Button>
                    {activeStep !== steps.length - 1 && (
                      <Button variant="contained" onClick={handleNext}>
                        Next
                      </Button>
                    )}
                    {activeStep === steps.length - 1 && (
                      <Button variant="contained" type="submit">
                        Submit
                      </Button>
                    )}
                  </div>
                </form>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
};

export default Packing;