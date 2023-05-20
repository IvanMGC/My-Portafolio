import PropTypes from 'prop-types';

export default function DownloadButton({classBtn,click,text}){  
    return(
        <button onClick={click} className={classBtn}>
            <p>
            {text}
            </p>
        </button>
    )
}

DownloadButton.propTypes = {
    text: PropTypes.string,
    click: PropTypes.func,
    classBtn: PropTypes.string,
}