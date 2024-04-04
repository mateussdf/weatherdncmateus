

function Procurar(){

    let cep = document.getElementById(`cep`).value
    let finalURL = `https://viacep.com.br/ws/${cep}/json/`
    console.log(finalURL)
    fetch(finalURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data.logradouro)
            console.log(data.bairro)
            console.log(data.uf)

            let logradouro = document.getElementById(`logradouro`)
            let bairro = document.getElementById(`bairro`)
            let uf = document.getElementById(`UF`)

            logradouro.innerHTML = data.logradouro
            bairro.innerHTML = data.bairro
            UF.innerHTML = data.uf
        })

    let lat = document.getElementById(`lat`).value
    let long = document.getElementById(`long`).value
    let tempURL = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m`
    console.log(tempURL)
    fetch(tempURL)
        .then(function(response){
            return response.json()
        })
        .then(function(data){
            console.log(data.hourly.temperature_2m[0])

            let temp = document.getElementById(`temperatura`)
            let x = data.hourly.temperature_2m[0]
            temperatura.innerHTML = `Previsão de tempo de acordo com a região: ${x}°C`
        })
}