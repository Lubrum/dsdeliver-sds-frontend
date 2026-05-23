import './styles.css'
import youtubeIcon from './youtube.svg'
import linkedinIcon from './linkedin.svg'
import instagramIcon from './instagram.svg'

function Footer() {
    return (
        <footer className="main-footer">
            App desenvolvido durante a 2ª ed. do evento Semana DevSuperior
            <div className="footer-icons">
                <a href="https://www.youtube.com/c/DevSuperior" target="_new">
                    <img src={youtubeIcon} alt="YouTube" />
                </a>
                <a href="https://www.linkedin.com/school/devsuperior" target="_new">
                    <img src={linkedinIcon} alt="LinkedIn" />
                </a>
                <a href="https://www.instagram.com/devsuperior.ig" target="_new">
                    <img src={instagramIcon} alt="Instagram" />
                </a>
            </div>
        </footer>
    )
}

export default Footer
