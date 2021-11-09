Nordstromrac.com ====::====

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

webstaurant.com =====::=====

function getIdFromLink(idRegexp, link) {
    var result = {};
    var match = idRegexp.exec(link);
    if (match) result = { itemlink: link, id: match[1] };
    return result;
}
links = [];
items = document.querySelectorAll('.ag-item');
    for (var i = 0; i < items.length; i++) {
        linkNode = items[i].querySelector('.description, a');
        if (linkNode == null) continue;
        link = getIdFromLink(/.*\/(\w+)/, linkNode.href);
        if (link.id) {
            link.title = items[i].querySelector('.description,[data-testid="itemDescription"]').textContent.trim();
            var price = items[i].querySelector('.pricing .price');
            if (price != null) {
                price = items[i].querySelector('.pricing .price').textContent.split('$').pop();
            }
            link.price = 0;
            if (price != null && price.trim() != "") {
                link.price = price.trim().replace(/[^\d\.]/g, "");
                if (link.price == "") continue;
                links.push(link);
            }
        }
    }
===============================================================================

bedbathandbeyond.com =====::====

function getIdFromLink(idRegexp, link) {
    var result = {};
    var match = idRegexp.exec(link);
    if (match) result = { itemlink: link, id: match[1] };
    return result;
}
links = [];

    container = document.querySelector('#wmHostPrimary');
    items = container.shadowRoot.querySelectorAll('.prodCardWrap');
    for (var i = 0; i < items.length; i++) {
        linkNodes = items[i].querySelectorAll('a');
        if (linkNodes == null) continue;
        linkNode = linkNodes[0];
        if (linkNode.getAttribute('href').toLocaleLowerCase().indexOf("javascript") > - 1) linkNode = linkNodes[1]
        link = getIdFromLink(/.*\/(\d+)/, linkNode.href);
        if (link.id) {
            if (items[i].querySelector(".prodTitle"))
                link.title = items[i].querySelector('.tealium-product-title,.prodTitle').textContent;
            else
                link.title = items[i].querySelector('.tealium-product-title').textContent;
            var price = items[i].querySelector('.isPrice,.prodPrice,.Price_1r4ANX,.trackPrice') || items[i].querySelector('.Price_3HnIBb')
            if (price == null) continue
            if (price && price.textContent.indexOf('-') >= 0) {
                price = price.textContent.split('$').pop();
            } else {
                price = price.textContent.split('$')[1];
            }
            link.price = 0;
            if (price != null && price.trim() != "") {
                link.price = price.trim().replace(/[^\d\.]/g, "");
                links.push(link);
            }
        }
    }
