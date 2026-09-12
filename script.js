// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  // Product chip multiselect
  var chipSelect = document.getElementById('product-chip-select');
  var productInput = document.getElementById('product');
  if (chipSelect && productInput) {
    var chips = chipSelect.querySelectorAll('.chip-option');

    function syncHiddenInput() {
      var selected = [];
      chips.forEach(function (chip) {
        if (chip.classList.contains('selected')) {
          selected.push(chip.getAttribute('data-value'));
        }
      });
      productInput.value = selected.join(', ');
    }

    chips.forEach(function (chip) {
      chip.addEventListener('click', function () {
        chip.classList.toggle('selected');
        chip.setAttribute('aria-pressed', chip.classList.contains('selected') ? 'true' : 'false');
        syncHiddenInput();
      });
    });

    // Pre-select from a ?product= query param (e.g. contact.html?product=Phenyl)
    var params = new URLSearchParams(window.location.search);
    var preselect = params.get('product');
    if (preselect) {
      chips.forEach(function (chip) {
        if (chip.getAttribute('data-value') === preselect) {
          chip.classList.add('selected');
          chip.setAttribute('aria-pressed', 'true');
        }
      });
      syncHiddenInput();
    }
  }

  // Character counter for the free-text product/size/quantity field
  var quantityField = document.getElementById('quantity');
  var quantityCount = document.getElementById('quantity-count');
  if (quantityField && quantityCount) {
    var updateCount = function () {
      quantityCount.textContent = quantityField.value.length;
    };
    quantityField.addEventListener('input', updateCount);
    updateCount();
  }

  // Enquiry form -> opens WhatsApp with prefilled message (no backend needed)
  var form = document.getElementById('enquiry-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = form.querySelector('#name').value.trim();
      var phone = form.querySelector('#phone').value.trim();
      var product = form.querySelector('#product').value;
      var quantity = form.querySelector('#quantity').value.trim();
      var city = form.querySelector('#city').value.trim();
      var message = form.querySelector('#message').value.trim();

      var whatsappNumber = "919340518153";

      var text = "Hello, I'd like a bulk quote.%0A" +
        "Name: " + encodeURIComponent(name) + "%0A" +
        "Phone: " + encodeURIComponent(phone) + "%0A" +
        "Product(s): " + encodeURIComponent(product || "Not specified") + "%0A" +
        "Details: " + encodeURIComponent(quantity) + "%0A" +
        "City: " + encodeURIComponent(city) +
        (message ? "%0AMessage: " + encodeURIComponent(message) : "");

      var url = "https://wa.me/" + whatsappNumber + "?text=" + text;
      window.open(url, "_blank");
    });
  }
});
