import './SocialMedias.scss'
import EmailIcon from '../../assets/images/email_icon.png'
import LinkedinLogo from '../../assets/images/linkedin_logo.png'
import GithubLogo from '../../assets/images/github_logo.png'

function SocialMedias(props) {
    return (
        <div class="social_medias_container">
            <div class="rectangle"></div>
            <a href="https://github.com/danielle-soaress"><img src={GithubLogo} class="icon linkedin_icon"></img></a>
            <a href="https://www.linkedin.com/in/danielle-soares-712910206/"><img src={LinkedinLogo} class="icon linkedin_icon"></img></a>
            <a><img src={EmailIcon} class="icon email_icon"></img></a>
        </div>
    );
}

export default SocialMedias;