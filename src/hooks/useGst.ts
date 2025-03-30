export function calculateGST(totalAmount: number) {
  let gstRate;

  switch (true) {
    case totalAmount < 100:
      gstRate = 0;
      break;
    case totalAmount >= 100 && totalAmount < 500:
      gstRate = 18;
      break;
    case totalAmount >= 500:
      gstRate = 30;
      break;
    default:
      gstRate = 0;
  }

  const gstAmount = (totalAmount * gstRate) / 100;
  const finalAmount = totalAmount + gstAmount;

  return {
    totalAmount,
    gstRate,
    gstAmount,
    finalAmount,
  };
}
