import { useEffect, useState } from 'react';
import ButtonLink from '../../components/ButtonLink/ButtonLink';
import './styles.scss';
import { useLocation } from 'react-router-dom';

const linkArr = [
    {id:1, link: "/portafolio/essential", name: "Básico"},
    {id:2, link: "/portafolio/intermediate", name: "Intermedio"},
    {id:3, link: "/portafolio/advanced", name: "Avanzado"},
];

export default function ButtonSetPortafolio(){
    const location = useLocation().pathname;
    const [idLink,setIdLink] = useState(linkArr.find(element => location.includes(element.link)).id);
    

    const changeId = (id) => {
        setIdLink(id);
    }

    useEffect(()=>{
        setIdLink(linkArr.find(element => location.includes(element.link)).id)
    },[location])

    const styles = {
        pointerEvent: "none",
        background: "#F7DF1E",
        color:"black",
        padding: "5px 9px",
        transition: "all .2s",
    }

    return(
        <div id='button-set-portafolio'>
            {linkArr.map(element => (idLink === element.id) ? <ButtonLink styles={styles} key={element.id} click={()=>{changeId(element.id)}} classBtn={"button-portafolio"} route={element.link} text={element.name} />:<ButtonLink key={element.id} click={()=>changeId(element.id)} classBtn={"button-portafolio"} route={element.link} text={element.name} /> )}
        </div>
    )
}
