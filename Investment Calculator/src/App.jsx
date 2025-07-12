import Header from "./Components/Header/Header";
import Userinput from "./Components/Input/Input";
import { useState } from "react";
import Result from "./Components/Result/Result";
function App() {
  const [initialInvestment, setInitialInvestment] = useState(10000);
  const [annualInvestment, setAnnualInvestment] = useState(2000);
  const [expectedReturn, setExpectedReturn] = useState(6);
  const [duration, setDuration] = useState(10);

  const validInput= duration>=1;
  
  function initialInvestmentChange(e) {
    setInitialInvestment(Number(e.target.value));
  }
  function annualInvestmentChange(e) {
    setAnnualInvestment(Number(e.target.value));
  }
  function expectedReturnChange(e) {
    setExpectedReturn(Number(e.target.value));
  }
  function durationChange(e) {
    setDuration(Number(e.target.value));
  }
  return (
    <>
      <Header />
      <Userinput
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
        onInitialChange={initialInvestmentChange}
        onAnnualChange={annualInvestmentChange}
        onReturnChange={expectedReturnChange}
        onDurationChange={durationChange}
      />
      {!validInput && <p className="center">Please enter duration greater than zero</p>}
      {validInput &&
      <Result
        initialInvestment={initialInvestment}
        annualInvestment={annualInvestment}
        expectedReturn={expectedReturn}
        duration={duration}
      />}
    </>
  );
}

export default App;
