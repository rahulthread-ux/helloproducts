document.addEventListener('DOMContentLoaded', function () {
  var grid = document.getElementById('product-grid');
  if (!grid || typeof PRODUCTS === 'undefined') return;

  var limit = parseInt(grid.getAttribute('data-limit'), 10);
  var list = limit ? PRODUCTS.slice(0, limit) : PRODUCTS;

  list.forEach(function (product) {
    var card = document.createElement('div');
    card.className = 'product-card';

    if (product.image) {
      var photoWrap = document.createElement('div');
      photoWrap.className = 'card-photo';
      var img = document.createElement('img');
      img.src = product.image;
      img.alt = product.name;
      img.loading = 'lazy';
      photoWrap.appendChild(img);
      card.appendChild(photoWrap);
    } else {
      var iconWrap = document.createElement('div');
      iconWrap.className = 'icon-wrap';
      iconWrap.innerHTML = '<svg viewBox="0 0 24 24" fill="none"><path d="M9 2h6v3l2 2v13a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V7l2-2V2z" stroke="#0B6B5C" stroke-width="1.6"/></svg>';
      card.appendChild(iconWrap);
    }

    var title = document.createElement('h3');
    title.textContent = product.name;
    card.appendChild(title);

    var desc = document.createElement('p');
    desc.textContent = product.description;
    card.appendChild(desc);

    (product.variantGroups || []).forEach(function (group) {
      var groupEl = document.createElement('div');
      groupEl.className = 'variant-group';

      var label = document.createElement('span');
      label.className = 'variant-label';
      label.textContent = group.label + ':';
      groupEl.appendChild(label);

      var chips = document.createElement('div');
      chips.className = 'chip-row';
      group.options.forEach(function (opt) {
        var chip = document.createElement('span');
        chip.className = 'chip';
        chip.textContent = opt;
        chips.appendChild(chip);
      });
      groupEl.appendChild(chips);
      card.appendChild(groupEl);
    });

    var link = document.createElement('a');
    link.className = 'enquire-link';
    link.href = 'product-detail.html?id=' + encodeURIComponent(product.id);
    link.textContent = 'View details';
    card.appendChild(link);

    grid.appendChild(card);
  });
});
