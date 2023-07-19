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

const steps = ['Step 1', 'Step 2', 'Step 3', 'Step 4', 'Step 5'];

const Production = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [slipNo, setSlipNo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(null);
  const [plotNo, setPlotNo] = useState('');
const [programmerName, setProgrammerName] = useState('');
const [programmerName2 , setProgrammerName2] = useState('')
const [supervisorName, setSupervisorName] = useState('');
const [departmentName, setDepartmentName] = useState('');
const [helperName , setHelperName] = useState('');
const [type, setType] = useState('')

const [selectedType, setSelectedType] = useState('');
  const [timingLimit, setTimingLimit] = useState(null);
  const [tendorFields, setTendorFields] = useState([{ name: '', option: '' }]);
  const [privateFields, setPrivateFields] = useState([{ name: '' }]);
  const [itemName , setItemName] = useState('');
  const [quantity , setQuantity] = useState('');
  const [units , setUnits] = useState('');
  const [subItemName, setSubItemName] =useState('');
  const [grade1, setGrade1] =useState('');
  const [grade2, setGrade2] =useState('');
  const [noOfBag, setNoOfBag] =useState('');
  const [productionWorkType, setProductionWorkType] = useState('');
  const [fromKothaNo, setFromKothaNo] = useState('');
  const [toKothaNo, setToKothaNo] = useState('');
  const [sampleNo, setSampleNo] = useState('');
  const [speed, setSpeed] = useState('');
  const [deadline,setDeadline] = useState('');
  const [startTime, setStartTime] = useState('');
  const [stopTime, setStopTime] = useState('');



const[remarkReason , setRemarkReason] =useState('');

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
              label="Slip No"
              value={slipNo}
              onChange={(e) => setSlipNo(e.target.value)}
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
                  <InputLabel>Department Name:</InputLabel>
                  <Select
                    value={departmentName}
                    onChange={(e) => setDepartmentName(e.target.value)}
                  >
                   <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>
      <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Programmer Name:</InputLabel>
                  <Select
                    value={programmerName}
                    onChange={(e) => setProgrammerName(e.target.value)}
                  >
                   <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                        <InputLabel>Programmer Name 2:</InputLabel>
                        <Select
                          value={programmerName2}
                          onChange={(e) => setProgrammerName2(e.target.value)}
                        >
                         <MenuItem value="none">None</MenuItem>
                        </Select>
                      </FormControl>

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Supervisor Name:</InputLabel>
                  <Select
                    value={supervisorName}
                    onChange={(e) => setSupervisorName(e.target.value)}
                  >
                   <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>
                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Helper Name:</InputLabel>
                  <Select
                    value={helperName}
                    onChange={(e) => setHelperName(e.target.value)}
                  >
                   <MenuItem value="none">None</MenuItem>
                  </Select>
                </FormControl>
       
    </div>
  );
           
    
        case 2:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
             
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Plot No:</InputLabel>
                  <Select
                    value={plotNo}
                    onChange={(e) => setPlotNo(e.target.value)}
                  >
                    <MenuItem value="plot1">Plot 1</MenuItem>
                    <MenuItem value="plot2">Plot 2</MenuItem>
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
    <InputLabel>Task Detail</InputLabel>
    <Select value={type} onChange={(e) => setType(e.target.value)}>
      <MenuItem value="newDeadline">New Tasksheet</MenuItem>
      <MenuItem value="oldDeadline">Old Tasksheet</MenuItem>
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
                    
                                  
          </div>
        );
        case 3:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
            
            

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Grade 1 </InputLabel>
                  <Select
                    value={grade1}
                    onChange={(e) => setGrade1(e.target.value)}
                  >
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Grade 2 </InputLabel>
                  <Select
                    value={grade2}
                    onChange={(e) => setGrade2(e.target.value)}
                  >
                  </Select>
                </FormControl>


                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Production Work Type:</InputLabel>
                  <Select
                    value={productionWorkType}
                    onChange={(e) => setProductionWorkType(e.target.value)}
                  >
                    <MenuItem value="none" selected>None</MenuItem>        
                  </Select>
                </FormControl>
            
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel> From Kotha No.:</InputLabel>
                  <Select
                    value={fromKothaNo}
                    onChange={(e) => setFromKothaNo(e.target.value)}
                  >
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>To Kotha No.:</InputLabel>
                  <Select
                    value={toKothaNo}
                    onChange={(e) => setToKothaNo(e.target.value)}
                  >
                  </Select>
                </FormControl>
             
            
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel> Sample No.:</InputLabel>
                  <Select
                    value={sampleNo}
                    onChange={(e) => setSampleNo(e.target.value)}
                  >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Speed :</InputLabel>
                  <Select
                    value={speed}
                    onChange={(e) => setSpeed(e.target.value)}
                  >
                  <MenuItem value="none">None</MenuItem>
                  <MenuItem value="yes">Yes</MenuItem>
                  <MenuItem value="no">No</MenuItem>
                  </Select>
                </FormControl>

              

            
           
          </div>
        );
        case 4:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
             


             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>

