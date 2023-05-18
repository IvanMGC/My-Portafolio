import CardProject from '../../components/CardProject/CardProject';
import imgCalculator from '../../assets/Images/calculator.jpg';
import PropTypes from 'prop-types';
import './styles.scss';

export default function SetProyects({handleclick,data}){
    return(
        <>
            {data.map(element => <CardProject key={element.id} click={()=>handleclick(element.id)} urlProyect={`/portafolio/${element.nivel.toLowerCase()}/${element.name.toLowerCase()}`} nameProject={element.name} desProject={element.description} img={imgCalculator} />)}
        </>
    )
}

SetProyects.propTypes = {
    data: PropTypes.array,
    handleclick: PropTypes.func,
}