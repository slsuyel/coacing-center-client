import React from 'react';
import { Link } from 'react-router-dom';
import SuccessStory from '../../home/SuccessStory';

const SuccessList = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <Link to='/dashboard/success/add' className='btn fw-medium ms-3 mt-3  rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> গল্প যোগ করুনঃ </Link>

                <div style={{ marginTop: '-25px' }}>
                    <SuccessStory />
                </div>
            </div>
        </div>
    );
};

export default SuccessList;