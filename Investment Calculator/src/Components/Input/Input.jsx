import "./Input.css";

export default function Userinput({expectedReturn,initialInvestment,duration,annualInvestment,onDurationChange,onReturnChange,onAnnualChange,onInitialChange}) {
 

  return (
    <div id="user-input">
      <div className="input-group">
        <p>
          <label>Initial Investment</label>
          <input
            type="number"
            required
            value={initialInvestment}
            onChange={onInitialChange}
      
          />
        </p>
        <p>
          <label>Annual Investment</label>
          <input
            type="number"
            required
            onChange={onAnnualChange}
            value={annualInvestment}
   
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Expected Return</label>
          <input
            type="number"
            required
            onChange={onReturnChange}
            value={expectedReturn}
     
          />
        </p>
        <p>
          <label>Duration</label>
          <input
            type="number"
            required
            onChange={onDurationChange}
            value={duration}
            
          />
        </p>
      </div>
    </div>
  );
}
