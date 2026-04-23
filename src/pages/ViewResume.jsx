import React, { useRef } from "react";
import { FaFileDownload } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { FaBackward } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Preview from "./components/Preview";
import Edit from "./components/Edit";
import { useEffect, useState } from "react";
import html2canvas from "html2canvas";
import jspdf from "jspdf";
import { downloadResumeAPI, getResumeAPI } from "../services/allResumeApiService";

function ViewResume() {
  const {id}=useParams()
  console.log(id);
  const [resumeData, setResumeData]=useState({}) 
  console.log(resumeData);
  const previewRef = useRef()

  useEffect(()=>{
    getResumeDetails()},[])
  

    const getResumeDetails = async()=>{
      if(id){
        const result = await getResumeAPI(id)
        setResumeData(result.data)
      }
    }



    const downloadResume = async()=>{
       const previewTag = previewRef.current
  const canvas=await html2canvas(previewTag, {

 
    
    // reduce the quality(default 2)
    scale:1
  })
  // compress
  const imgData = canvas.toDataURL("image/jpeg",0.7)
    generatePDF(imgData)
  
    


  // canvas.toBlob(blob=>{
  //   const shortURL = URL.createObjectURL(blob)
  //   generatePDF(shortURL)
  // })
}
  


  // get time of download 

  const generatePDF = async(resumeImg)=>{
    // get time of download
    const today= new Date()
  
  const timeStamp = `${today.toLocaleDateString()}, ${today.toLocaleTimeString()}`

  // create PDF object

  const pdf = new jspdf()
  const imgWidth = pdf.internal.pageSize.getWidth()
    const imgHeight = pdf.internal.pageSize.getHeight()
    pdf.addImage(resumeImg,'JPEG',0,0,imgWidth,imgHeight)
    const downloadDetails={
      timeStamp,resumeId:id, resumeImg
    }

    // api call

    const result  = await downloadResumeAPI(downloadDetails)
    console.log(result);
    if(result.status==201){
      alert("resume download successfully")
  }
  }

  return (
    <div className="container">
      <div className="row my-2">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          {/* set icons */}
          {/* downloads */}
          <div className="d-flex justify-content-center align-items-center">
            <button  onClick={downloadResume} className="btn txt-primary fs-2 me-2">
           <FaFileDownload />
             </button> 
            
            
            <Edit resumeData ={resumeData} setResumeData={setResumeData}/>
             {/* History */}
            <Link to={"/downloads"} className="btn text-danger fs-2 me-2">
              <FaHistory />
             </Link>
             {/* back */}
            <Link to={"/form"} className="btn text-success fs-2 me-2"> 
              <FaBackward />
            </Link>
       
          </div>
          <div ref={previewRef} className="mt-5"><Preview resumeData={resumeData}/></div>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
}

export default ViewResume;
