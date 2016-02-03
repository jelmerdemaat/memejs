(function() {
    var doc = HTMLDocument ? HTMLDocument.prototype : Document.prototype;

    doc.iCanHazElement = function (selector) {
        return document.querySelector(selector);
    };

    doc.allYourElementsAreBelongToUs = function (selector) {
        return document.querySelectorAll(selector);
    };
})();
