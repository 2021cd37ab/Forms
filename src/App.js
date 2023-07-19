import React from 'react';
import { BrowserRouter as Router , Switch ,Route,Routes } from 'react-router-dom';

import GatePass1 from './pages/GatePass/1';
import GatePass2 from './pages/GatePass/2';
import GatePass2_1 from './pages/GatePass/2(1)';
import GatePass2_2 from './pages/GatePass/2(2)';
import GatePass from "./pages/Multistep/gatepass.js";


import Multistep from './pages/Multistep/Multistep'
import Palledar2 from './pages/Multistep/palledar2';
import Production from './pages/Multistep/production';
import Raw_material_loading from './pages/Multistep/raw_material_loading';
import Work_bardana from './pages/Multistep/work_bardana';
import Transfer from './pages/Multistep/transfer';
import Packing from './pages/Multistep/packing';



function App(){
    return (
      <GatePass />
    );
}

export default App;
