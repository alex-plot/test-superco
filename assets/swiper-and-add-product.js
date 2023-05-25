// Initialize Swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 2,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
    breakpoints: {
        140: {
            slidesPerView: 1, 
            spaceBetween: 2, 
        },
        650: {
            slidesPerView: 2, 
            spaceBetween: 2, 
        },
        950: {
            slidesPerView: 3, 
            spaceBetween: 2, 
        }
    }
  });
// Add item
function addItem(variantId, variantQuantity) {
fetch('/cart/add.js', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest'
    },
    body: JSON.stringify({
        id: variantId,
        quantity: variantQuantity
    })
})
.then(response => response.json())
.then(data => {
    console.log('Success:', data);
    alert("Product is added");
})
.catch((error) => {
    console.error('Error:', error);
});
}