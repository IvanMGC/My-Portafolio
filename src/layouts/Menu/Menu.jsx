import ButtonSetMenu from '../../components/ButtonSetMenu/ButtonSetMenu';
import Photo from '../../components/Photo/Photo';
import './styles.scss';

export default function PaginationMenu(){
    return(
        <div id='pagination-menu'>
            <Photo />
            <ButtonSetMenu />
        </div>
    )
}