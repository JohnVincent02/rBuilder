import React, { useEffect, useState } from 'react'
import { FaBackward } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

import { Link } from 'react-router-dom';
import { deleteDownloadResumeAPI, getDownloadResumeAPI } from '../services/allResumeApiService';


function Downloads() {

  const [allDownloads, setAllDownloads] = useState([])
  console.log(allDownloads);

  useEffect(()=>{
    getAllDownloads()
  },[])

  const getAllDownloads = async ()=>{
    const result = await getDownloadResumeAPI()
    if(result.status==200){
      setAllDownloads(result.data)
    }
   }

   const removeDownload = async(id)=>{
    await deleteDownloadResumeAPI(id)
    getAllDownloads()
   }
  
  return (
    <div className='container'>
      <div className='d-flex my-5 justify-content-center align-items-center'>
        <h1>Download Resume History</h1>
<Link to = {'/form'}><FaBackward />Back</Link>
      </div>
      <div className='row mb-5'>
        {
          allDownloads?.length>0?
          allDownloads?.map(resume=>(
               <div key={resume?.id}className='col-lg-4'>
          <div style={{height:'400px'}} className='shadow p-3 rounded'>
            <div className='d-flex justify-content-between align-items-center'>
              <h5>Reviewed At:{resume.timeStamp}</h5>
              <button  onClick={()=>removeDownload(resume?.id)} className='btn fs-5 text-danger'><MdDelete /></button>
            </div>
            <div className='mt-3 text-center'>
    
              <Link to={`/resume/${resume?.resumeId}/view`}><img height={'300px'} width={'200px' }src={resume?.resumeImg}  alt="" /></Link>
            </div>
          </div>
        </div>
          ))
          :
          
<div className='text-center fw-bolder my-5'>No resumes</div>
         
        }
  





      </div>
    </div>
  )
}

export default Downloads