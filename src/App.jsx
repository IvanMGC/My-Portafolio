import { useEffect, useState } from "react";
import RouterMobile from "./routes/RouterMobile";

export default function App(){
    const [width, setWidth] = useState(window.innerWidth);
    //const [heigth, setHeigth] = useState(window.innerHeight);
  
    const changeSize = () =>{
      setWidth(window.innerWidth);
      //setHeigth(window.innerHeight);
    }
  
    useEffect(()=>{
      window.addEventListener('resize',changeSize);
      return()=>{
        window.removeEventListener('resize',changeSize);
      }
    });
  
    return(
      <>
        {(width >= 744)?<h1>Modo Tablet y Desktop</h1>:<RouterMobile/>}
      </>
    )
  
  }