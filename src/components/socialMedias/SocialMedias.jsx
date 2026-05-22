import './SocialMedias.scss'
import EmailIcon from '../../assets/images/email_icon.png'
import LinkedinLogo from '../../assets/images/linkedin_logo.png'
import GithubLogo from '../../assets/images/github_logo.png'
import { motion } from "motion/react"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, 
    },
  },
};

const iconVariants = {
  hidden: { x: -50, opacity: 0 },
  visible: { 
    x: 0,
    opacity: 1,
    transition: { duration: 0.7, ease: "easeOut" }
  },
};

function SocialMedias(props) {
    const { showRectangle } = props.showRectangle;

    return (
        <motion.div 
            className="social_medias_container"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {showRectangle && <div className="rectangle"></div>}
            
            <motion.a variants={iconVariants} href="https://github.com/danielle-soaress" target="_blank">
                <img src={GithubLogo} className="icon" alt="Github" />
            </motion.a>

            <motion.a variants={iconVariants} href="https://www.linkedin.com/in/danielle-soares-712910206/" target="_blank">
                <img src={LinkedinLogo} className="icon" alt="Linkedin" />
            </motion.a>

            <motion.a variants={iconVariants}>
                <img src={EmailIcon} className="icon" alt="Email" />
            </motion.a>
        </motion.div>
    );
}

export default SocialMedias;