{type === 'newDeadline' && (
  <div>
    {tendorFields.map((field, index) => (
      <Box key={index} sx={{ marginTop: '10px' }}>
       
      <TextField
  label=" New Deadline"
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  fullWidth
  style={{ padding: '10px', width: '95%' }}
/>
       
      </Box>
    ))}
  </div>
)}
{type === 'oldDeadline' && (
  <div>
    {privateFields.map((field, index) => (
      <Box key={index} sx={{ marginTop: '10px' }}>

      <TextField
  label=" Old Deadline"
  type="date"
  value={deadline}
  onChange={(e) => setDeadline(e.target.value)}
  fullWidth
  style={{ padding: '10px', width: '95%' }}
/>
      </Box>
    ))}

  </div>
)}

</FormControl>

              
                <TextField
  label="Start Time"
  type="time"
  value={startTime}
  onChange={(e) => setStartTime(e.target.value)}
  fullWidth
  style={{ padding: '10px', width: '60%' }}
/>
                <TextField
  label="Stop Time"
  type="time"
  value={stopTime}
  onChange={(e) => setStopTime(e.target.value)}
  fullWidth
  style={{ padding: '10px', width: '60%' }}
/>
             
<FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>No. of Bag:</InputLabel>
                  <Select
                    value={noOfBag}
                    onChange={(e) => setNoOfBag(e.target.value)}
                  >
                  </Select>
                </FormControl>

                <TextField
              label="Quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Units </InputLabel>
                  <Select
                    value={units}
                    onChange={(e) => setUnits(e.target.value)}
                  >
                    <MenuItem value="quantal" selected>Quantal</MenuItem>
                    <MenuItem value="tons" >Tons</MenuItem>
                    <MenuItem value="kg" >Kg</MenuItem>
                  </Select>
                </FormControl>

            
                <TextField
              label=" Remark(Reason)"
              value={remarkReason}
              onChange={(e) => setRemarkReason(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
             
           
          </div>
        );
      
      default:
        return null;
    }
  };

  const handleTendorFieldNameChange = (event, index) => {
    const updatedFields = [...tendorFields];
    updatedFields[index].name = event.target.value;
    setTendorFields(updatedFields);
  };

  const handleTendorFieldOptionChange = (event, index) => {
    const updatedFields = [...tendorFields];
    updatedFields[index].option = event.target.value;
    setTendorFields(updatedFields);
  };

  const handlePrivateFieldNameChange = (event, index) => {
    const updatedFields = [...privateFields];
    updatedFields[index].name = event.target.value;
    setPrivateFields(updatedFields);
  };

  const handleAddTendorField = () => {
    setTendorFields([...tendorFields, { name: '', option: '' }]);
  };

  const handleAddPrivateField = () => {
    setPrivateFields([...privateFields, { name: '' }]);
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

export default Production;