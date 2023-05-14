import ButtonMenu from '../ButtonMenu/ButtonMenu';
import PropTypes from 'prop-types';

import './styles.scss';

export default function ButtonSetMenu({click}){
    return(
        <div className='button-set-menu'>
            <ButtonMenu click={click} route={'/'} text={'Inicio'} />
            <ButtonMenu click={click} route={'/about'} text={'Sobre mi'} />
            <ButtonMenu click={click} route={'/portafolio'} text={'Portafolio'} />
            <ButtonMenu route={'#'} text={'Mi CV'} />
        </div>
    )
}

ButtonSetMenu.propTypes = {
    click: PropTypes.func,
}