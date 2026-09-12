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

  // Title and meta description tuned for "order X in bulk" style searches
  document.title = 'Order ' + product.name + ' in Bulk — Hello Products, Indore';

  var sizeGroup = (product.variantGroups || []).find(function (g) { return g.label === 'Size'; });
  var sizesText = sizeGroup ? sizeGroup.options.join(', ') : '';

  var descText = 'Order ' + product.name + ' in bulk directly from our Indore factory. ' +
    (sizesText ? 'Available in ' + sizesText + '. ' : '') +
    'Wholesale pricing for retailers and distributors.';

  var metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', descText);

  var photoHtml = product.image
    ? '<div class="detail-photo"><img src="' + product.image + '" alt="' + product.name + ' — bulk order, Hello Products"></div>'
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

  // FAQ content — matches how people actually phrase bulk-order searches
  var faqs = [
    {
      q: 'How do I order ' + product.name + ' in bulk?',
      a: 'Call us at +91 93405 18153, message us on WhatsApp, or send an enquiry through our contact form with your required size and quantity. We\'ll confirm pricing and production timelines directly.'
    },
    {
      q: 'What sizes does ' + product.name + ' come in?',
      a: sizesText
        ? product.name + ' is available in ' + sizesText + '. Let us know your preferred size when you enquire.'
        : 'Contact us for available size options for ' + product.name + '.'
    },
    {
      q: 'Do you offer wholesale/bulk pricing for ' + product.name + '?',
      a: 'Yes — we manufacture ' + product.name + ' fresh per order at our Indore factory, so pricing is quoted directly based on your quantity, with no distributor markup.'
    }
  ];

  var faqHtml = '<h3>Frequently asked questions</h3><div class="faq-list">' +
    faqs.map(function (f) {
      return '<div class="faq-item"><p class="faq-q">' + f.q + '</p><p class="faq-a">' + f.a + '</p></div>';
    }).join('') +
    '</div>';

  container.innerHTML =
    '<div class="detail-grid">' +
      photoHtml +
      '<div class="detail-info">' +
        '<h1>' + product.name + '</h1>' +
        '<p class="detail-desc">' + product.description + '</p>' +
        '<h2 class="bulk-heading">Order ' + product.name + ' in Bulk</h2>' +
        '<p class="detail-desc">' + descText + '</p>' +
        variantsHtml +
        benefitsHtml +
        '<a href="contact.html?product=' + encodeURIComponent(product.name) + '" class="btn btn-accent" style="margin-top:24px;">Enquire about ' + product.name + '</a>' +
      '</div>' +
    '</div>' +
    '<div class="detail-faq">' + faqHtml + '</div>';

  // Structured data: Product schema
  var productSchema = document.createElement('script');
  productSchema.type = 'application/ld+json';
  productSchema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "Product",
    "name": product.name,
    "description": product.description,
    "image": product.image ? ('https://www.helloproducts.in/' + product.image) : undefined,
    "brand": { "@type": "Brand", "name": "Hello" },
    "offers": {
      "@type": "Offer",
      "availability": "https://schema.org/InStock",
      "priceCurrency": "INR",
      "seller": { "@type": "Organization", "name": "Hello Products" }
    }
  });
  document.head.appendChild(productSchema);

  // Structured data: FAQ schema
  var faqSchema = document.createElement('script');
  faqSchema.type = 'application/ld+json';
  faqSchema.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(function (f) {
      return {
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      };
    })
  });
  document.head.appendChild(faqSchema);
});
