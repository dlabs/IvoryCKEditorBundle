/**
 * @license Copyright (c) 2003-2014, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.html or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {};
CKEDITOR.on('instanceReady', function(e){
    var className = $(e.editor.element.$).attr('class');
    $(e.editor.container.$).addClass(className);
});

