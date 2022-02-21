let apikey = {
    key:'7e9057c1-7194-481c-87e9-72637f9808a9'
};

fetch('https://pro-api.coinmarketcap.com/v1/cryptocurrency/map?CMC_PRO_API_KEY=' + apikey.key)
    .then((response) => {
        if(!response.ok) throw new Error(`Erro ao executar a requisição, status ${response.status}`);
            return response.json();
    })
    .then((api) => {
        console.log(api);
        let texto = "";

       
        for(let i = 0; i < 10; i++){
            texto = texto + `
            <div class="col-sm">
                <img src='coin.jpg' class="align-self-center mr-3;" style="width:100%; height: 35%;" "alt="coin">
                <div class="media-body" style="text-align:center;">
                    <h1 class="mt-2" style="font-size: 20px;">${api.data[i].name}</h1>
                    <p>${api.data[i].symbol}</p>
                    <p>${api.data[i].first_historical_data}</p>
                </div>
            </div>
            `;
        }

        let textoBase = `
            <div class="media container">
                <div class="row">
                    ${texto}
                </div>
            </div>
         `

        
        document.getElementById('coins').innerHTML = textoBase;
    })
    .catch((error) => {
        console.log(error.message);
    });