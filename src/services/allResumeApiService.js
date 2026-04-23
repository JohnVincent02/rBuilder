import apiService from "../api/apiService"

// add api call by userinput

export const addResumeAPI = async (resumeData)=>{
    return await apiService("POST",'/allResumes',resumeData)
}


// get resume api call by viewResume api
export const  getResumeAPI = async(id)=>{
    return await apiService("GET",`/allResumes/${id}`,{})
}

// add resume to download api call by viewresume when download button click

export const downloadResumeAPI = async(resumeData)=>{
    return await apiService("POST",`/downloads`,resumeData)
}

// get all download resume api call by downloads when page loads

export const getDownloadResumeAPI = async(resumeData)=>{
    return await apiService("GET",`/downloads`,{})
}

// delete selected download resumes api call by downloads when clicked on delete button

export const deleteDownloadResumeAPI = async(resumeId)=>{
    return await apiService("DELETE",`/downloads/${resumeId}`,{})
}

// edit resumes api call by edit when clicked on update button

export const editResumeAPI = async (id,updateDetails)=>{
    return await apiService("PUT",`/allResumes/${id}`,updateDetails)
}


