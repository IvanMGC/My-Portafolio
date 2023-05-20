import { useEffect, useState } from "react";
import Paragraph from '../../components/Paragraph/Paragraph';
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import ImageSectionTecnology from '../../layouts/ImageSectionTecnology/ImageSectionTecnology';
import './styles.scss'
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import { DownloadCV } from "../../utils/functions/DownloadCV";

export default function Home(){
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

    const txtParagraph = "Egresado y con Bachiller en Ingeniería de Sistemas 2022. Actualmente me encuentro especializandome como desarrollador Front end siguiendo la ruta MERN.";
    return(
        <>
            <section>
                <Title title={"Ivan Garcia"} />
                <SubTitle subTitle={"Desarrollador Web"} />
                <Paragraph text={txtParagraph} /
                >
                <div className="button-set">
                    <ButtonLink classBtn={"button-general"} route={'/about'} text={'Más sobre mi'} /> 
                    <DownloadButton click={()=>DownloadCV()} classBtn={"button-general"} text={'Mi CV'}/>
                </div>               
            </section>
            <section>
                <SubTitle styles={{textAlign:"center"}} subTitle={"Mis habilidades y conocimientos"} />
                <ImageSectionTecnology widthIcon={(width >= 443)? "55px":"41px"} />
            </section>
        </>
    )
}