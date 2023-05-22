//Components SVG
import Icon from '../../components/Icon/Icon';
import ImgcHtml5 from '../../assets/Logos/ImgcHtml5';
import ImgcCss3 from '../../assets/Logos/ImgcCss3';
import ImgcJS from '../../assets/Logos/ImgcJS';
import ImgcSass from '../../assets/Logos/ImgcSass';
import ImgcReact from '../../assets/Logos/ImgcReact';
import ImgcGit from '../../assets/Logos/ImgcGit';
import ImgcGitHub from '../../assets/Logos/ImgcGitHub';
import ImgcFigma from '../../assets/Logos/ImgcFigma';
import ImgcAdobeXd from '../../assets/Logos/ImgcAdobeXd';
import ImgcAdobeIllustrator from '../../assets/Logos/ImgcAdobeIllustrator';
import ImgcJava from '../../assets/Logos/ImgcJava';
import ImgcMysql from '../../assets/Logos/ImgcMysql';
import ImgcExcel from '../../assets/Logos/ImgcExcel';
import ImgcScrum2 from '../../assets/Logos/ImgcScrum2';

//Style
import './styles.scss';

export default function ImageSectionTecnology(){
    return(
        <div className='image-section-tecnology'>
            <Icon link={"https://developer.mozilla.org/es/docs/Glossary/HTML5"}  componentSVG={<ImgcHtml5 />}/>
            <Icon link={"https://developer.mozilla.org/es/docs/Web/CSS"}  componentSVG={<ImgcCss3  />}/>
            <Icon link={"https://developer.mozilla.org/es/docs/Web/JavaScript"}  componentSVG={<ImgcJS />}/>
            <Icon link={"https://sass-lang.com/"}  componentSVG={<ImgcSass />}/>
            <Icon link={"https://es.react.dev/"}  componentSVG={<ImgcReact />}/>
            <Icon link={"https://git-scm.com/"}  componentSVG={<ImgcGit />}/>
            <Icon link={"https://github.com/"}  componentSVG={<ImgcGitHub />}/>
            <Icon link={"https://www.figma.com/"}  componentSVG={<ImgcFigma />}/>
            <Icon link={"https://helpx.adobe.com/es/xd/get-started.html"}  componentSVG={<ImgcAdobeXd />}/>
            <Icon link={"https://www.adobe.com/pe/products/illustrator.html"}  componentSVG={<ImgcAdobeIllustrator />}/>
            <Icon link={"https://www.freecodecamp.org/espanol/news/libros-que-debes-leer-para-aprender-a-programar-en-java/"}  componentSVG={<ImgcJava />}/>
            <Icon link={"https://dev.mysql.com/doc/workbench/en/"}  componentSVG={<ImgcMysql />}/>
            <Icon link={"https://www.portaltrabajos.pe/2021/07/ministerio-de-trabajo-word-excel-power-point-gratis.html"}  componentSVG={<ImgcExcel />}/>
            <Icon link={"https://platzi.com/cursos/scrum/"}  componentSVG={<ImgcScrum2 />}/>
        </div>
    )
}
