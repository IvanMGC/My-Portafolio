import Paragraph from '../../components/Paragraph/Paragraph';
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import ImageSectionTecnology from '../../layouts/ImageSectionTecnology/ImageSectionTecnology';
import './styles.scss'
import ButtonLink from "../../components/ButtonLink/ButtonLink";
import DownloadButton from "../../components/DownloadButton/DownloadButton";
import { DownloadCV } from "../../utils/functions/DownloadCV";
import ImgcPersonProgramming from "../../assets/Images/ImgcPersonProgramming";

export default function Home(){

    const txtParagraph = "Egresado y con Bachiller en Ingeniería de Sistemas 2022. Actualmente me encuentro especializandome como desarrollador Front end siguiendo la ruta MERN.";
    return(
        <>
            <section id="presentation-content">
              <div className="infor">
                  <Title title={"Ivan Garcia"} />
                  <SubTitle subTitle={"Desarrollador Web"} />
                  <Paragraph text={txtParagraph} /
                  >
                  <div className="button-set">
                      <ButtonLink classBtn={"button-general"} route={'/about'} text={'Más sobre mi'} /> 
                      <DownloadButton click={()=>DownloadCV()} classBtn={"button-general"} text={'Mi CV'}/>
                  </div> 
                </div>
                <div className="img-person">
                  <ImgcPersonProgramming />
                </div>              
            </section>
            <section>
                <SubTitle styles={{textAlign:"center"}} subTitle={"Mis habilidades y conocimientos"} />
                <ImageSectionTecnology />
            </section>
        </>
    )
}