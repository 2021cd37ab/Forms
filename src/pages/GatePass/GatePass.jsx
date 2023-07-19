// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route, Routes, useNavigate } from 'react-router-dom';

// function GatePass1() {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleNext = () => {
//     navigate('/2');
//   };

//   return (
//     <div className="container">
//       <div className="BOX">
//         <div className="group">
//           <div className="header">
//             <div className="title">Enter The following Details:</div>
//             <div className="separator"></div>
//             <div className="x-circle" onClick={() => setShowPopup(true)}>
//               <div className="Vector"></div>
//             </div>
//             {showPopup && (
//               <div className="popup">
//                 <div className="popup-content">
//                   <div className="popup-header">Options</div>
//                   <div className="popup-body">
//                     <div className="popup-option" onClick={handleClosePopup}>
//                       Cancel
//                     </div>
//                     <div className="popup-option">Exit</div>
//                     <div className="popup-option">Save</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="stepper">
//             <div className="stepsHorizontal">
//               <div className="L"></div>
//               <div className="R"></div>
//               <div className="step completed">1</div>
//             </div>
//             {/* Add other steps here */}
//           </div>
//           <div className="row">
//             <div className="group">
//               <div className="select">
//                 <div className="label">Slip Number:</div>
//                 <input className="select-box" type="text" id="slip_number" />
//               </div>
//             </div>
//             <div className="group">
//               <div className="select">
//                 <div className="label">Date:</div>
//                 <input className="select-box" type="date" id="date" />
//               </div>
//             </div>
//           </div>
//           <div className="button" onClick={handleNext}>
//             Next
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GatePass2() {
//   const navigate = useNavigate();
//   const [type, setType] = useState('none');
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleNext = () => {
//     if (type === 'own') {
//       navigate('/2(1)');
//     } else if (type === 'outside') {
//       navigate('/2(2)');
//     }
//   };

//   return (
//     <div className="container">
//       <div className="BOX">
//         <div className="group">
//           <div className="header">
//             <div className="title">Enter The following Details:</div>
//             <div className="separator"></div>
//             <div className="x-circle" onClick={() => setShowPopup(true)}>
//               <div className="Vector"></div>
//             </div>
//             {showPopup && (
//               <div className="popup">
//                 <div className="popup-content">
//                   <div className="popup-header">Options</div>
//                   <div className="popup-body">
//                     <div className="popup-option" onClick={handleClosePopup}>
//                       Cancel
//                     </div>
//                     <div className="popup-option">Exit</div>
//                     <div className="popup-option">Save</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="stepper">
//             <div className="stepsHorizontal">
//               <div className="L"></div>
//               <div className="R"></div>
//               <div className="step completed">1</div>
//             </div>
//             {/* Add other steps here */}
//           </div>
//           <div className="row">
//             <div className="group">
//               <div className="select">
//                 <div className="label">Truck Type:</div>
//                 <select
//                   className="select-box"
//                   id="type"
//                   value={type}
//                   onChange={(e) => setType(e.target.value)}
//                 >
//                   <option value="none">None</option>
//                   <option value="own">OWN</option>
//                   <option value="outside">OUTSIDE</option>
//                 </select>
//               </div>
//             </div>
//             {/* Add other fields based on truck type */}
//           </div>
//           <div className="button" onClick={handleNext}>
//             Next
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GatePass2_1() {
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleDone = () => {
//     alert('Data submitted!');
//   };

//   return (
//     <div className="container">
//       <div className="BOX" style={{ height: '560px' }}>
//         <div className="group">
//           <div className="header">
//             <div className="title">Enter The following Details:</div>
//             <div className="separator"></div>
//             <div className="x-circle" onClick={() => setShowPopup(true)}>
//               <div className="Vector"></div>
//             </div>
//             {showPopup && (
//               <div className="popup">
//                 <div className="popup-content">
//                   <div className="popup-header">Options</div>
//                   <div className="popup-body">
//                     <div className="popup-option" onClick={handleClosePopup}>
//                       Cancel
//                     </div>
//                     <div className="popup-option">Exit</div>
//                     <div className="popup-option">Save</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="stepper">
//             <div className="stepsHorizontal">
//               <div className="L"></div>
//               <div className="R"></div>
//               <div className="step completed">1</div>
//             </div>
//             {/* Add other steps here */}
//           </div>
//           <div className="row">
//             <div className="group">
//               <div className="select">
//                 <div className="label">Truck Type:</div>
//                 <select className="select-box" id="type">
//                   <option id="outside" defaultValue="own" selected>
//                     OWN
//                   </option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* Add other fields */}
//           <div className="button" onClick={handleDone} style={{ backgroundColor: 'rgb(50, 205, 50)' }}>
//             Done
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GatePass2_2() {
//   const navigate = useNavigate();
//   const [showPopup, setShowPopup] = useState(false);

//   const handleClosePopup = () => {
//     setShowPopup(false);
//   };

//   const handleNext = () => {
//     navigate('/3');
//   };

//   return (
//     <div className="container">
//       <div className="BOX" style={{ height: '560px' }}>
//         <div className="group">
//           <div className="header">
//             <div className="title">Enter The following Details:</div>
//             <div className="separator"></div>
//             <div className="x-circle" onClick={() => setShowPopup(true)}>
//               <div className="Vector"></div>
//             </div>
//             {showPopup && (
//               <div className="popup" style={{ left: '20%', bottom: '22%' }}>
//                 <div className="popup-content">
//                   <div className="popup-header">Options</div>
//                   <div className="popup-body">
//                     <div className="popup-option" onClick={handleClosePopup}>
//                       Cancel
//                     </div>
//                     <div className="popup-option">Exit</div>
//                     <div className="popup-option">Save</div>
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//           <div className="stepper">
//             <div className="stepsHorizontal">
//               <div className="L"></div>
//               <div className="R"></div>
//               <div className="step completed">1</div>
//             </div>
//             {/* Add other steps here */}
//           </div>
//           <div className="row">
//             <div className="group">
//               <div className="select">
//                 <div className="label">Type:</div>
//                 <select className="select-box" id="type">
//                   <option id="outside" defaultValue="Outside" selected>
//                     OUTSIDE
//                   </option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           {/* Add other fields */}
//           <div className="button" onClick={handleNext}>
//             Next
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function GatePass() {
//   return (
//     <div className="container">
//       <Routes>
//         <Route path="/" element={<GatePass1 />} />
//         <Route path="/2" element={<GatePass2 />} />
//         <Route path="/2(1)" element={<GatePass2_1 />} />
//         <Route path="/2(2)" element={<GatePass2_2 />} />
//       </Routes>
//     </div>
//   );
// }

// function App() {
//   return (
//     <Router>
//       <switch>
//         <Route path="/" element={<GatePass />} />
//       </switch>
//     </Router>
//   );
// }

// export default App;
