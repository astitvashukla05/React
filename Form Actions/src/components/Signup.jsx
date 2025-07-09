import { isEmail,isEqualsToOtherValue,isNotEmpty,hasMinLength } from "../validation";
import { useActionState } from "react";
export default function Signup() {
  function singUpAction(prevFormState,formData){

    const email=formData.get('email');
    const password=formData.get('password');
    const confirmPassword=formData.get('confirm-password');
    const firstName=formData.get('first-name');
    const lastName=formData.get('last-name');
    const role=formData.get('role');
    const acquisitionChannel=formData.getAll('acquisition');
    const terms=formData.get('terms');

    const errors=[]
    
    if(!isEmail(email) || !isNotEmpty(email)){
      errors.push("Enter a Valid Email");
    }
    if(!isNotEmpty(password) || !hasMinLength(password,6)){
      errors.push("Enter a valid password")
    }
    if(!isEqualsToOtherValue(password,confirmPassword)){
      errors.push('Passwords do not match')
    }
    if(!isNotEmpty(firstName) || !isNotEmpty(lastName)){
      errors.push("Please Provide valid credentials")
    }
     if(!isNotEmpty(role)){
      errors.push("Enter a role")
    }
    if(!terms){
      errors.push("Agree to the terms")
    }
     if(acquisitionChannel.length===0){
      errors.push("Enter acquisition Channel")
    }
    if(errors.length>0){
      return {errors:errors,values:{
        email,
        password,
        confirmPassword,
        terms,
        acquisitionChannel,
        role,
        firstName,
        lastName,
      }}
    }
    return {errors:null}
  }
  const [formState,formAction,pending]=useActionState(singUpAction,{errors:null})
  return (

    <form action={formAction}>
      <h2>Welcome on board!</h2>
      <p>We just need a little bit of data from you to get you started 🚀</p>

      <div className="control">
        <label htmlFor="email">Email</label>
        <input id="email" type="email" name="email" defaultValue={formState.values?.email} />
      </div>

      <div className="control-row">
        <div className="control">
          <label htmlFor="password">Password</label>
          <input id="password" type="password" name="password" defaultValue={formState.values?.password} />
        </div>

        <div className="control">
          <label htmlFor="confirm-password">Confirm Password</label>
          <input
            id="confirm-password"
            type="password"
            name="confirm-password"
            defaultValue={formState.values?.confirmPassword}
          />
        </div>
      </div>

      <hr />

      <div className="control-row">
        <div className="control">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" name="first-name" defaultValue={formState.values?.firstName} />
        </div>

        <div className="control">
          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" name="last-name" defaultValue={formState.values?.lastName} />
        </div>
      </div>

      <div className="control">
        <label htmlFor="phone">What best describes your role?</label>
        <select id="role" name="role" defaultValue={formState.values?.role}>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="employee">Employee</option>
          <option value="founder">Founder</option>
          <option value="other">Other</option>
        </select>
      </div>

      <fieldset>
        <legend>How did you find us?</legend>
        <div className="control">
          <input
            type="checkbox"
            id="google"
            name="acquisition"
            value="google"
            defaultChecked={formState.values?.acquisitionChannel.includes('google')}
          />
          <label htmlFor="google">Google</label>
        </div>

        <div className="control">
          <input
            type="checkbox"
            id="friend"
            name="acquisition"
            value="friend"
            defaultChecked={formState.values?.acquisitionChannel.includes('friend')}
          />
          <label htmlFor="friend">Referred by friend</label>
        </div>

        <div className="control">
          <input type="checkbox" id="other" name="acquisition" value="other" defaultChecked={formState.values?.acquisitionChannel.includes('other')} />
          <label htmlFor="other">Other</label>
        </div>
      </fieldset>

      <div className="control" >
        <label htmlFor="terms-and-conditions">
          <input type="checkbox" id="terms-and-conditions" name="terms" defaultChecked={formState.values?.terms} />I
          agree to the terms and conditions
        </label>
      </div>
      {formState.errors && <ul className="error">
        {formState.errors.map((error)=>{
          return <li key={error}>{error}</li>
        })}
        </ul>}

      <p className="form-actions">
        <button type="reset" className="button button-flat">
          Reset
        </button>
        <button className="button">Sign up</button>
      </p>
    </form>
  );
}
