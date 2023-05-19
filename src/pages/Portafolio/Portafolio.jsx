import { Outlet } from 'react-router-dom';
import './styles.scss';
import ButtonSetPortafolio from '../../layouts/ButtonSetPortafolio/ButtonSetPortafolio';
import SubTitle from '../../components/SubTitle/SubTitle';

import { useFilterLevelProject } from '../../utils/hooks/useFilterLevelProject';

export default function Portafolio(){
    const filterLevel = useFilterLevelProject();

    return(
        <div id='portafolio'>
            <ButtonSetPortafolio />
            <section>
                <SubTitle styles={{textAlign:"center"}} subTitle={filterLevel} />
                <div id='project-container'>
                    <Outlet />
                </div>
            </section>
        </div>
    )
}