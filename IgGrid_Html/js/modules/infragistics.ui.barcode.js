﻿/*!@license
* Infragistics.Web.ClientUI Barcode localization resources 16.1.20161.2052
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
*/
(function($){$.ig=$.ig||{};if(!$.ig.Barcode){$.ig.Barcode={locale:{aILength:"The AI should have at least 2 digits.",badFormedUCCValue:"The Data property value of the UCC barcode is not well formed. It should look like (AI)GTIN.",code39_NonNumericError:"The character '{0}' is invalid for CODE39 Data property value. The valid ones are: {1}",countryError:"Error converting Country property value code. It should be a numeric value.",emptyValueMsg:"The Data property value is empty.",encodingError:"Error in the convertion. Refer to the documentation for the valid property values.",errorMessageText:"Invalid value! Reference the documentation for the valid barcode Data property value structure.",gS1ExMaxAlphanumNumber:"The GS1 DataBar Expanded family can encode up to 41 alphanumeric characters.",gS1ExMaxNumericNumber:"The GS1 DataBar Expanded family can encode up to 74 numeric characters.",gS1Length:"The GS1 DataBar Data property value is used for GTIN - 8, 12, 13, 14 and its length should be 7, 11, 12 or 13. The last digit is reserved for a check sum.",gS1LimitedFirstChar:"GS1 DataBar Limited barcode should have 0 or 1 in the first digit. When encoding GTIN-14 data with an Indicator value greater than 1, Omnidirectional, Stacked, Stacked Omnidirectional or Truncated barcode type must be used.",i25Length:"The Interleaved2of5 barcode should have even number of digits. You can put 0 in the front of it if they are odd number.",intelligentMailLength:"The length of the Intelligent Mail barcode Data property value should be 20, 25, 29 or 31 characters - 20 digits track code (2 for barcode identifier, 3 for service type identifier, 6 or 9 for mailer identifier and 9 or 6 for serial number) and 0, 5, 9 or 11 zip code symbols.",intelligentMailSecondDigit:"The second digit should be in the range of 0-4.",invalidAI:"Invalid Application Identifier element strings. Please, ensure that the AI string in the Data property value is well formed.",invalidCharacter:"The character '{0}' is invalid for the current barcode type. The valid ones are: {1}",invalidDimension:"The barcode dimension cannot be determined because of an incorrect combination of Stretch, BarsFillMode and XDimension property values.",invalidHeight:"This number of barcode grid rows ({0}) cannot fit in such a height ({1} pixel(s)).",invalidLength:"The barcode Data property value should have {0} digit(s).",invalidPostalCode:"Invalid PostalCode value - Mode 2 encodes up to 9 digits postal code (U.S. zip code) while Mode 3 encodes up to 6 characters alpha-numeric code.",invalidPropertyValue:"The {0} property value should be in the range of {1}-{2}.",invalidVersion:"The SizeVersion propery value number does not generate enough cells to encode the data with the current encoding mode and error correction level.",invalidWidth:"This number of barcode grid columns ({0}) cannot fit in such a width ({1} pixel(s)). Check the XDimension or/and the WidthToHeightRatio property values.",invalidXDimensionValue:"The XDimension property value should be in the range of {0} to {1} for the current barcode type.",maxLength:"The length {0} of the text exceeds the maximum encodable for the current type of barcode. It could encode max {1} characters.",notSupportedEncoding:"The encoding corresponding under the {0} {1} is not supported.",pDF417InvalidRowsColumnsCombination:"The codewords (data & error correction) are more than can be encoded in symbol with a matrix {0}x{1}.",primaryMessageError:"Cannot extract the primary message from the Data property value. Refer to the documentation for its structure.",serviceClassError:"Error converting service class. It should be a numeric value.",smallSize:"Cannot fit the grid in Size({0}, {1}) with the defined Stretch settings.",unencodableCharacter:"The character '{0}' cannot be encoded.",uPCEFirstDigit:"The first UPCE digit shall always be zero by specification.",warningString:"Barcode warning: ",wrongCompactionMode:"The Data property value cannot be compacted with {0} mode.",notLoadedEncoding:"The {0} encoding is not loaded."}}}})(jQuery);/*!@license
* Infragistics.Web.ClientUI Barcode 16.1.20161.2052
*
* Copyright (c) 2011-2016 Infragistics Inc.
*
* http://www.infragistics.com/
*
* Depends on:
*     jquery-1.8.3.js
*     jquery.ui.core.js
*     jquery.ui.widget.js
*     infragistics.util.js
*     infragistics.dv.simple.core.js
*     infragistics.barcode_qrcodebarcode.js
*/
if(typeof jQuery==="undefined"){throw new Error("jQuery is undefined")}(function($){$.widget("ui.igQRCodeBarcode",{css:{unsupportedBrowserClass:"ui-html5-non-html5-supported-message ui-helper-clearfix ui-html5-non-html5",barcode:"ui-barcode",barcodeBacking:"ui-barcode-backing",barcodeBar:"ui-barcode-bar",barcodeLabel:"ui-barcode-label"},events:{errorMessageDisplaying:null,dataChanged:null},options:{width:null,height:null,backingBrush:"white",backingOutline:"transparent",backingStrokeThickness:0,barBrush:"black",fontBrush:null,font:null,data:"",errorMessageText:"",stretch:"uniform",barsFillMode:"fillSpace",widthToHeightRatio:3,xDimension:.25,errorCorrectionLevel:"medium",sizeVersion:"undefined",encodingMode:"undefined",eciNumber:3,eciHeaderDisplayMode:"hide",fnc1Mode:"none",applicationIndicator:""},_setOption:function(key,value,checkPrev){var qRCodeBarcode=this._qRCodeBarcode,o=this.options;if(checkPrev&&o[key]===value){return}$.Widget.prototype._setOption.apply(this,arguments);if(this._set_option(qRCodeBarcode,key,value)){return this}this._set_generated_option(qRCodeBarcode,key,value);return this},_set_generated_option:function(qRCodeBarcode,key,value){switch(key){case"backingBrush":if(value==null){qRCodeBarcode.backingBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);qRCodeBarcode.backingBrush($tempBrush)}return true;case"backingOutline":if(value==null){qRCodeBarcode.backingOutline(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);qRCodeBarcode.backingOutline($tempBrush)}return true;case"backingStrokeThickness":qRCodeBarcode.backingStrokeThickness(value);return true;case"barBrush":if(value==null){qRCodeBarcode.barBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);qRCodeBarcode.barBrush($tempBrush)}return true;case"fontBrush":if(value==null){qRCodeBarcode.fontBrush(null)}else{var $tempBrush=$.ig.Brush.prototype.create(value);qRCodeBarcode.fontBrush($tempBrush)}return true;case"font":qRCodeBarcode.font(value);return true;case"data":qRCodeBarcode.data(value);return true;case"errorMessageText":qRCodeBarcode.errorMessageText(value);return true;case"stretch":switch(value){case"none":qRCodeBarcode.stretch(0);break;case"fill":qRCodeBarcode.stretch(1);break;case"uniform":qRCodeBarcode.stretch(2);break;case"uniformToFill":qRCodeBarcode.stretch(3);break}return true;case"barsFillMode":switch(value){case"fillSpace":qRCodeBarcode.barsFillMode(0);break;case"ensureEqualSize":qRCodeBarcode.barsFillMode(1);break}return true;case"widthToHeightRatio":qRCodeBarcode.widthToHeightRatio(value);return true;case"xDimension":qRCodeBarcode.xDimension(value);return true;case"errorCorrectionLevel":switch(value){case"low":qRCodeBarcode.errorCorrectionLevel(1);break;case"medium":qRCodeBarcode.errorCorrectionLevel(0);break;case"quartil":qRCodeBarcode.errorCorrectionLevel(3);break;case"high":qRCodeBarcode.errorCorrectionLevel(2);break}return true;case"sizeVersion":switch(value){case"undefined":qRCodeBarcode.sizeVersion(0);break;case"version1":qRCodeBarcode.sizeVersion(1);break;case"version2":qRCodeBarcode.sizeVersion(2);break;case"version3":qRCodeBarcode.sizeVersion(3);break;case"version4":qRCodeBarcode.sizeVersion(4);break;case"version5":qRCodeBarcode.sizeVersion(5);break;case"version6":qRCodeBarcode.sizeVersion(6);break;case"version7":qRCodeBarcode.sizeVersion(7);break;case"version8":qRCodeBarcode.sizeVersion(8);break;case"version9":qRCodeBarcode.sizeVersion(9);break;case"version10":qRCodeBarcode.sizeVersion(10);break;case"version11":qRCodeBarcode.sizeVersion(11);break;case"version12":qRCodeBarcode.sizeVersion(12);break;case"version13":qRCodeBarcode.sizeVersion(13);break;case"version14":qRCodeBarcode.sizeVersion(14);break;case"version15":qRCodeBarcode.sizeVersion(15);break;case"version16":qRCodeBarcode.sizeVersion(16);break;case"version17":qRCodeBarcode.sizeVersion(17);break;case"version18":qRCodeBarcode.sizeVersion(18);break;case"version19":qRCodeBarcode.sizeVersion(19);break;case"version20":qRCodeBarcode.sizeVersion(20);break;case"version21":qRCodeBarcode.sizeVersion(21);break;case"version22":qRCodeBarcode.sizeVersion(22);break;case"version23":qRCodeBarcode.sizeVersion(23);break;case"version24":qRCodeBarcode.sizeVersion(24);break;case"version25":qRCodeBarcode.sizeVersion(25);break;case"version26":qRCodeBarcode.sizeVersion(26);break;case"version27":qRCodeBarcode.sizeVersion(27);break;case"version28":qRCodeBarcode.sizeVersion(28);break;case"version29":qRCodeBarcode.sizeVersion(29);break;case"version30":qRCodeBarcode.sizeVersion(30);break;case"version31":qRCodeBarcode.sizeVersion(31);break;case"version32":qRCodeBarcode.sizeVersion(32);break;case"version33":qRCodeBarcode.sizeVersion(33);break;case"version34":qRCodeBarcode.sizeVersion(34);break;case"version35":qRCodeBarcode.sizeVersion(35);break;case"version36":qRCodeBarcode.sizeVersion(36);break;case"version37":qRCodeBarcode.sizeVersion(37);break;case"version38":qRCodeBarcode.sizeVersion(38);break;case"version39":qRCodeBarcode.sizeVersion(39);break;case"version40":qRCodeBarcode.sizeVersion(40);break}return true;case"encodingMode":switch(value){case"undefined":qRCodeBarcode.encodingMode(-1);break;case"numeric":qRCodeBarcode.encodingMode(0);break;case"alphanumeric":qRCodeBarcode.encodingMode(1);break;case"byte":qRCodeBarcode.encodingMode(2);break;case"kanji":qRCodeBarcode.encodingMode(3);break}return true;case"eciNumber":qRCodeBarcode.eciNumber(value);return true;case"eciHeaderDisplayMode":switch(value){case"hide":qRCodeBarcode.eciHeaderDisplayMode(0);break;case"show":qRCodeBarcode.eciHeaderDisplayMode(1);break}return true;case"fnc1Mode":switch(value){case"none":qRCodeBarcode.fnc1Mode(0);break;case"gs1":qRCodeBarcode.fnc1Mode(1);break;case"industry":qRCodeBarcode.fnc1Mode(2);break}return true;case"applicationIndicator":qRCodeBarcode.applicationIndicator(value);return true}},_set_option:function(qRCodeBarcode,key,value){var currentKey;switch(key){case"width":this._setSize(qRCodeBarcode,"width",value);return true;case"height":this._setSize(qRCodeBarcode,"height",value);return true}},_creationOptions:null,_qRCodeBarcode:null,_createWidget:function(options,element,widget){this._creationOptions=options;$.Widget.prototype._createWidget.apply(this,[options,element])},_create:function(){var key,v,size,qRCodeBarcode,width,height,i=-1,self=this,elem=self.element,style=elem[0].style,o=this._creationOptions;self._old_state={style:{position:style.position,width:style.width,height:style.height},css:elem[0].className,elems:elem.find("*")};if(!$.ig.util._isCanvasSupported()){$.ig.util._renderUnsupportedBrowser(this);return}qRCodeBarcode=this._createBarcode();self._qRCodeBarcode=qRCodeBarcode;qRCodeBarcode.errorMessageDisplaying=$.ig.Delegate.prototype.combine(qRCodeBarcode.errorMessageDisplaying,jQuery.proxy(this._fireQRCodeBarcode_errorMessageDisplaying,this));qRCodeBarcode.dataChanged=$.ig.Delegate.prototype.combine(qRCodeBarcode.dataChanged,jQuery.proxy(this._fireQRCodeBarcode_dataChanged,this));if(o.hasOwnProperty("width"))elem[0].style.width=o["width"];if(o.hasOwnProperty("height"))elem[0].style.height=o["height"];qRCodeBarcode.provideContainer(elem[0]);for(key in o){if(o.hasOwnProperty(key)){v=o[key];if(v!==null){this._setOption(key,v,false)}}}while(i++<1){key=i===0?"width":"height";if(o[key]){size=key;v=o[key]}else{v=elem[0].style[key]}if(v&&v.indexOf("%")>0){self._setSize(qRCodeBarcode,size=key,v)}}if(!size){self._setSize(qRCodeBarcode,"width")}if(self.css&&self.css.qRCodeBarcode){elem.addClass(self.css.qRCodeBarcode)}},_createBarcode:function(){return new $.ig.XamQRCodeBarcode},_fireQRCodeBarcode_dataChanged:function(barcode,evt){var opts={};opts.newData=evt.newData();opts.owner=this;this._trigger("dataChanged",null,opts)},_fireQRCodeBarcode_errorMessageDisplaying:function(barcode,evt){var opts={};opts.errorMessage=evt.errorMessage();opts.owner=this;this._trigger("errorMessageDisplaying",null,opts);evt.errorMessage(opts.errorMessage)},_setSize:function(qRCodeBarcode,key,val){$.ig.util.setSize(this.element,key,val,qRCodeBarcode,this._getNotifyResizeName())},_getNotifyResizeName:function(){return"containerResized"},exportVisualData:function(){if(this._qRCodeBarcode)return this._qRCodeBarcode.exportVisualData()},flush:function(){if(this._qRCodeBarcode&&this._qRCodeBarcode.view())this._qRCodeBarcode.view().flush()},destroy:function(){var key,style,qRCodeBarcode=this._qRCodeBarcode,old=this._old_state,elem=this.element;if(!old){return}elem.find("*").not(old.elems).remove();if(this.css.qRCodeBarcode){elem.removeClass(this.css.qRCodeBarcode)}old=old.style;style=elem[0].style;for(key in old){if(old.hasOwnProperty(key)){if(style[key]!==old[key]){style[key]=old[key]}}}if(qRCodeBarcode){this._setSize(qRCodeBarcode)}$.Widget.prototype.destroy.apply(this,arguments);if(qRCodeBarcode&&qRCodeBarcode.destroy){qRCodeBarcode.destroy()}delete this._qRCodeBarcode;delete this._old_state},styleUpdated:function(){if(this._qRCodeBarcode&&this._qRCodeBarcode.view()){this._qRCodeBarcode.view().styleUpdated()}}});$.extend($.ui.igQRCodeBarcode,{version:"16.1.20161.2052"})})(jQuery);