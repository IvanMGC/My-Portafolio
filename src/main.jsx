import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import RouterMobile from './routes/Router';

function Apps(){
  const [width, setWidth] = useState(window.innerWidth);
  
    const changeSize = () =>{
      setWidth(window.innerWidth);
    }
  
    useEffect(()=>{
      window.addEventListener('resize',changeSize);
      return()=>{
        window.removeEventListener('resize',changeSize);
      }
    });

    return(
      <RouterMobile windowSize={width} />
    )

}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Apps />
  </React.StrictMode>,
)
