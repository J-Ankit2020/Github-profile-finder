import React from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
const NavBar = ({isDarkMode, darkModeHandler}) => {
    const toggleDarkMode = (checked) => {
    darkModeHandler(checked);
  };

  return (
    <div className='flex justify-between items-center p-4 w-11/12'>
        <h1 className='left font-bold text-2xl tracking-wider'>devfinder</h1>
        <div className="right flex items-center justify-evenly">
            <h1 className='tracking-widest font-medium mr-5'>{isDarkMode ? 'LIGHT' : 'DARK'}</h1>
        <DarkModeSwitch
      checked={isDarkMode}
      onChange={toggleDarkMode}
      size={30}
      style={{'padding':'2px'}}
/>
</div>
    </div>
  )
}

export default NavBar