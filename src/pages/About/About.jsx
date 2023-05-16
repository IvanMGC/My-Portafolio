import Paragraph from '../../components/Paragraph/Paragraph';
import Title from '../../components/Title/Title';

import './styles.scss';

export default function About(){

    return(
        <>
            <div>
                <Paragraph text={"!Hola!, mi nombre es  Ivan Mauri Garcia Callirgos, tengo 23 años de edad, resido en Lima - Callao Perú. Soy egresado con bachiller en Ingeniería de Sistemas en la Universidad César Vallejo 2022."} />
                <Paragraph text={"Tengo interés y pasión por el desarrollo Web. Actualmente me estoy especializando de manera autodidacta como Front end siguiendo la ruta MERN."} />
            </div>
            <section>
                <Title title={"Timeline de mi vida"} />
                <Paragraph text={"En proceso.."} />
            </section>
        </>
    )
}