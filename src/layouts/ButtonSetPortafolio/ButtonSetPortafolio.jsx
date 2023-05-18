import { useState } from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import './styles.scss';
import { useLocation } from 'react-router-dom';

const linkArr = [
    {id:1, link: "/portafolio/basico", name: "Básico"},
    {id:2, link: "/portafolio/intermedio", name: "Intermedio"},
    {id:3, link: "/portafolio/avanzado", name: "Avanzado"},
];

export default function ButtonSetPortafolio(){
    const [idLink,setIdLink] = useState(1);
    const location = useLocation().pathname;
    
    const filterPage = () =>{
        const pageNames = {
            "/":"Inicio",
            "/about":"Sobre mi",
            "/portafolio":"Portafolio",
        };
        let route = "";
        for(const prop in pageNames){
            if(location.includes(prop)){
                route=prop;
            }
        }
        return pageNames[route];
    }


    const changeId =(id)=>{
        setIdLink(id);
    }

    const styles = {
        pointerEvent: "none",
        background: "#F7DF1E",
        color:"black",
        padding: "5px 9px",
        transition: "all .2s",
    }

    return(
        <div id='button-set-portafolio'>
            {linkArr.map(element => (idLink === element.id) ? <ButtonLink styles={styles} key={element.id} click={()=>changeId(element.id)} classBtn={"button-portafolio"} route={element.link} text={element.name} />:<ButtonLink key={element.id} click={()=>changeId(element.id)} classBtn={"button-portafolio"} route={element.link} text={element.name} /> )}
        </div>
    )
}
