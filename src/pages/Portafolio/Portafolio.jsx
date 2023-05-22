import { Outlet } from 'react-router-dom';
import './styles.scss';
import ButtonSetPortafolio from '../../layouts/ButtonSetPortafolio/ButtonSetPortafolio';
import SubTitle from '../../components/SubTitle/SubTitle';

import { useFilterProjectLevel } from '../../utils/hooks/useFilterProjectLevel';

export default function Portafolio(){
    const {titleProjectLevel, numberProjectsLevel} = useFilterProjectLevel();

    return(
        <div id='portafolio'>
            <ButtonSetPortafolio />
            <section>
                <SubTitle subTitle={`${titleProjectLevel()} (${numberProjectsLevel()})`} />
                <div id='project-container'>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}