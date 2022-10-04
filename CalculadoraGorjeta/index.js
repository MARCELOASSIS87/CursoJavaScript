//Associando o valor a fixo de duas casas decimais
function formatMoney(value){
    value = value.toFixed(2)
    return 'R$ ' + value
}


function update() {
    let bill = Number(document.getElementById('yourBill').value)
    let tipPercent = document.getElementById('tipInput').value
    let split = document.getElementById('splitInput').value

    let tipValue = bill * (tipPercent / 100)
    let billTotal = bill + tipValue
    let billEach = billTotal / split

    document.getElementById('tipPercent').innerHTML = tipPercent + '%'
    document.getElementById('tipValue').innerHTML = formatMoney(tipValue)
    document.getElementById('totalWithTip').innerHTML = formatMoney(billTotal)
    document.getElementById('splitValue').innerHTML = split
    document.getElementById('billEach').innerHTML = formatMoney(billTotal / split)
    document.getElementById('gorjetaPessoa').innerHTML = formatMoney(tipValue / split)
    

    console.log(billEach)
}