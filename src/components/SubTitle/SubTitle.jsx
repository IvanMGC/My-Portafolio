import PropTypes from 'prop-types';
import './styles.scss';

export default function SubTitle({styles,subTitle}){
    return(
        <h4 style={styles} className='sub-title'>{subTitle}</h4>
    )
}

SubTitle.propTypes={
    subTitle: PropTypes.string,
    styles: PropTypes.object,
}
