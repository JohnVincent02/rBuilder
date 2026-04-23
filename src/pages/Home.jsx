import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>

    {/* landing */}

    <div style={{height:"100vh", backgroundImage:'url("/landingpg.png")',backgroundSize:'cover',backgroundPosition:'center',backgroundAttachment:"fixed"}} className='d-flex justify-content-center align-items-center'>
    <div className='col-lg-4'></div>
    <div className='col-lg-4 rounded shadow p-5 text-center text-light' style={{backgroundColor:"rgba(180,180,180,0.5 )"}}>
        <h3>Designed to get hired.
            Your, Skills, your story, Your Next job -all in one
            <div className='mt-5'><Link to={'/steps'} className="btn text-light" style={{backgroundColor:"#a17f71"}}>make Your Resume</Link></div>
        </h3>


    </div>
    <div className='col-lg-4'></div>

    </div>
    {/* tools */}
    <div className='mt-5 d-flex justify-content-center'><h1 className='fw-bolder'>Tools</h1></div>
    <div className='container mt-5'>
        <div className="row">
            <div className="col-md-6 p-5">
                <h2>Resume</h2>
                <p>Create unlimited new resumes and easily them afterwards</p>
                <h2>Cover Letters</h2>
                <p>Easily write professional letters</p>
                <h2>Jobs</h2>
                <p>Automatically receives new and relevant job postings</p>
                <h2>Applcations</h2>
                <p>Effortlessely manage and track your job applications is an organized manner. </p>
            </div>
            <div className="col-md-6 p-5 ">
                <img src="./tools.jpg" width={'400px'} height={'400px'} alt="" />

    
            </div>
  </div>
</div>


    {/* image */}

    <div style={{height:"80vh", backgroundImage:'url("https://wallpaperaccess.com/full/4012650.jpg")',backgroundSize:'cover', 
        backgroundPosition:'center',backgroundAttachment:'fixed'
    }}></div>


    {/* testimony */}

    <div className='container mb-5'>
        <h1 className='text-center my-5'>Testimony</h1>
        <div className='row align-items-center'>
            <div className='col-lg-1'></div>
            <div className='col-lg-5'>
                <h5>Trust professional world wide</h5>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Placeat, quia ea iure odit explicabo provident natus esse modi a sint, reiciendis minus? Laborum qui maiores enim eius pariatur illum ad!
                Reiciendis, perspiciatis, consectetur impedit iusto in earum sequi dolore sit nam, doloremque quisquam pariatur nostrum recusandae? Dicta similique, optio molestias quaerat aliquam iste, quas obcaecati numquam, ipsam mollitia at ullam!
                Ipsa dolores vel quisquam odit magnam maxime perferendis corporis ducimus unde! Rem tempore earum eum placeat ipsam ex, quae deserunt ut sapiente inventore deleniti fuga illo molestias, impedit perferendis porro.
                Totam, libero quis. Saepe, temporibus at illum doloremque expedita veritatis fuga repellat quaerat rerum aut cum itaque porro praesentium repudiandae eius optio magnam voluptatibus sapiente perspiciatis modi deleniti sequi excepturi.
                Eaque impedit qui placeat quae labore similique assumenda. Facilis illum fuga ut, velit animi accusantium itaque excepturi nam obcaecati, esse sequi maxime? Magni at vel possimus totam. Nisi, ut ea.</p>
            </div>
            <div className='col-lg-1'></div>
            <div className='col-lg-5'>
                <div className='row'>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                    <div className='col-lg-3'>
                        <img className="w-100 p-2" src="https://giftkida.in/wp-content/uploads/2025/10/ChatGPT-Image-Oct-20-2025-08_49_20-AM-300x300.png" alt="" />
                    </div>
                  
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Home