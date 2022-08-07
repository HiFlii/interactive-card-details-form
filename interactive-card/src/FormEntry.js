import './FormEntry.css'

const FormEntry = (props) => {
    return (
        <>
            <label className = "input-label">
                {props.label}
            </label><br/>
            <input type="text" name="name" defaultValue={props.default}/><br/>
        </>
    )
}

export default FormEntry;