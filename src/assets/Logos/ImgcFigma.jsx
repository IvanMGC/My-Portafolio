export default function ImgcFigma(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
            <circle
            cx={200}
            cy={200}
            r={200}
            style={{
                fill: "#f6df19",
            }}
            />
            <path d="M244.89 164.82h-53.46V60.17h53.46a52.33 52.33 0 0 1 0 104.65Zm-36.32-17.14h36.32a35.18 35.18 0 0 0 0-70.36h-36.32Zm0 17.14h-53.45a52.33 52.33 0 0 1 0-104.65h53.46v104.65Zm-53.45-87.51a35.19 35.19 0 0 0 0 70.37h36.32V77.31Zm53.45 175h-53.45a52.32 52.32 0 0 1 0-104.64h53.46v104.65Zm-53.45-87.5a35.18 35.18 0 0 0 0 70.36h36.32v-70.35Zm.28 175a52.32 52.32 0 1 1-.29-104.64h53.46v51.75a53.09 53.09 0 0 1-53.17 52.91Zm-.28-87.51a35.18 35.18 0 1 0 .29 70.36 35.94 35.94 0 0 0 36-35.75v-34.59Zm89.77 0h-1.14a52.32 52.32 0 0 1 0-104.64h1.14a52.32 52.32 0 0 1 0 104.64Zm-1.13-87.5a35.18 35.18 0 1 0 0 70.36h1.14a35.18 35.18 0 0 0 0-70.36Z" />
        </svg>
    )
}