import React, { useState,useEffect } from "react";
import axios from "axios";
import ImagePopUp from "../components/imagepopup";
import "./wallgallary.css";

const Wallgallary = () => {
    const [images,setImages] = useState([]);
    const [data,setData] = useState();
    const [showimg, setShowImg]= useState(false);

useEffect(() => {
    axios
      .get("http://www.mocky.io/v2/5ecb5c353000008f00ddd5a0")
      .then((response) => setImages(response.data))
      .catch((error) => console.log(error));
  }, []);

const Showimage =(imgsrc)=>{
  setShowImg(true);
  setData(imgsrc);
  }

  const Hideimage = () =>{
    setShowImg(false);
  }
  
return (
    <>
    { showimg ? <ImagePopUp show={data} click={Hideimage} /> : null } 
     
    { showimg === false ?
        images.map((info) => (
        <div onClick={ () => Showimage(info.urls.thumb)} >
        <img className="images" key={info.id} src={info.urls.thumb} alt="image"/>
        </div> 
        )) : null
    }    
    </>
  );
};
export default Wallgallary;
