function handleSubmit(e) {
    let qty = parseInt(document.getElementById('quantInptData').value)
    let frm = document.getElementById('cartFormData')
    document.getElementById('cardBody3').innerHTML = `<h1 class="successMsg">${qty} Added!!</h1>`
    frm.reset()
    e.preventDefault();
    e.stopPropagation();
    
}

function inputChange(e) {
    let qty = parseInt(document.getElementById('quantInptData').value)
    let price = 55;
    let qtyTotal = price * qty
    document.getElementById('itmPrice').innerHTML = `$${qtyTotal}`
    
    console.log(parseInt(document.getElementById('quantInptData').value))
    e.preventDefault();
  
}
