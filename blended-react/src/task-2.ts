type Currency = "USD" | "EUR" | "UAH";

interface ConvertCurrencyProps {
  amount: number;
  currency: Currency;
}

// interface ConvertCurrencyProps {
//   amount: number;
//   currency: "USD" | "EUR" | "UAH";
// }

function convertCurrency({ amount, currency }: ConvertCurrencyProps): void {
  console.log(`Converting ${amount} to ${currency}`);
}

convertCurrency({ amount: 155, currency: "UAH" });
