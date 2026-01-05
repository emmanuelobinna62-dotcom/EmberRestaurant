
import './style.css'
import '@fortawesome/fontawesome-free/css/all.min.css'


const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.mobile-menu');
const menulinks = document.querySelectorAll('.menu-link')

function toggleMenu() {
  menu.classList.toggle('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-xmark');
  
}

function closeMenu() {
  menu.classList.toggle('hidden');

  hamburger.classList.toggle ('fa-bars');
  hamburger.classList.toggle ('fa-xmark')
}



hamburger.addEventListener('click',toggleMenu);


menulinks.forEach (link => {
  link.addEventListener ('click',closeMenu);
})




// for menu choices

const plusBtns = document.querySelectorAll('.qty-plus');
const minusBtns = document.querySelectorAll('.qty-minus');
const quantities = document.querySelectorAll('.qty');
const submitBtn = document.getElementById('submitOrder');

function toggleButton() {
  const anySelected = [...quantities].some(q => Number(q.textContent) > 0);
  submitBtn.disabled = !anySelected;
  submitBtn.classList.toggle('opacity-50', !anySelected);
  submitBtn.classList.toggle('cursor-not-allowed', !anySelected);
}

// Increase quantity
plusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyEl = btn.previousElementSibling;
    qtyEl.textContent = Number(qtyEl.textContent) + 1;
    toggleButton();
  });
});

// Decrease quantity
minusBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const qtyEl = btn.nextElementSibling;
    const currentQty = Number(qtyEl.textContent);
    if (currentQty > 0) {
      qtyEl.textContent = currentQty - 1;
    }
    toggleButton();
  });
});

// Submit order
submitBtn.addEventListener('click', () => {
  let message = "Hello, I would like to order:\n\n";
  let total = 0;

  quantities.forEach(qtyEl => {
    const qty = Number(qtyEl.textContent);
    if (qty > 0) {
      const name = qtyEl.dataset.name;
      const price = Number(qtyEl.dataset.price);
      const itemTotal = price * qty;

      message += `• ${name} x${qty} - ₦${itemTotal}\n`;
      total += itemTotal;
    }
  });

  message += `\nTotal: ₦${total}`;

  const phoneNumber = "2348145319744";
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});




  // food menu image

  window.openModal = function (item) {
  document.getElementById("modalImg").src = item.dataset.image;
  document.getElementById("modalName").innerText = item.dataset.name;
  document.getElementById("modalPrice").innerText = item.dataset.price;

  const modal = document.getElementById("imageModal");
  modal.classList.remove("hidden");
  modal.classList.add("flex");
};

window.closeModal = function () {
  const modal = document.getElementById("imageModal");
  modal.classList.add("hidden");
  modal.classList.remove("flex");
};




  


