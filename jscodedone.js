Nordstromrac.com ====:====

function getIdFromLink(idRegexp, link) {
    var result = {};
    var match = idRegexp.exec(link);
    if (match) result = { itemlink: link, id: match[1] };
    return result;
}
links = [];

items = document.querySelectorAll('.product-grid-item,._2Ecok');
    for (var i = 0; i < items.length; i++) {
        linkNode = items[i].querySelector('a');
        if (linkNode == null) continue;
        link = getIdFromLink(/.*\/(\d+)/, linkNode.href);
        if (link.id) {
            link.title = items[i].querySelector('.product-grid-item__brand, ._23e81').textContent + " " + items[i].querySelector('.product-grid-item__title, ._3DxxJ').textContent;
            if (items[i].querySelector('.product-grid-item__sale-price')) {
                price = items[i].querySelector('.product-grid-item__sale-price, ._34nPg').textContent;
            }
            link.price = 0;
            var imgNode = items[i].querySelector('.product-grid-item__catalog-image > img');
            if (imgNode) link.img = imgNode.src;
            if (price != null && price.trim() != "") {
                link.price = price.trim().replace(/[^\d\.]/g, "");
                links.push(link);
            }
        }
    }
========================================================================

