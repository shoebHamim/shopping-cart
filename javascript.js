function update(value, total_id, amount_id, update_amount) {
    const item = document.getElementById(total_id);
    updated_value = parseFloat(item.innerText) + value * update_amount;
    if (updated_value < 0) {
        return;
    }
    const item_amount = document.getElementById(amount_id);
    item.innerText = updated_value;
    var item_amount_number = parseFloat(item_amount.value);
    item_amount.value = item_amount_number + update_amount;
    update_total();
}
function update_on_input(unit_price,total_id,amount_id,update_amount){
    const total=document.getElementById(total_id);
    const amount=document.getElementById(amount_id);
    if(update_amount<0){
        total.innerText=unit_price;
        amount.value=1;
        update_total();
        return;
    }
    total.innerText=unit_price*update_amount;
    update_total();
}
function update_total(){
    const phone_total=parseFloat(document.getElementById('phone-price-total').innerText);
    const case_total=parseFloat(document.getElementById('case-price-total').innerText);
    document.getElementById('total').innerText=((phone_total+case_total)*1.05).toFixed(3);
    document.getElementById('tax').innerText=((phone_total+case_total)*.05).toFixed(3);
    document.getElementById('sub-total').innerText=phone_total+case_total;
}




const phone_plus = document.getElementById('phone-plus');
phone_plus.addEventListener('click', function () {
    update(1219, 'phone-price-total', "phone_amount", 1)
})
const phone_minus = document.getElementById('phone-minus');
phone_minus.addEventListener('click', function () {
    update(1219, 'phone-price-total', 'phone_amount', -1)
})
const case_plus = document.getElementById('case-plus');
case_plus.addEventListener('click', function () {
    update(59, 'case-price-total', "case_amount", 1)
})
const case_minus = document.getElementById('case-minus');
case_minus.addEventListener('click', function () {
    update(59, 'case-price-total', 'case_amount', -1)

})

const phone_amount = document.getElementById('phone_amount');
phone_amount.addEventListener('change', function () {
    const input_change = phone_amount.value;
    update_on_input(1219,'phone-price-total', 'phone_amount',input_change);

})
const case_amount = document.getElementById('case_amount');
case_amount.addEventListener('change', function () {
    const input_change = case_amount.value;
    update_on_input(59,'case-price-total', 'case_amount',input_change);
})






