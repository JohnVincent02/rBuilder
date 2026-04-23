import { editResumeAPI } from "../../services/allResumeApiService";
import React, { useState, useRef } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { RiFileEditFill } from "react-icons/ri";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import { HiOutlineXMark } from "react-icons/hi2";
import jobTypes from "../../assets/jobRole.json";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  maxHeight: "80vh",
  overflowY: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function Edit({ resumeData, setResumeData }) {
  const skillRef = useRef()
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  console.log(resumeData);


  const removeSkill = (skill)=>{
    setResumeData({...resumeData,skills:resumeData?. skills?.filter(item=>item!=skill)})
  }

  const addSkill = (skill)=>{
    if(skill){
      if(resumeData?.skills?.map(item=>item.toLowerCase())?.includes(skill.toLowerCase())){
        alert("Alreay added")
      }
      else{
        setResumeData({...resumeData,skills:[...resumeData?.skills,skill]})
      }
      skillRef.current.value = ""
    }else{
      alert("Input valid skill")
    }
  }

  
  const handleEditResume = async() =>{
     const {fullName, email, location, job, phone, linkedin, github, degree, university, passOut,skills,
      summary}= resumeData 
    
    
      if(fullName && location && job && email && phone && linkedin && github && degree && university && passOut && skills.length>0 && summary)
    {
        // api call
       
    
        const response = await editResumeAPI(resumeData?.id,resumeData)
        console.log(response);
    
        if(response.status==200){
          alert("resume updated successfully")
         handleClose()
        }
      }else{
          alert("please fill the foem completely")
        }
  }

  return (
    <div>
      <Button onClick={handleOpen} className="btn text-warning fs-2 me-2">
        <RiFileEditFill />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Resume Details
          </Typography>
          <Box id="modal-modal-description" sx={{ mt: 2 }}>
            {/* basic details */}
            <div>
              <h3>Personal Details</h3>
              <div className="p-3 row">
                <TextField
                  value={resumeData.fullName}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, fullName: e.target.value })
                  }
                  id="standard-basic-name"
                  label="Full Name"
                  variant="standard"
                />
                <TextField
                  value={resumeData.location}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, location: e.target.value })
                  }
                  id="standard-basic-location"
                  label="Location"
                  variant="standard"
                />
                <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
                  <InputLabel id="demo-simple-select-standard-label">
                    Job Role
                  </InputLabel>
                  <Select
                    onChange={(e) =>
                      setResumeData({ ...resumeData, job: e.target.value })
                    }
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    label="job"
                    value={resumeData?.job}
                  >
                    {jobTypes.jobRoles.map((role) => (
                      <MenuItem key={role} value={role}>
                        {role}
                      </MenuItem>
                    ))}

                    <MenuItem value={10}>Ten</MenuItem>
                  </Select>
                </FormControl>
              </div>
            </div>

            {/* contact */}

            <div>
              <h3>Contact Details</h3>

              <div className="p-3 row">
                <TextField
                  value={resumeData.email}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, email: e.target.value })
                  }
                  id="standard-email"
                  label="Email"
                  variant="standard"
                />
                <TextField
                  value={resumeData.phone}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, phone: e.target.value })
                  }
                  id="standard-phone"
                  label="Contact"
                  variant="standard"
                />
                <TextField
                  value={resumeData.linkedin}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, linkedin: e.target.value })
                  }
                  id="standard-linkedin"
                  label="LinkedIn"
                  variant="standard"
                />
                <TextField
                  value={resumeData.github}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, github: e.target.value })
                  }
                  id="standard-github"
                  label="GitHub"
                  variant="standard"
                />
              </div>
            </div>
            {/* education */}

            <div>
              <h3>Educational Details</h3>

              <div className="p-3 row">
                <TextField
                  value={resumeData.degree}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, degree: e.target.value })
                  }
                  Dataid="standard-email"
                  label="Bachelor's Degree"
                  variant="standard"
                />
                <TextField
                  value={resumeData.university}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, university: e.target.value })
                  }
                  id="standard-phone"
                  label="University"
                  variant="standard"
                />
                <TextField
                  value={resumeData.passOut}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, passOut: e.target.value })
                  }
                  id="standard-linkedin"
                  label="Year of Graduaution"
                  variant="standard"
                />
              </div>
            </div>
            {/* skills */}
            <div className="p-3 d-flex justify-content-between align-items-center ">
              <input ref={skillRef}
                type="text"
                placeholder="add skill"
                className="form-control"
              />
              <Button onClick={()=>addSkill(skillRef.current.value)} variant="text">ADD</Button>
            </div>
            <h4>Skills:</h4>
            {/* display all skills */}
            <div className="p-3 d-flex justify-content-between flex-wrap">
              {
                resumeData?.skills?.map(skill=>(
    <Button onClick={()=>removeSkill(skill)} key={skill} variant="contained" className="my-1">
              {skill}
                <HiOutlineXMark className="ms-1" />
              </Button>
                ))
              
              
              }
          
            </div>

            {/* summary */}

            <div>
              <h3>Summary</h3>
              <div className="p-3 row">
                <TextField
                  value={resumeData?.summary}
                  onChange={(e) =>
                    setResumeData({ ...resumeData, summary: e.target.value })
                  }
                  id="standard-basic-summary"
                  label="summary"
                  variant="standard"
                />
              </div>
            </div>
            {/* update */}
            <button onClick={handleEditResume} className="btn btn-primary">Update</button>
          </Box>
        </Box>
      </Modal>
    </div>
  );
}

