import React from "react";
import UserInputs from './UserInputs'
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";

function Preview({resumeData}) {
  return (
    <div className="p-5 m-5 w-100 border border-shadow">
      <h2>{resumeData?.fullName}</h2>
      <p className="fs-6">Phone:{resumeData?.phone}</p>
      <p className="fs-6">Email:{resumeData?.email}</p>
      <p className="fs-6">
        LinkedIn:<a href={resumeData?.linkedin}>{resumeData?.linkedin}</a>
      </p>
      <p className="fs-6">
        GitHub:<a href={resumeData?.github}>{resumeData?.github}</a>
      </p>
      <p className="fs-6">Location:{resumeData?.location}</p>
      <Divider className="bg-dark" />
      <h4 className="mt-3">Professional Summary</h4>
      <p>{resumeData?.summary}</p>
      <Divider className="bg-dark my-3" />
      <h4 className="mt-3">Technical Skills</h4>
      {/*duplicate user skill */}
{
  resumeData?.skills?.map((item, index)=>(
          <Button className='m-2' key={index} variant="outlined">{item}</Button>

  ))
}
      <Divider className="bg-dark my-3" />
      <h4>Education</h4>
      <p className="fs-6">
        bachelor's degree<b>{resumeData?.degree}</b>
      </p>
      <p className="fs-6">university/collegename:{resumeData?.university}</p>
      <p className="fs-6">Year of graduation:{resumeData?.passOut}</p>
      <Divider className="bg-dark my-3" />
    </div>
  );
}

export default Preview;
