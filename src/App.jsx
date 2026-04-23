import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import ResumeSteps from "./pages/ResumeSteps"
import UserForm from "./pages/UserForm"
import ViewResume from "./pages/ViewResume"
import Downloads from "./pages/Downloads"
import PageNotFound from "./pages/PageNotFound"
import Header from "./pages/components/Header"
import Footer from "./pages/components/Footer"


function App() {


  return (
    <>
  
    <Header/>
<Routes>
  <Route path="/" element={<Home/>}/>
    <Route path="/steps" element={<ResumeSteps/>}/>
      <Route path="/form" element={<UserForm/>}/>
  <Route path="/resume/:id/view" element={<ViewResume/>}/>
  <Route path="/downloads" element={<Downloads/>}/>
    <Route path="/*" element={<PageNotFound/>}/>
     
</Routes>
<Footer/>

  
    </>
  )
}

export default App
