import PropTypes from 'prop-types';
export default function ImgcMenu(props){
    return(
        <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Capa_1"
            width={21}
            height={21}
            data-name="Capa 1"
            viewBox="0 0 230.51 201.51"
            {...props}
        >
            <defs>
            
            </defs>
            <path
            d="M5.31 119.18c-3.71-.81-5.11-3.57-5.19-6.9C0 105 0 97.64.13 90.32.21 86.74 1.51 84 5.68 83a34.34 34.34 0 0 1 8.1-.82h201.14c13.25 0 15.53 2.27 15.53 15.48 0 3.43-.14 6.87 0 10.29.23 4.71-1.17 8.53-5.23 11.16-1.75.82-3.6.5-5.41.5H10.7c-1.79.03-3.64.33-5.39-.43ZM114.42 201.5H12.73C1 201.5.12 200.62.1 188.56c0-4.81-.13-9.62 0-14.42.27-7.51 2.46-9.69 10-9.69q104.43-.06 208.86 0c7.76 0 11.33 3.62 11.47 11.21.09 4.81.11 9.63 0 14.43-.22 8.8-2.85 11.4-11.59 11.4q-52.21.03-104.42.01ZM223.86.48C228.6 3 230.56 7 230.47 12.2c-.09 5 .13 10.08-.07 15.11-.27 7-3.76 10.38-10.71 10.38H10.22C2.66 37.69.13 35 .1 27.48.09 21.76 0 16 .14 10.31.24 5.72 1.55 1.78 6.69.48c1.77-.7 3.63-.43 5.44-.43h206.28c1.82 0 3.68-.27 5.45.43Z"
            className="cls-1"
            fill={props.fill}
            />
        </svg>
  )
}

ImgcMenu.propTypes = {
    fill: PropTypes.string,
}