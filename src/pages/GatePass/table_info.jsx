import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';


function Table_info() {
  return (
    <div className='BOX' style={{height: '200px' ,paddingTop:'12px'}}>
        <div className='row'>
<div className="group">
        <div className="select">
          <div className="label">Item Name : </div>
          <div> <select className='select-box' id='item_name'></select></div>
        </div>
        </div>

        <div className="group">
        <div className="select">
          <div className="label">Vendor Name : </div>
          <div><input className='select-box' type='text' id='vendor_name' /></div>
        </div>
        </div>
        </div>
        <div className='row'>
<div className="group">
        <div className="select">
          <div className="label">Quantity  : </div>
          <div><input className='select-box' type='text' id='quantity' /></div>
        </div>
        </div>

        <div className="group">
        <div className="select">
          <div className="label"> Units : </div>
          <div><select className='select-box' id='units'>
            <option id='quantal' selected>Quantal</option>
            <option id='tons'>Tons</option>
            <option id='kg'>Kg</option>
          </select></div>
        </div>
        </div>
        </div>
       </div>
    
  );
}

export default Table_info;
