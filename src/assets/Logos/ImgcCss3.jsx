export default function ImgcCss3(props){
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
                d="m96.17 91.3 219.8-.24-19.72 226.45-90.54 29.94-90.29-29.7L96.17 91.3z"
                style={{
                    fill: "#1d1d1b",
                }}
                />
                <path
                d="m137.04 136.45 138.65.17-3.2 27.27-65.05 28.52 62.73-.36-6.95 85.01-55.96 16.39-56.68-17.46-3.03-41.88h26.56l2.67 21.74 28.87 7.84 32.08-8.55 2.32-35.64-95.17-.48-1.78-26.26 66.65-28.63h-69.38l-3.33-27.68z"
                style={{
                    fill: "#fff",
                }}
                />
            </g>
            </g>
        </svg>
    )
}