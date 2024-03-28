import './softSkill.scss';

function SoftSkill(props) {
    return (
        <div className="softSkill_container">
            <div className="title_softSkill">
                <i className={props.iconClass}></i>
                <h3>{props.title}</h3>
            </div>
            <p>{props.desc}</p>
        </div>
    )
}

export default SoftSkill;