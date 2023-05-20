//Hooks
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';

//Components
import ButtonLink from '../../components/ButtonLink/ButtonLink';

//Style
import './styles.scss';



//Functions
import { removeAccents } from '../../utils/functions/removeAccents';


const linkArr = [
    {id:1, name: "Básico"},
    {id:2, name: "Intermedio"},
    {id:3, name: "Avanzado"},
];

export default function ButtonSetPortafolio(){
    const location = useLocation().pathname;
    const [idLink,setIdLink] = useState(linkArr.find(element => location.includes(`/portafolio/${removeAccents(element.name.toLowerCase())}`)).id);
    

    const changeId = (id) => {
        setIdLink(id);
    }

    useEffect(()=>{
        setIdLink(linkArr.find(element => location.includes(`/portafolio/${removeAccents(element.name.toLowerCase())}`)).id)
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
            {linkArr.map(element => (idLink === element.id) ? <ButtonLink styles={styles} key={element.id} classBtn={"button-portafolio"} route={`/portafolio/${removeAccents(element.name.toLowerCase())}`} text={element.name} />:<ButtonLink key={element.id} click={()=>changeId(element.id)} classBtn={"button-portafolio"} route={`/portafolio/${removeAccents(element.name.toLowerCase())}`} text={element.name} /> )}
        </div>
    )
}
