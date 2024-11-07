import './TextField.css'

const TextField = (props) => {

    const whenTyping = (event) => {
        props.whenAltered(event.target.value)
    }

    return(
        <div className="text-field">
            <label>{props.label}</label>
            <input value={props.inputvalue} onChange={whenTyping} required={props.mandatory} placeholder= {props.placeholder}/>
        </div>
    )
}

export default TextField