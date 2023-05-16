import { Outlet } from 'react-router-dom';
import './styles.scss';
import ButtonSetPortafolio from '../../layouts/ButtonSetPortafolio/ButtonSetPortafolio';
import SubTitle from '../../components/SubTitle/SubTitle';

export default function Portafolio(){
    return(
        <div id='portafolio'>
            <ButtonSetPortafolio />
            <section>
                <SubTitle styles={{textAlign:"center"}} subTitle={"Mis proyectos"} />
                <div className='project-container'>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}