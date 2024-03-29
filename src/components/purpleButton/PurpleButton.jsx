import './PurpleButton.scss';

function Button(props) {
    return (
        <button class="purple_button" onClick={props.click}>{props.content}</button>
    )
}

export default Button;