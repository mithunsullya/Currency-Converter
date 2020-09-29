var apiUrl = 'https://api.exchangeratesapi.io/latest?base=USD';
var amount;
var convertedAmount;
var sourcecurrency;
var destinatincurrency;

async function getCurrencyValues(amount, sourcecurrency, destinatincurrency) {
  try {
    let currency = await fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      convertedAmount = amount / data.rates[sourcecurrency] * data.rates[destinatincurrency];
      convertedAmount = convertedAmount.toFixed(2) + ' ' + destinatincurrency;
      document.getElementById('display-result').innerHTML = convertedAmount;
    });
  } catch(error) {
    alert('Error fetching the data');
  }
}

function getFieldValues(id) {
  return document.getElementById(id).value;
}

function calculate() {
  var amount = getFieldValues('amount');
  if(!amount) {
    alert('Please Enter the amount to be converted')
  }
  var sourcecurrency = getFieldValues('basecountry');
  var destinatincurrency = getFieldValues('changecountry');
  getCurrencyValues(amount, sourcecurrency, destinatincurrency);
}
