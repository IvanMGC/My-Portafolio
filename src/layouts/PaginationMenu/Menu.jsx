import ButtonSetMenu from '../../components/ButtonSetMenu/ButtonSetMenu';
import Photo from '../../components/Photo/Photo';
import PropTypes from 'prop-types';

import './styles.scss';


export default function PaginationMenu({click}){
    return(
        <div id='pagination-menu'>
            <Photo />
            <ButtonSetMenu click={click}  />
        </div>
    )
}

PaginationMenu.propTypes = {
    click: PropTypes.func,
}