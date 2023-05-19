const dataProjects = [
    {nivel:"Basico",},
    {nivel:"Basico",},
    {nivel:"Basico",},
    {nivel:"Basico",},
    {nivel:"Basico",},
]


function getNumLevelsProjects(){
    let levels = {basico:0,intermedio:0,avanzado:0};

    dataProjects.forEach(element => {
        levels[element.nivel.toLowerCase()]++;
    });
    return levels;
}
const location="/portafolio/intermedio";
const filterLevelProject = () =>{
    let route = "";
    let text = "";
    const pageNames = {
        "/portafolio/basico":"Basico",
        "/portafolio/intermedio":"Intermedio",
        "/portafolio/avanzado":"Avanzado",
    };
    
    for(const prop in pageNames){
        if(location.includes(prop)){
            route=prop;
        }
    }
    if(getNumLevelsProjects()[pageNames[route].toLowerCase()]){
        text = "Mis proyectos";
    }else{
        text = "Por definir...";
    }
    return text;
};
console.log(filterLevelProject())