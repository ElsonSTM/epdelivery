import './styles.css';
import {ReactComponent as YouTubeIcon } from './youtube.svg'
import {ReactComponent as LinkedinIcon } from './linkedin.svg'
import {ReactComponent as InstagramIcon } from './instagram.svg'
function Footer(){
  return (
    <footer className="main-footer">
    App desenvolvido durante as aulas da disciplina Sistema <br />
    Distribuidos UFOPA - 2021
    <div className="footer-icons">
    <a href="https://www.youtube.com.br" target="_new">
      <YouTubeIcon />
    </a>

    <a href="https://www.linkedin.com/in/elson-pinheiro-silva-junior-81509920/" target="_new"> 
      <LinkedinIcon />
    </a>

    <a href="https://www.instagram.com/junior_bhz/" target="_new"> 
      <InstagramIcon />
    </a>
    </div>
    </footer>
  )
}

export default Footer;