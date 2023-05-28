//Apps
import CalculatorBase from "../../App/Calculator/Calculator";
import AppAccountant from "../../App/Accountant/Accountant";
import AppChronometer from "../../App/Chronometer/Chronometer";
import AppDigitalClock from "../../App/DigitalClock/DigitalClock";
import AppSlider from "../../App/Slider/Slider";

//Images
import calculator from '../../assets/Images/calculator.jpg';
import chronometer from '../../assets/Images/chronometer.jpg';
import accountant from '../../assets/Images/accountant.jpg';
import relojDigital from '../../assets/Images/reloj-digital.jpg';
import slider from '../../assets/Images/slider.jpg';
import portafolio from '../../assets/Images/portafolio.jpg';
import eCommerce from '../../assets/Images/ImagesE-Commerce+RA.jpg'

//Functions
import { removeAccents } from "./removeAccents";

const dataProjects = [
    {id:1,name:"Calculadora",description: "Hecho con React, Sass y HTML5.", nivel:"Básico",project:<CalculatorBase />, link:"",img:calculator,},
    {id:2,name:"Contador",description: "Hecho con React, Sass y HTML5.", nivel:"Básico",project:<AppAccountant />, link:"",img:accountant,},
    {id:3,name:"Cronómetro",description: "Hecho con React, Sass y HTML5.", nivel:"Básico",project:<AppChronometer />, link:"",img:chronometer,},
    {id:4,name:"Reloj Digital",description: "Hecho con React, Sass y HTML5.", nivel:"Básico",project:<AppDigitalClock />, link:"",img:relojDigital,},
    {id:5,name:"Slider",description: "Hecho con React, Sass y HTML5.", nivel:"Básico",project:<AppSlider />, link:"",img:slider,},
    {id:6,name:"Portafolio",description:"Hecho en Figma, React, Sass, HTML5",nivel:"Intermedio", project:null,link:"https://www.figma.com/file/6T0WxkXDCSMXplkTL2Lybr/Untitled?type=design&node-id=0%3A1&t=HGhSkGQWu57PLelj-1",img:portafolio},
    {id:7,name:"E-Commerce + RA",description:"Hecho en WordPress, utilizando plugins, hosting SiteGround, JavaScript, HTML, CSS y Blender3D",nivel:"Intermedio", project:null,link:"https://recifejeansoficial.com/",img:eCommerce},

];

export function getProjects(){
    return dataProjects;
}

export function getNumLevelsProjects(){
    let levels = {basico:0,intermedio:0,avanzado:0};

    dataProjects.forEach(element => {
        levels[removeAccents(element.nivel.toLowerCase())]++;
    });
    return levels;
}
