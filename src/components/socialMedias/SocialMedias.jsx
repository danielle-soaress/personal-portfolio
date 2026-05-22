import './SocialMedias.scss'
import EmailIcon from '../../assets/images/email_icon.png'
import LinkedinLogo from '../../assets/images/linkedin_logo.png'
import GithubLogo from '../../assets/images/github_logo.png'
import { motion } from "motion/react"
import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';

const EMAIL = 'silvasoaresdanielle2@gmail.com';

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

function SocialMedias({ showRectangle = true, onEmailClick }) {
    const [isEmailCopied, setIsEmailCopied] = useState(false);
    const timeoutRef = useRef(null);
    const { t } = useTranslation();

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
        } catch {
            const textarea = document.createElement('textarea');
            textarea.value = EMAIL;
            textarea.setAttribute('readonly', '');
            textarea.style.position = 'absolute';
            textarea.style.left = '-9999px';
            document.body.appendChild(textarea);
            textarea.select();
            document.execCommand('copy');
            document.body.removeChild(textarea);
        }

        onEmailClick?.(EMAIL);
        setIsEmailCopied(true);
        clearTimeout(timeoutRef.current);
        timeoutRef.current = setTimeout(() => setIsEmailCopied(false), 2500);
    };

    useEffect(() => {
        return () => clearTimeout(timeoutRef.current);
    }, []);

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

            <motion.button
                variants={iconVariants}
                type="button"
                className="social_media_button"
                onClick={copyEmail}
                aria-label={t('social.copyEmailAria')}
            >
                <img src={EmailIcon} className="icon" alt="Email" />
            </motion.button>

            {isEmailCopied && (
                <motion.span
                    className="email_copy_notice"
                    initial={{ opacity: 0, x: -8, y: "-50%" }}
                    animate={{ opacity: 1, x: 0, y: "-50%" }}
                    exit={{ opacity: 0, x: -8, y: "-50%" }}
                >
                    {t('contact.emailCopied')}
                </motion.span>
            )}
        </motion.div>
    );
}

export default SocialMedias;