/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {};
CKEDITOR.on('instanceReady', function(e){
    var origElement = $(e.editor.element.$);
    var className = origElement.attr('class');
    var erroorClass = origElement.hasClass('TMPfldError');
    $(e.editor.container.$).addClass(className);
    if(erroorClass){
        $(e.editor.document.$.body).addClass('TMPfldError');
    }
});