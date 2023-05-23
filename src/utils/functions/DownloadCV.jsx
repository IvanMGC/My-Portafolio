import fileCV from '../../assets/files/CV GARCIA CALLIRGOS IVAN MAURI.pdf'

export const DownloadCV = () => {
    const fileName = "CV_GARCIA_CALLIRGOS_IVAN_MAURI.pdf";

    const link = document.createElement('a');
    link.href = fileCV;
    link.download = fileName;

    link.click();
}