import React from 'react';
import Teacher from './Teacher';
import { Link } from 'react-router-dom';

const TeacherList = () => {
    return (
        <div className='content-wrapper'>
            <div className='content-header'>

                <Link to='/dashboard/teacher/add' className='btn fw-medium ms-3 mt-3  rounded-1 text-white' style={{ backgroundColor: '#160295' }}><i className="fa-solid fa-file-circle-plus"></i> নতুন শিক্ষক যোগ করুনঃ </Link>

                <div style={{ marginTop: '-25px' }}>
                    <Teacher />
                </div>
            </div>
        </div>
    );
};

export default TeacherList;