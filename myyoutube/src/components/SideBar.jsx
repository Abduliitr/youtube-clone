import React from 'react';
import homeIcon from '../assets/images/home.svg'
import helpIcon from '../assets/images/help.svg'

const SideBar = () => {
  return (
    <div className='d-flex flex-column my-3 py-2'> 
      {['label1', "label2", "label3", 'label4', 'label5', 
        'label6'].map((label) => <SideItem icon={homeIcon} label={label} />)}
      <hr />
      {['label1', "label2", "label3", 'label4', 'label5', 
        'label6', 'label7', 'label8'].map((label) => <SideItem icon={helpIcon} label={label} />)}
      <hr />
      {['label1', "label2", "label3", 'label4', 'label5', 
        'label6'].map((label) => <SideItem icon={homeIcon} label={label} />)}
      <hr />
        <p>Side items</p>
        <p>Side items</p>
        <p>Side items</p>
    </div>
  )
}

const SideItem = ({icon, label}) => {
  return (
    <div className='d-flex'>
      <img src={icon} width={25} height={25} className='m-2'></img>
      <p className='m-2 fw-bold'>{label}</p>
    </div>
  );
}

export default SideBar;