import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='text-white max-w-[800px] text-center mx-auto bg-gradient-to-r from-[#BB763C] to-[#e36f11] py-4 rounded-md'>
          <div className='text-xl lg:text-[35px] font-bold'>Chocolate Management System</div>
        </div>
    );
};

export default Header;