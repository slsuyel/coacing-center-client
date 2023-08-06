import React from 'react';
import { Link } from 'react-router-dom';
import SuccessStory from '../../home/SuccessStory';

const SuccessList = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>
<<<<<<< HEAD
                <div className='mt-4'>
                    <Link to='/dashboard/success/add' className='fw-medium p-1 px-2 rounded-1 text-decoration-none text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> গল্প যোগ করুনঃ </Link></div>

                <div >
=======

                <Link to='/dashboard/success/add' className='btn fw-medium ms-3 mt-3  rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> গল্প যোগ করুনঃ </Link>

                <div style={{ marginTop: '-25px' }}>
>>>>>>> 9629552b2eb794509dec85191762569b0b951f96
                    <SuccessStory />
                </div>
            </div>
        </div>
    );
};

export default SuccessList;