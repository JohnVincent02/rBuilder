import React, { useState } from 'react'
import UserInputs from './components/UserInputs'
import Preview from './components/Preview'


function UserForm() {

  const [resumeData, setResumeData]=useState({
  fullName:"",
  email:"",
  location:"",
  job:"",
  phone:"",
  linkedin:"",
  github:"",
  degree:"",
  university:"",
  passOut:"",
  skills:[],
  summary:"",

  })
 
  
  return (
    <div className='container my-5'>
      <div className='row'>
        <div className='col-lg-6'>
          <UserInputs resumeData={resumeData} setResumeData={setResumeData}/>
        </div>
         <div className='col-lg-6'>
        {resumeData.fullName && <Preview resumeData={resumeData} />}
        </div>
        <div className='col-lg-6'>
       
        </div>
      </div>
    </div>
  )
}

export default UserForm