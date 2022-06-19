let baseURL = "https://api.coinranking.com/v2/coins";
let proxyURL = "https://cors-anywhere.herokuapp.com/";
let apiKey = "past your api key here";

fetch(`${proxyURL}${baseURL}`,{
    method: "GET",
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': `${apiKey}`,
        'Access-Control-Allow-Origin': '*'
    }
}).then(response => {
    if (response.ok) {
        response.json().then((json) => {
            // coins data from API
            let coinsData = json.data.coins;
            if (coinsData.length > 0) {
                var cryptoCoins =""
            }
            coinsData.forEach((coins) => {
                cryptoCoins +="<tr>"
                cryptoCoins +=`<td> ${coins.uuid} </td>`;
                cryptoCoins +=`<td> ${coins.rank} </td>`;
                cryptoCoins +=`<td> <img src="${coins.iconUrl}" width="50px" height="50"> </td>`;
                cryptoCoins +=`<td> ${coins.name} </td>`;
                cryptoCoins +=`<td> ${coins.symbol} </td>`;
                cryptoCoins +=`<td>$${Math.round(coins.price)} Billion</td>`;
                cryptoCoins +=`<td> ${coins.tier} </td>`;
                cryptoCoins +=`<td> ${coins.btcPrice} </td>`;
                "</tr>";
            });
            document.getElementById("data").innerHTML = cryptoCoins;
        })
    }
}).catch((error) => {
    console.log(error);
})
