document.addEventListener('DOMContentLoaded', function () {
  var shelf = document.getElementById('product-shelf');
  if (!shelf || typeof PRODUCTS === 'undefined') return;

  PRODUCTS.forEach(function (product) {
    var card = document.createElement('a');
    card.className = 'shelf-card';
    card.href = 'product-detail.html?id=' + encodeURIComponent(product.id);

    if (product.image) {
      card.innerHTML =
        '<div class="shelf-photo"><img src="' + product.image + '" alt="' + product.name + '" loading="lazy"></div>' +
        '<h3>' + product.name + '</h3>';
    } else {
      card.innerHTML =
        '<div class="shelf-photo shelf-photo-placeholder"><svg viewBox="0 0 24 24" fill="none" width="40" height="40"><path d="M9 2h6v3l2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7l2-2V2z" stroke="#0B6B5C" stroke-width="1.4"/></svg></div>' +
        '<h3>' + product.name + '</h3>';
    }

    shelf.appendChild(card);
  });

  var prevBtn = document.getElementById('shelf-prev');
  var nextBtn = document.getElementById('shelf-next');
  var scrollAmount = 230;

  if (prevBtn) {
    prevBtn.addEventListener('click', function () {
      shelf.scrollBy({ left: -scrollAmount * 2, behavior: 'smooth' });
    });
  }
  if (nextBtn) {
    nextBtn.addEventListener('click', function () {
      shelf.scrollBy({ left: scrollAmount * 2, behavior: 'smooth' });
    });
  }
});
