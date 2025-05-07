let products = [];

let token = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh0bXlkemJhZmR4enVsdXhla3lpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY1ODE4NTcsImV4cCI6MjA2MjE1Nzg1N30.af0ve3oxUYsM5XP6nUav00YO4CF03YCnXnXEEQBXDAo`

async function getProducts() {

    let response = await fetch("https://xtmydzbafdxzuluxekyi.supabase.co/rest/v1/products", {
        method: "GET",
        headers: {
            'apikey': token,
            'Authorization': token,
            'Content-Type': "application/json"
        }
    })

    let data = await response.json()
    products = data

    renderTable()
    renderCards()
}



function renderTable() {

    let dataTable = document.getElementById("tableDefinition")

    for (let i = 0; i < products.length; i++) {

        dataTable.innerHTML += `<tr>  
    <td class="px-1 py-1 border-b text-left"> ${products[i].product_name} </td>
    <td class="px-1 py-1 border-b text-center"> ${products[i].price}  </td>
    <td class="px-1 py-1 border-b text-center"> ${products[i].year} </td>
</tr>`

    }
}


function renderCards (){
    let cards = document.getElementById("cardContainer")

    for (let i = 0; i < products.length; i++) {
    
        cards.innerHTML += `<div class="bg-white p-4 rounded shadow">
                  <h2 class="text-xl text-black font-semibold">${products[i].product_name}</h2>
                  <p class="text-gray-600">${products[i].price}</p>
                  <p class="text-gray-600">${products[i].year}</p>
                </div>`
    
    }
}


