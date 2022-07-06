import React from 'react'
import "./Cv.css";
import Axios from "axios";
import FileDownload from "js-file-download";

const Cv = () => {

    const downloads = (e) => {
        e.preventDefault()
        Axios({
            url:"http://localhost:5000",
            method:"GET",
            responseType:"blob"
        }).then((res)=>{
            console.log(res);
            FileDownload(res.data,"downloaded.pdf")
        })
    }
  return (
    <div className="btn-cv"> 
        <button className="resume" onClick={(e)=>downloads(e)}>Download CV</button>
    </div>
  )
}

export default Cv