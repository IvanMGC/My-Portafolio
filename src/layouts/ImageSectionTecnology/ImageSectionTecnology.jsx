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
import PropTypes from 'prop-types';
import './styles.scss';

export default function ImageSectionTecnology({widthIcon}){
    return(
        <div className='image-section-tecnology'>
            <Icon link={"https://developer.mozilla.org/es/docs/Glossary/HTML5"}  componentSVG={<ImgcHtml5 width={widthIcon} />}/>
            <Icon link={"https://developer.mozilla.org/es/docs/Web/CSS"}  componentSVG={<ImgcCss3 width={widthIcon} />}/>
            <Icon link={"https://developer.mozilla.org/es/docs/Web/JavaScript"}  componentSVG={<ImgcJS width={widthIcon} />}/>
            <Icon link={"https://sass-lang.com/"}  componentSVG={<ImgcSass width={widthIcon} />}/>
            <Icon link={"https://es.react.dev/"}  componentSVG={<ImgcReact width={widthIcon} />}/>
            <Icon link={"https://git-scm.com/"}  componentSVG={<ImgcGit width={widthIcon} />}/>
            <Icon link={"https://github.com/"}  componentSVG={<ImgcGitHub width={widthIcon} />}/>
            <Icon link={"https://www.figma.com/"}  componentSVG={<ImgcFigma width={widthIcon} />}/>
            <Icon link={"https://helpx.adobe.com/es/xd/get-started.html"}  componentSVG={<ImgcAdobeXd width={widthIcon} />}/>
            <Icon link={"https://www.adobe.com/pe/products/illustrator.html"}  componentSVG={<ImgcAdobeIllustrator width={widthIcon} />}/>
            <Icon link={"https://www.freecodecamp.org/espanol/news/libros-que-debes-leer-para-aprender-a-programar-en-java/"}  componentSVG={<ImgcJava width={widthIcon} />}/>
            <Icon link={"https://dev.mysql.com/doc/workbench/en/"}  componentSVG={<ImgcMysql width={widthIcon} />}/>
            <Icon link={"https://www.portaltrabajos.pe/2021/07/ministerio-de-trabajo-word-excel-power-point-gratis.html"}  componentSVG={<ImgcExcel width={widthIcon} />}/>
            <Icon link={"https://platzi.com/cursos/scrum/"}  componentSVG={<ImgcScrum2 width={widthIcon} />}/>
        </div>
    )
}

ImageSectionTecnology.propTypes={
    widthIcon: PropTypes.string.isRequired,
}