import '../form-input/form-input.styles.scss'

const Forminput = ({label,...otherProps})=>{
return(
    <div className="group">
    <input className="form-input" {...otherProps}/>
    {/* if label exist then only render label */}
     {label && (<label className={`${otherProps.value.length ? 'shrink' : ''} form-input-label`} >{label}</label>) }   
    </div>
)}

export default Forminput