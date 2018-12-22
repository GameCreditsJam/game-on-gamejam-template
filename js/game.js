var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("game").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="img2/Game.png"> </th>
                <td>$${currency.price_usd.slice(0, 4)}</td>
                <td> </td>
                <td style="color: green">${currency.percent_change_24h}%</td>
				<td style="color: white"><img height="50px" width="50px" src="http://icons.iconarchive.com/icons/iynque/ios7-style/1024/Stocks-icon.png">    ${currency.market_cap_usd} $ MarketCap</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request


var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("litecoin").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="https://www.shareicon.net/data/2015/10/11/117636_connection_465x512.png"> </th>
                <td>${currency.available_supply.slice(0, 8)} Available Supply</td>
                <td> </td>
                <td><img height="50px" width="50px" src="https://data.gov.in/sites/default/files/Mining_6.png">    ${84000000 - currency.available_supply} Gamecredits Left</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request


var json = new XMLHttpRequest(); // start a new variable to store the JSON in
    json.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) { // if HTTP header 200 - ok
            var object = JSON.parse(this.responseText); // set the variable 'object' to whatever we get back, in our case it is an array of 10 different arrays
            object.forEach(function(currency) { // for each of those arrays, split it into chunks called 'currency'
                document.getElementById("bitcoin").innerHTML =`
                <th class="tableimg"><img height="50px" width="50px" src="https://png.pngtree.com/svg/20170707/crown_2__309563.png"> </th>
                <td>${'Global Rank : ' + currency.rank}</td>
            `
            });
        }
    };
    json.open(
        "GET", // method
        "https://api.coinmarketcap.com/v1/ticker/gamecredits/", // url
        true // async
    ); // initialise the request
json.send(); //send request