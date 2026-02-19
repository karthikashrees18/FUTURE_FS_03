function orderNow() {
    alert("Thank you for choosing Vasavi Tiffins! Call or WhatsApp us to place your order.");
}

function buyGift(amount) {
    alert("Thank you for choosing " + amount + " Gift Card! Please contact us to complete your purchase.");
}
function goToPayment(amount) {
    localStorage.setItem("giftAmount", amount);
    window.location.href = "payment.html";
}
