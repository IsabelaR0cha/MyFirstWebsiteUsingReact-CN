import './DropDownBox.css'

const DropDownBox = (props) => {
    console.log(props.items)

    return(
        <div className = 'drop-down-box'>
            <label>{props.label}</label>
            <select onChange={event => props.whenAltered(event.target.value)} required={props.required} value={props.inputvalue}>
                <option inputvalue=""></option>
                {props.items.map(item => {
                    return <option key={item}>{item}</option>
                })}
            </select>
        </div>
    )
}

export default DropDownBox