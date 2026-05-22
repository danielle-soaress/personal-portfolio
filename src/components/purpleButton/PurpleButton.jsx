import './PurpleButton.scss';

function Button({text, link}) {
    // <!-- From Uiverse.io by adamgiebl --> 
    return <a href={link}>
        <button className="purple-button">
            <span>{text}</span>
        </button>
    </a>
}

export default Button;