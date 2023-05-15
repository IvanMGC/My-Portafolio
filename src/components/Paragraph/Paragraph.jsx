import PropTypes from 'prop-types';
import './styles.scss';

export default function Paragraph({text}){
    return(
        <p className='paragraph'>{text}</p>
    )
}

Paragraph.propTypes={
    text: PropTypes.string
}