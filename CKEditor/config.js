/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */


CKEDITOR.editorConfig = function (config) {

    //config.extraPlugins += (config.extraPlugins.length == 0 ? '' : ',') + 'ckeditor_wiris';
    //config.mathJaxClass = 'equation';
   // config.extraPlugins = 'mathjax';
   // config.extraPlugins = 'eqneditor';
  //  config.extraPlugins = 'eqneditor',
         config.extraPlugins ='ckeditor_wiris';
        // config.extraPlugins='easyimage';
       
   //config.filebrowserUploadUrl = "CKeditorDemo/upload.ashx";
    //config.filebrowserImageUploadUrl = '/Main/UploadImage'; //Action for Uploding image 
    config.filebrowserImageUploadUrl = '/blog/CkEditorUpload'; //Action for Uploding image
    config.allowedContent = true;
    config.image_previewText = ' ';
  
    config.enterMode = CKEDITOR.ENTER_BR;
  
    config.removeDialogTabs = 'link:target;link:advanced;image:Link;image:advanced';
} 