export default Edit;

// import React from 'react'
// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
// import Typography from '@mui/material/Typography';
// import Modal from '@mui/material/Modal';
// import { RiFileEditFill } from "react-icons/ri";
// import { FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
// import { FaXmark } from "react-icons/fa6";
// import jobTypes from '../../assets/jobRole.json';

// const style = {
//     position: 'absolute',
//     top: '50%',
//     left: '50%',
//     transform: 'translate(-50%, -50%)',
//     width: 600,
//     maxHeight:'80vh',
//     overflowY:'auto',
//     bgcolor: 'background.paper',
//     border: '2px solid #000',
//     boxShadow: 24,
//     p: 4,
// };

// function Edit() {
//     const [open, setOpen] = React.useState(false);
//     const handleOpen = () => setOpen(true);
//     const handleClose = () => setOpen(false);

//     return (
//         <div>
//             <Button onClick={handleOpen} className="btn text-warning fs-2 me-2"> <RiFileEditFill /> </Button>
//             <Modal
//                 open={open}
//                 onClose={handleClose}
//                 aria-labelledby="modal-modal-title"
//                 aria-describedby="modal-modal-description"
//             >
//                 <Box sx={style}>
//                     <Typography id="modal-modal-title" variant="h6" component="h2">
//                         Edit Resume Details
//                     </Typography>
//                     <Box id="modal-modal-description" sx={{ mt: 2 }}>
//                         {/* basic details */}
//                         <div>
//                             <h3>Personal Details</h3>
//                           <div className='p-3 row'>
//                                  <TextField value={resumeData.fullName} onChange={e=>setResumeData({...resumeData, fullName:e.target.value})}id="standard-basic-name" label="Full Name" variant="standard" />
//                                  <TextField value={resumeData.location} onChange={e=>setResumeData({...resumeData, location:e.target.value})}id="standard-basic-location" label="Location" variant="standard" />
//                                   <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
//                          <InputLabel id="demo-simple-select-standard-label">Job Role</InputLabel>
//                          <Select
//                            onChange={e=>setResumeData({...resumeData, job:e.target.value})} labelId="demo-simple-select-standard-label"
//                            id="demo-simple-select-standard"

//                            label="job"
//                            value={resumeData?.job}
//                          >
//                           {
//                            jobTypes.jobRoles.map(role=>(
//                              <MenuItem key={role} value={role}>{role}</MenuItem>
//                            ))
//                          }

//                            <MenuItem value={10}>Ten</MenuItem>

//                          </Select>
//                        </FormControl>
//                              </div>
//                         </div>
//                         {/* contact details */}
//                         <div>
//                             <h3>Contact Details</h3>
//                                   <div className='p-3 row'>
//                                            <TextField value={resumeData.email} onChange={e=>setResumeData({...resumeData, email:e.target.value})} id="standard-email" label="Email" variant="standard" />
//                                            <TextField value={resumeData.phone} onChange={e=>setResumeData({...resumeData, phone:e.target.value})} id="standard-phone" label="Contact" variant="standard" />
//                                            <TextField value={resumeData.linkedin} onChange={e=>setResumeData({...resumeData, linkedin:e.target.value})}id="standard-linkedin" label="LinkedIn" variant="standard" />
//                                            <TextField value={resumeData.github} onChange={e=>setResumeData({...resumeData, github:e.target.value})}id="standard-github" label="GitHub" variant="standard" />

//                                                                          </div>
//                         </div>
//                         {/* education */}
//                         <div>
//                             <h3>Educational Details</h3>
//                                   <div className='p-3 row'>
//                                      <TextField  value={resumeData.degree} onChange={e=>setResumeData({...resumeData,degree:e.target.value})} Dataid="standard-email" label="Bachelor's Degree" variant="standard" />
//                                      <TextField value={resumeData.university} onChange={e=>setResumeData({...resumeData,university:e.target.value})}id="standard-phone" label="University" variant="standard" />
//                                      <TextField value={resumeData.passOut} onChange={e=>setResumeData({...resumeData,passOut:e.target.value})} id="standard-linkedin" label="Year of Graduaution" variant="standard" />

//                                                                    </div>
//                         </div>
//                         {/* skills */}
//                         <div>
//                             <h3>Skills</h3>
//                             <div className='p-3 d-flex justify-content-between align-items-center'>
//                                 <input type="text" placeholder='Add skill' className='form-control' />
//                                 <Button variant='text'>Add</Button>
//                             </div>
//                             <h5>Added Skills : </h5>
//                             {/* display all skills */}
//                             <div className='p-3 d-flex justify-content-between flex-wrap'>
//                                 <Button variant='contained' className='my-1'>skill <FaXmark className='ms-1' /> </Button>
//                             </div>
//                         </div>
//                         {/* summary */}
//                          <div>
//                             <h3>Summary</h3>
//                             <div className='p-3 row'>
//                           <TextField id="standard-basic-summery" label="summery" multiline variant="standard" />
//                             </div>
//                             </div>
//                             {/* update */}
//                             <button className='btn btn-primary'>Update</button>
//                     </Box>
//                 </Box>
//             </Modal>
//         </div>
//     );
// }

// export default Edit
