const calculatePricing = (
  priceCar,
  downPayment,
  loanAmount,
  interestRate,
  loanTenure
) => {
  // const restPriceCar = priceCar - downPayment;

  const principalPayment = loanAmount / loanTenure;
  const interest = (loanAmount / 12) * (interestRate / 100);
  const total = principalPayment + interest;

  return total;
};

export default calculatePricing;
