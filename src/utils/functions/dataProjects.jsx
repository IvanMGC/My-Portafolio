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

const dataProjects = [
    {id:1,name:"Calculadora",description: "React, Sass, HTML5", nivel:"Basico",project:<CalculatorBase />, link:"",img:calculator,},
    {id:2,name:"Contador",description: "React, Sass, HTML5", nivel:"Basico",project:<AppAccountant />, link:"",img:accountant,},
    {id:3,name:"Cronometro",description: "React, Sass, HTML5", nivel:"Basico",project:<AppChronometer />, link:"",img:chronometer,},
    {id:4,name:"Reloj Digital",description: "React, Sass, HTML5", nivel:"Basico",project:<AppDigitalClock />, link:"",img:relojDigital,},
    {id:5,name:"Slider",description: "React, Sass, HTML5", nivel:"Basico",project:<AppSlider />, link:"",img:slider,},
];

export function getProjects(){
    return dataProjects;
}

export function getNumLevelsProjects(){
    let levels = {basico:0,intermedio:0,avanzado:0};

    dataProjects.forEach(element => {
        levels[element.nivel.toLowerCase()]++;
    });
    return levels;
}
