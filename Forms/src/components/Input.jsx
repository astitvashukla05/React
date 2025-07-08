export default function Input({ label, id,errMessage,error,...props }) {
    return (
        <div className="control no-margin">
            <label htmlFor={id}>{label}</label>
            <input id={id} {...props}/>
            <div className="control-error">{error && <p>{errMessage}</p>}</div>
        </div>
    )
}