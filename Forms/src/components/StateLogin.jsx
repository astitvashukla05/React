
import Input from "./Input"
import { useInput } from "./hooks/useInput.js"
import { isEmail,isNotEmpty,hasMinLength,isEqualsToOtherValue } from "../util/validation.js"
export default function Login() {

  const {
    value:emailValue,
    handleBlur:handleEmailBlur,
    handleChange:handleEmailChange,
    hasError:isEmailInvalid
  }=useInput('',(value)=>{return isEmail(value) && isNotEmpty(value)})
  const {
    value:passValue,
    handleBlur:handlePassBlur,
    handleChange:handlePassChange,
    hasError:isPassInvalid,
  }=useInput('',(value)=>{return hasMinLength(value,6) && isNotEmpty(value)})
  
  function handleSubmit(event) {
    event.preventDefault()
    if(isEmailInvalid && isPassInvalid) return;
    console.log(emailValue,passValue)
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>

      <div className="control-row">
        <Input 
        label="email" id="email"
        error={isEmailInvalid} type="email"
         name="email"
         onChange={handleEmailChange} 
         value={emailValue} 
         onBlur={handleEmailBlur}
         errMessage="Please Enter a valid email"
        /> 
         <Input 
        label="password" id="password"
        type="password" name="password"
        onChange={handlePassChange}
        value={passValue}
        onBlur={handlePassBlur}
        error={isPassInvalid}
        errMessage={"Pass length to be more than 6"}
        /> 
      </div>

      <p className="form-actions">
        
  <button type="reset" className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
 // const [email, setEmail] = useState('')
  // const [password, setPassword] = useState('')
  // function onEmailChange(event) {
  //   setEmail(event.target.value)
    
  // }
  // function onPasswordChange(event) {
  //   setPassword(event.target.value)
   
  // }
  // function handleChange(identifier,event){
  //   if(identifier=='email'){
  //   setEnteredValues((prev)=>
  //     ({
  //     ...prev,
  //     email:event.target.value,

  //   }))
  // }else{
  //   setEnteredValues((prev)=>
  //     ({
  //     ...prev,
  //     password:event.target.value,

  //   }))

  // }
 // }