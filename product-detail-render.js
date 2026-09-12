document.addEventListener('DOMContentLoaded', function () {
  var container = document.getElementById('product-detail');
  if (!container || typeof PRODUCTS === 'undefined') return;

  var params = new URLSearchParams(window.location.search);
  var id = params.get('id');
  var product = PRODUCTS.find(function (p) { return p.id === id; });

  if (!product) {
    container.innerHTML =
      '<p style="padding:40px 0;">We couldn\'t find that product. ' +
      '<a href="products.html" style="color:var(--teal-deep);font-weight:600;">See the full product range &rarr;</a></p>';
    return;
  }

  document.title = product.name + ' — Hello Products';

  var photoHtml = product.image
    ? '<div class="detail-photo"><img src="' + product.image + '" alt="' + product.name + '"></div>'
    : '<div class="detail-photo detail-photo-placeholder"><svg viewBox="0 0 24 24" fill="none" width="64" height="64"><path d="M9 2h6v3l2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7l2-2V2z" stroke="#0B6B5C" stroke-width="1.4"/></svg></div>';

  var benefitsHtml = '';
  if (product.benefits && product.benefits.length) {
    benefitsHtml = '<h3>Why buyers choose this</h3><ul class="benefit-list">' +
      product.benefits.map(function (b) { return '<li>' + b + '</li>'; }).join('') +
      '</ul>';
  }

  var variantsHtml = (product.variantGroups || []).map(function (group) {
    var chips = group.options.map(function (opt) {
      return '<span class="chip">' + opt + '</span>';
    }).join('');
    return '<div class="variant-group"><span class="variant-label">' + group.label + ':</span><div class="chip-row">' + chips + '</div></div>';
  }).join('');

  container.innerHTML =
    '<div class="detail-grid">' +
      photoHtml +
      '<div class="detail-info">' +
        '<h1>' + product.name + '</h1>' +
        '<p class="detail-desc">' + product.description + '</p>' +
        variantsHtml +
        benefitsHtml +
        '<a href="contact.html?product=' + encodeURIComponent(product.name) + '" class="btn btn-accent" style="margin-top:24px;">Enquire about ' + product.name + '</a>' +
      '</div>' +
    '</div>';
});
