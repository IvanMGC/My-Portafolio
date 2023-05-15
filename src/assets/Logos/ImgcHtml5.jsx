export default function ImgcHtml5(props){
    return(
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 400" {...props}>
            <g
            style={{
                isolation: "isolate",
            }}
            >
            <circle
                cx={200}
                cy={200}
                r={200}
                style={{
                fill: "#f6df19",
                }}
            />
            <g
                style={{
                mixBlendMode: "darken",
                }}
            >
                <path
                d="m95.57 91.77 219.81-.24-19.73 226.46-90.53 29.94-90.3-29.7L95.57 91.77z"
                style={{
                    fill: "#1d1d1b",
                }}
                />
                <path
                d="m136.45 137.87 137.58-.24-1.9 27.09H166.86l2.38 28.52h100.51l-7.36 84.12-57.03 16.15-57.03-15.92-3.57-43.72 27.33.24 2.14 21.39 29.23 9.02 31.84-8.55 4.04-35.41h-96l-6.89-82.69z"
                style={{
                    fill: "#fff",
                }}
                />
            </g>
            </g>
        </svg>
    )
}