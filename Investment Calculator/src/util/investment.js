// ✅ Correct compound interest with annual investments at the start of each year
export default function calculateInvestmentResults({
  initialInvestment,
  annualInvestment,
  expectedReturn,
  duration,
}) {
  const annualData = [];
  let investmentValue = initialInvestment;

  for (let i = 0; i < duration; i++) {
    investmentValue += annualInvestment; // Add annual investment at start of year
    const interestEarnedInYear = investmentValue * (expectedReturn / 100); // Interest on total
    investmentValue += interestEarnedInYear; // Update total value

    annualData.push({
      year: i + 1,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: annualInvestment,
    });
  }

  return annualData;
}

// 💰 Indian currency formatter
export const formatter = new Intl.NumberFormat('en-IN', {
  style: 'currency',
  currency: 'INR',
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});
