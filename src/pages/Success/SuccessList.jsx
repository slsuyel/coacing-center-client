import React from 'react';
import { Link } from 'react-router-dom';
import SuccessStory from '../../home/SuccessStory';

const SuccessList = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <div className='mt-4'>
                    <Link to='/dashboard/success/add' className='fw-medium p-1 px-2 rounded-1 text-decoration-none text-white ' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> গল্প যোগ করুনঃ </Link>
                    </div>

                <div >


                    <span  className='  mt-3 '></span> 

                    <div >
                        <SuccessStory />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SuccessList;