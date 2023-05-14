import ButtonMenu from '../ButtonMenu/ButtonMenu'
import './styles.scss'

export default function ButtonSetMenu(){
    return(
        <div className='button-set-menu'>
            <ButtonMenu route={'#'} text={'Inicio'} />
            <ButtonMenu route={'#'} text={'Sobre mi'} />
            <ButtonMenu route={'#'} text={'Portafolio'} />
            <ButtonMenu route={'#'} text={'Mi CV'} />
        </div>
    )
}