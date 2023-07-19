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

const Palledar2 = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [slipNo, setSlipNo] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
    const [date, setDate] = useState(null);
  const [plotNo, setPlotNo] = useState('');
  const [locationNo , setLocationNo] =useState('')
const [truckWork, setTruckWork] = useState('');
const [programmerName, setProgrammerName] = useState('');
const [programmerName2 , setProgrammerName2] = useState('')
const [supervisorName, setSupervisorName] = useState('');
const [selectedType, setSelectedType] = useState('');
  const [type, setType] = useState('');
  const [timingLimit, setTimingLimit] = useState(null);


  const [tendorFields, setTendorFields] = useState([{ name: '', option: '' }]);
  const [privateFields, setPrivateFields] = useState([{ name: '' }]);
  const [itemName , setItemName] = useState('');
  const [quantity , setQuantity] = useState('');
  const [units , setUnits] = useState('');
  const [subItemName, setSubItemName] =useState('');
  const [grade1, setGrade1] =useState('');
  const [grade2, setGrade2] =useState('');
  const [bagColor1, setBagColor1] =useState('');
  const [bagColor2, setBagColor2] =useState('');
  const [noOfBag1, setNoOfBag1] =useState('');
  const [noOfBag2, setNoOfBag2] =useState('');
  const [bagSize1, setBagSize1] =useState('');
  const [bagSize2, setBagSize2] =useState('');
  const [maxWeight1, setMaxWeight1] =useState('');
  const [maxWeight2, setMaxWeight2] =useState('');
  const [minWeight1, setMinWeight1] =useState('');
  const [minWeight2, setMinWeight2] =useState('');
  const [workType1 ,setWorkType1] = useState('');
  const [workType2 ,setWorkType2] = useState('');

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
              label="Slip No"
              value={slipNo}
              onChange={(e) => setSlipNo(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
            <TextField
  label="Date"
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
       
    </div>
  );
           
    
        case 2:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
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
                  <InputLabel>No. of Bag:</InputLabel>
                  <Select
                    value={noOfBag1}
                    onChange={(e) => setNoOfBag1(e.target.value)}
                  >
                  </Select>
                </FormControl>
                
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Bag Color </InputLabel>
                  <Select
                    value={bagColor1}
                    onChange={(e) => setBagColor1(e.target.value)}
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

                
           
          </div>
        );
        case 3:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
            
            

                <TextField
              label="Max Weight"
              value={maxWeight1}
              onChange={(e) => setMaxWeight1(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label="Min Weight"
              value={minWeight1}
              onChange={(e) => setMinWeight1(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />

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
                  <InputLabel>Location No:</InputLabel>
                  <Select
                    value={locationNo}
                    onChange={(e) => setLocationNo(e.target.value)}
                  >
                    <MenuItem value="none">None</MenuItem>
                    
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Work Type 1(Bag Change):</InputLabel>
                  <Select
                    value={workType1}
                    onChange={(e) => setWorkType1(e.target.value)}
                  >
                    <MenuItem value="none" selected>None</MenuItem>
                    <MenuItem id='dhang_bag_change'>Dhang Bag Change</MenuItem>
          <MenuItem id='stock_bag_change'>Stock Bag Change</MenuItem>
                    
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>No. of Bag:</InputLabel>
                  <Select
                    value={noOfBag2}
                    onChange={(e) => setNoOfBag2(e.target.value)}
                  >
                  </Select>
                </FormControl>

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Bag Color </InputLabel>
                  <Select
                    value={bagColor2}
                    onChange={(e) => setBagColor2(e.target.value)}
                  >
                  </Select>
                </FormControl>
             <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Bag Size </InputLabel>
                  <Select
                    value={bagSize2}
                    onChange={(e) => setBagSize2(e.target.value)}
                  >
                  </Select>
                </FormControl>

              


             
           
          </div>
        );
        case 4:

        return (
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxHeight: '85%', height: '250px', overflowY: 'scroll' }}>
            

                <FormControl fullWidth style={{ padding: '10px', width: '60%' }}>
                  <InputLabel>Work Type 2:</InputLabel>
                  <Select
                    value={workType2}
                    onChange={(e) => setWorkType2(e.target.value)}
                  >
                    <MenuItem value="none" selected>None</MenuItem>
                    <MenuItem value="DhangBharai">Dhang Bharai</MenuItem>
                        <MenuItem value="DhangSalai">Dhang Salai</MenuItem>
                        <MenuItem value="DhangBharaiTulai">Dhang Bharai Tulai</MenuItem>
                        <MenuItem value="DhangBharaiTulaiSalai">Dhang Bharai Tulai Salai</MenuItem>
                        <MenuItem value="PaltiBharai">Palti Bharai</MenuItem>
                        <MenuItem value="PaltiSalai">Palti Salai</MenuItem>
                        <MenuItem value="PaltiBharaiTulai"> Palti Bharai Tulai</MenuItem>
                        <MenuItem value="PaltiBharaiTulaiSalai">Palti Bharai Tulai Salai</MenuItem>
                    
                  </Select>
                </FormControl>



                <TextField
              label="Max Weight"
              value={maxWeight2}
              onChange={(e) => setMaxWeight2(e.target.value)}
              fullWidth
              style={{ padding: '10px', width: '60%' }}
            />
                <TextField
              label="Min Weight"
              value={minWeight2}
              onChange={(e) => setMinWeight2(e.target.value)}
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

export default Palledar2;