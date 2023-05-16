import ButtonLink from '../ButtonLink/ButtonLink';
import PropTypes from 'prop-types';

import './styles.scss';

export default function ButtonSetMenu({click}){
    const stringClass = "button-menu";
    return(
        <div className='button-set-menu'>
            <ButtonLink classBtn={stringClass} click={click} route={'/'} text={'Inicio'} />
            <ButtonLink classBtn={stringClass} click={click} route={'/about'} text={'Sobre mi'} />
            <ButtonLink classBtn={stringClass} click={click} route={'/portafolio/basico'} text={'Portafolio'} />
            <ButtonLink classBtn={stringClass} route={'#'} text={'Mi CV'} />
        </div>
    )
}

ButtonSetMenu.propTypes = {
    click: PropTypes.func,
}