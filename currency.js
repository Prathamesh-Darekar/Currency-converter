let url = "https://api.currencyapi.com/v3/latest?apikey=cur_live_HjhybTUE93aeCQQTNpmxKJrTExNgmtLfSE2Jx3Oz";
let str = ""
let inputVal = 0
let i=1
const tableBody = document.querySelector("tbody")
let btn = document.querySelector("#Btn")

//function to calculate and print value 

async function cur_value(val, currency) {
    let cur = await fetch(url)
    let cur2 = await cur.json()
    for (let key of Object.keys(cur2.data)) {  //object.keys() returns array (here each index will have currecy code)
        str += `
                <tr>
                    <td>${i++}</td>
                    <td>${cur2.data[key].code}</td>
                    <td>${(((1 / cur2.data[currency]["value"]) * val) / (1 / cur2.data[key]["value"])).toPrecision(4)}</td>
                </tr>`
    }
    tableBody.innerHTML = str; 
}

//code to be executed when button is pressed

btn.addEventListener("click", () => {
    str = ""
    i=1
    resetTable()  //to remove all previously entered values in the table
    let input = document.querySelector("input")
    inputVal = input.value
    if (inputVal <= 0) {
        alert("Please Enter a valid value") //if user gives negative value or NULL
    }
    else {
        let option = document.querySelector("#dropdown")
        cur_value(inputVal, option.value);  
    }

})

//function to reset the table

function resetTable() {
    tableBody.innerHTML = "";
}








