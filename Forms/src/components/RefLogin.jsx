import { useRef, useState } from "react";

export default function Login() {

  const email = useRef();
  const password = useRef();
  const [isEmailInvalid, setEmailIsInvalid] = useState(false)
  function handleSubmit(event) {
    event.preventDefault()
    const emailIsValid=email.current.value.includes('@')
    if(!emailIsValid){
      setEmailIsInvalid(true)
      return;
    }
    setEmailIsInvalid(false)
  }
  //  function onEmailChange(event){

  //  }
  //  function onPasswordChange(event){
  //   password.current.value=event.target.value;
  //  }

  return (
    <form onSubmit={handleSubmit} >
      <h2>Login</h2>

      <div className="control-row">
        <div className="control no-margin">
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" ref={email} />
          <div className="control-error">{isEmailInvalid && <p>Enter a valid Email</p>}</div>
        </div>

        <div className="control no-margin">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" ref={password} />
        </div>
      </div>

      <p className="form-actions">
        <button type="reset"className="button button-flat">Reset</button>
        <button type="submit" className="button">Login</button>
      </p>
    </form>
  );
}
