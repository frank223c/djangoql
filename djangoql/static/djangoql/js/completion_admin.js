(function (DjangoQL) {
    'use strict';

    DjangoQL.DOMReady(function () {
        // Replace standard search input with textarea
        var textarea;
        var input = document.querySelector('input[name=q]');
        var form = document.querySelector('#grp-changelist-search-form')

        if (!input) {
          return;
        }

        textarea = document.createElement('textarea');
        textarea.value = input.value;
        textarea.id = input.id;
        textarea.name = input.name;
        textarea.rows = 2;
        textarea.style.height = "25px";
        textarea.style.width = "400px";
        textarea.style.float = "right";
        textarea.style.borderRadius = "5px";
        textarea.setAttribute('maxlength', 2000);

        input.parentNode.insertBefore(textarea, input);
        input.parentNode.removeChild(input.nextSibling);
        input.parentNode.removeChild(input);

        form.style.width = "404px"
        form.style.border = "0px"
        form.style.float = "right"

        textarea.focus();

        DjangoQL.init({
            introspections: 'introspect/',
            syntaxHelp: 'djangoql-syntax/',
            selector: 'textarea[name=q]',
            autoResize: true
        });
    });
}(window.DjangoQL));
