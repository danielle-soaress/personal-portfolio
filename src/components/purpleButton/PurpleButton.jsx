import './PurpleButton.scss';

function Button(props) {
    return (
        <button class="purple_button">{props.content}</button>
    )
}

export default Button;