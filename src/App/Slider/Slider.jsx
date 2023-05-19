import './styles.scss';
import sliderImg1 from '../../assets/Images/slider-img-1.jpg';
import sliderImg2 from '../../assets/Images/slider-img-2.jpg';
import sliderImg3 from '../../assets/Images/slider-img-3.jpg';
import sliderImg4 from '../../assets/Images/slider-img-4.jpg';
import ImgcKeyboardArrowLeft from '../../assets/Icons/ImgcKeyboardArrowLeft';
import ImgcKeyboardArrowRight from '../../assets/Icons/ImgcKeyboardArrowRight';

import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />


const CircleButtonSlider = ({data,click, id}) => {
    const obj = {
        backgroundColor: "#F7DF1E",
        boxShadow: "0 0 15px #F7DF1E"
    }
    return(
        <div id='box-btn-cs'>
            <div className='buttons-cs'>
                {data.map((e,i)=>(id === i)?<button style={obj} key={e.img} onClick={()=>click(i)} className='btn-circle-slider'/>:<button key={e.img} onClick={()=>click(i)} className='btn-circle-slider'/>)}
            </div>
        </div>
    )
}

const ArrowButtonSlider = ({img,click}) => {
    return(
        <button onClick={()=>click()} className='btn-arrow-slider'>
            {img}
        </button>
    )
}

const ShowImagesSlider = ({picture}) => {
    return(
        <img className="img-slider" src={picture[0].img} alt={picture[0].alt}/>
    )
}

const AppSlider = ({imgs}) => {
    const [indexImg, setIndexImg] = useState(0);

    const incrementIndex = () =>{
        if(indexImg === imgs.length - 1){
            setIndexImg(0);
        }else{
            setIndexImg(indexImg+1);
        }
    }

    const decrementIndex = () =>{
        if(indexImg === 0){
            setIndexImg(imgs.length - 1);
        }else{
            setIndexImg(indexImg-1);
        }
    }
    
    const filterImg = imgs.filter((e,i)=>indexImg===i);

    useEffect(()=>{
        const id = setInterval((incrementIndex),4000);
        return ()=>clearInterval(id);
    },[indexImg]);

    return(
        <div id='content-app-slider'>
            <div id='content-box-slider'>
                <div className='images-slider'>
                    <ShowImagesSlider picture={filterImg}/>
                </div>
                <div id='button-row-slider'>
                    <ArrowButtonSlider img={<ImgcKeyboardArrowLeft className="btn" />} click={()=>{decrementIndex()}}/>
                    <ArrowButtonSlider img={<ImgcKeyboardArrowRight className="btn" />} click={()=>{incrementIndex()}}/>
                </div>
                <CircleButtonSlider click={(i)=>{setIndexImg(i)}} data={imgs} id={indexImg}/>
            </div>           
        </div>
    )
}

const IMAGESLIDER = [
    {img:sliderImg1, alt:"This is a drawing inspired by nature out of the ordinary, since you can see a planet"},
    {img:sliderImg2, alt:"This is a drawing inspired by nature at nightfall out of the ordinary, since you can see a planet"},
    {img:sliderImg3, alt:"This is a beautiful drawing inspired by nature at dusk"},
    {img:sliderImg4, alt:"This is an elegant drawing inspired by nature at night."}
];

export default function App(){
    return <AppSlider imgs={IMAGESLIDER}/>
}

CircleButtonSlider.propTypes = {
	data: PropTypes.array,
	click: PropTypes.func,
	id: PropTypes.number,
}

ArrowButtonSlider.propTypes = {
	img: PropTypes.object,
	click: PropTypes.func,
}

ShowImagesSlider.propTypes = {
	picture: PropTypes.array,
}

AppSlider.propTypes = {
	imgs: PropTypes.array,
}
