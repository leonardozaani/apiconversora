const convertButton = document.getElementById('convert');
convertButton.addEventListener('click', convertCurrency);

function convertCurrency() {
    const amount = document.getElementById('amount').value;
    const fromCurrency = document.getElementById('from-currency').value;
    const toCurrency = document.getElementById('to-currency').value;

    const apiKey = '422113b635225d580b086dec31c7cac4'; // Substitua pela sua chave de API
    const url = `http://v6.exchangeratesapi.io/latest?base=${fromCurrency}&symbols=${toCurrency}`;

fetch(url, {
    headers: {
        'Authorization': `Bearer ${apiKey}`
    }
})
.then(response => response.json())
.then(data => {
    const rate = data.rates[toCurrency];
    const result = (amount * rate).toFixed(2);
    document.getElementById('result').innerHTML = `${amount} ${fromCurrency} é igual a ${result} ${toCurrency}`;
})
.catch(error => {
    console.error('Erro ao converter a moeda:', error);
    document.getElementById('result').innerHTML = 'Não foi possível fazer a conversão.';
});
    
}