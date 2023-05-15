import Paragraph from '../../components/Paragraph/Paragraph';
import SubTitle from '../../components/SubTitle/SubTitle'
import Title from '../../components/Title/Title'
import ImageSectionTecnology from '../../layouts/ImageSectionTecnology/ImageSectionTecnology';
import './styles.scss'

export default function Home(){
    const txtParagraph = "Egresado y con Bachiller en Ingeniería de Sistemas 2022. Actualmente me encuentro especializandome como desarrollador Front end siguiendo la ruta MERN.";
    return(
        <>
            <section>
                    <Title title={"Ivan Garcia"} />
                    <SubTitle subTitle={"Desarrollador Web"} />
                    <Paragraph text={txtParagraph} />                
            </section>
            <section>
                <SubTitle styles={{textAlign:"center"}} subTitle={"Mis habilidades y conocimientos"} />
                <ImageSectionTecnology widthIcon={"41px"} />
            </section>
        </>
    )
}