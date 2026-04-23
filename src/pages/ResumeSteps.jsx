import React from 'react'
import { IoIosDocument } from "react-icons/io";
import { Link } from 'react-router-dom';
import { FaFileDownload } from "react-icons/fa";



function ResumeSteps() {
  return (
    <div className='my-5'>
      
      <h1 className='text-center'>Create a job winning Resume in Minutes</h1>
    <div className='container my-5'>
      <div className='row'>
        <div className='col-md-2'></div>
        <div className='col-md-4 rounded p-5 shadow mb-3 text-center'>
          <IoIosDocument className='fs-1 text-primary mb-3'/>
          <h4>Add your Information</h4>
          <p>Add pre written examples to each section</p>
          <h5>Step1</h5>

        </div>
                <div className='col-md-1'></div>
        <div className='col-md-4 rounded p-5 shadow mb-3 text-center'>
          <FaFileDownload className='fs-1 text-danger mb-3'/>
          <h4>Download your resume</h4>
          <p>Add pre written examples to each section</p>
          <h5>Step 2</h5>
        </div>
        <div className='col-md-1'></div>
        <div className='text-center mt-5'>
          <Link to={'/form'} className='btn text-light' style={{backgroundColor:"blue"}}>Lets start</Link>
        </div>


    
      </div>

    </div>
    </div>
  )
}

export default ResumeSteps