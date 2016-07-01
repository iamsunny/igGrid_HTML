﻿/*!@license
	* Ignite UI directives for AngularJS   1.1.4
	* https://github.com/IgniteUI/igniteui-angular
	*
	* Copyright (c) 2014-2016 Infragistics, Inc.
	* Licensed under the MIT license.
	* https://github.com/IgniteUI/igniteui-angular/blob/master/license.txt
	*/
(function(angular,$){"use strict";$.ig=$.ig||{};$.ig.angular=$.ig.angular||{};$.ig.angular.igCombo=$.ig.angular.igCombo||{};$.ig.angular.igCombo.element=$.ig.angular.igCombo.element||"<input></input>";$.ig.angular.igCombo.events=["igcombotextchanged","igcomboselectionchanged"];function markWatcher(scope,controlName,attrs){scope.$$watchers[0][controlName]=attrs.id||controlName+scope.$$watchers.length}function isDate(value){return Object.prototype.toString.call(value)==="[object Date]"}function isRegExp(value){return Object.prototype.toString.call(value)==="[object RegExp]"}function isScope(obj){return obj&&obj.$evalAsync&&obj.$watch}function isWindow(obj){return obj&&obj.document&&obj.location&&obj.alert&&obj.setInterval}function isFunction(value){return typeof value==="function"}function isArray(value){return Object.prototype.toString.call(value)==="[object Array]"}function equalsDiff(o1,o2,diff){if(o1===o2){return true}if(o1===null||o2===null){return false}if(o1!==o1&&o2!==o2){return true}var t1=typeof o1,t2=typeof o2,length,key,keySet,dirty,skipDiff=false,changedVals=[];if(t1===t2){if(t1==="object"){if(isArray(o1)){if(!isArray(o2)){return false}if((length=o1.length)===o2.length){if(!isArray(diff)){skipDiff=true}for(key=0;key<length;key++){if(!equalsDiff(o1[key],o2[key],changedVals)){dirty=true;if(!skipDiff){diff.push({index:key,txlog:changedVals})}}changedVals=[]}if(dirty){return false}return true}}else if(isDate(o1)){return isDate(o2)&&o1.getTime()===o2.getTime()}else if(isRegExp(o1)&&isRegExp(o2)){return o1.toString()===o2.toString()}else{if(isScope(o1)||isScope(o2)||isWindow(o1)||isWindow(o2)||isArray(o2)){return false}keySet={};if(!isArray(diff)){skipDiff=true}for(key in o1){if(key.charAt(0)==="$"||isFunction(o1[key])){continue}if(!equalsDiff(o1[key],o2[key])){dirty=true;if(!skipDiff){diff.push({key:key,oldVal:o2[key],newVal:o1[key]})}}keySet[key]=true}for(key in o2){if(!keySet.hasOwnProperty(key)&&key.charAt(0)!=="$"&&o2[key]!==undefined&&!isFunction(o2[key])){return false}}if(dirty){return false}return true}}}return false}$.ig.angular.igCombo.bindEvents=$.ig.angular.igCombo.bindEvents||function(scope,element,attrs,model){if(!model){return}var controlName=attrs["data-ig-control-name"],unbinder,comboItems;function comboValue(widget,value){if(widget.values){return widget.values(value)}else{return widget.value(value)}}function setControlValue(value){comboItems=value;if(typeof value==="string"){value=value.split(",")}comboValue(element.data(controlName),value);return element.data(controlName).text()}function parseValue(){var combo=element.data(controlName);if(combo.options.allowCustomValue&&combo.refreshValue!==undefined){combo.refreshValue()}return comboValue(element.data(controlName))}element.on($.ig.angular.igCombo.events.join(" "),function(event,args){scope.$apply(function(){model.$setViewValue(comboValue(args.owner))})}).one("$destroy",function(){unbinder();var index=$.inArray(setControlValue,model.$formatters);if(index>=0){model.$formatters.splice(index,1)}});model.$formatters.push(setControlValue);model.$parsers.push(parseValue);unbinder=scope.$watch(attrs.source,function(newValue){var items=[],newDataSource=[],combo=element.data(controlName);items=comboValue(combo);angular.copy(newValue,newDataSource);combo._setOption("dataSource",newDataSource);items=items.length!==0?items:comboItems;combo.value(items)},true);markWatcher(scope,controlName,attrs)};$.ig.angular.igEditor=$.ig.angular.igEditor||{};$.ig.angular.igEditor.element=$.ig.angular.igEditor.element||"<input></input>";$.ig.angular.igEditor.events=[];$.ig.angular.igEditor.bindEvents=$.ig.angular.igEditor.bindEvents||function(scope,element,attrs,model){if(!model){return}var controlName=attrs["data-ig-control-name"];function setControlValue(value){var editor=element.data(controlName),displayFunc=editor.displayValue||editor.text;editor.value(value);return displayFunc.call(editor)}function parseValue(){return element.data(controlName).value()}if(controlName){$.ig.angular[controlName].events=[controlName.toLowerCase()+"valuechanged"];element.on($.ig.angular[controlName].events.join(" "),function(event,args){scope.$apply(function(){model.$$lastCommittedViewValue=null;model.$setViewValue(args.owner.value())})}).one("$destroy",function(){var index=$.inArray(setControlValue,model.$formatters);if(index>=0){model.$formatters.splice(index,1)}});model.$formatters.push(setControlValue);model.$parsers.push(parseValue)}};$.ig.angular.igCurrencyEditor=angular.extend($.ig.angular.igCurrencyEditor||{},$.ig.angular.igEditor);$.ig.angular.igDateEditor=angular.extend($.ig.angular.igDateEditor||{},$.ig.angular.igEditor);$.ig.angular.igMaskEditor=angular.extend($.ig.angular.igMaskEditor||{},$.ig.angular.igEditor);$.ig.angular.igNumericEditor=angular.extend($.ig.angular.igNumericEditor||{},$.ig.angular.igEditor);$.ig.angular.igTextEditor=angular.extend($.ig.angular.igTextEditor||{},$.ig.angular.igEditor);$.ig.angular.igDatePicker=angular.extend($.ig.angular.igDatePicker||{},$.ig.angular.igEditor);$.ig.angular.igPercentEditor=angular.extend($.ig.angular.igPercentEditor||{},$.ig.angular.igEditor);$.ig.angular.igGrid=$.ig.angular.igGrid||{};$.ig.angular.igGrid.element=$.ig.angular.igGrid.element||"<table></table>";$.ig.angular.igGrid.events=["iggridupdatingeditcellended","iggridupdatingeditrowended","iggridupdatingrowdeleted","iggridupdatingrowadded"];$.ig.angular.igGrid.bindEvents=$.ig.angular.igGrid.bindEvents||function(scope,element,attrs){var unbinder,collectionWatchMode=attrs&&attrs.collectionWatch&&attrs.collectionWatch==="true";function watchGridDataSource(newValue,oldValue){var i,j,existingDomRow,existingRow,grid=element.data("igGrid"),pkKey=grid.options.primaryKey,gridUpdating=element.data("igGridUpdating"),column,record,td,newFormattedVal,dsRecord,ds=scope.$eval(attrs.source),diff=[];if(ds!==grid.options.dataSource){setTimeout(function(){grid.options.dataSource=ds;grid.dataBind()},0);return}equalsDiff(newValue,oldValue,diff);if(Array.isArray(newValue)&&Array.isArray(oldValue)){if(newValue.length>oldValue.length){if(oldValue.length>0&&oldValue[oldValue.length-1][pkKey]!==newValue[oldValue.length-1][pkKey]){grid.dataBind()}for(i=oldValue.length;i<newValue.length;i++){existingDomRow=element.find("tr[data-id='"+newValue[i][pkKey]+"']").length;if(existingDomRow===0){grid.renderNewRow(newValue[i],newValue[i][pkKey])}existingRow=grid.dataSource.findRecordByKey(newValue[i][pkKey]);if(!existingRow){grid.dataSource._addRow(newValue[i],-1)}}}if(newValue.length<oldValue.length){for(i=0,j=0;j<oldValue.length;i++,j++){if(newValue[i]===undefined||newValue[i][pkKey]!==oldValue[j][pkKey]){element.find("tr[data-id='"+oldValue[j][pkKey]+"']").remove();grid.dataSource.deleteRow(oldValue[j][pkKey],true);i--}}}}if(Array.isArray(diff)){for(i=0;i<diff.length;i++){if(!diff[i].txlog){continue}for(j=0;j<diff[i].txlog.length;j++){if(gridUpdating&&gridUpdating.isEditing()){gridUpdating.endEdit(false)}column=grid.columnByKey(diff[i].txlog[j].key);record=ds[diff[i].index];td=grid.cellById(record[pkKey],diff[i].txlog[j].key);if(column.template||grid.options.rowTemplate){newFormattedVal=grid._renderTemplatedCell(diff[i].txlog[j].newVal,column)}else{newFormattedVal=grid._renderCell(diff[i].txlog[j].newVal,column,record)}$(td).html(newFormattedVal);dsRecord=grid.dataSource.findRecordByKey(record[pkKey]);dsRecord[column.key]=diff[i].txlog[j].newVal}}}}element.on($.ig.angular.igGrid.events.join(" "),function(){unbinder();unbinder=collectionWatchMode?scope.$watchCollection(attrs.source,watchGridDataSource):scope.$watch(attrs.source,watchGridDataSource,true);scope.$apply();markWatcher(scope,"igGrid",attrs)}).one("$destroy",function(){unbinder()});unbinder=collectionWatchMode?scope.$watchCollection(attrs.source,watchGridDataSource):scope.$watch(attrs.source,watchGridDataSource,true);markWatcher(scope,"igGrid",attrs)};$.ig.angular.igHierarchicalGrid=$.ig.angular.igHierarchicalGrid||{};$.ig.angular.igHierarchicalGrid.element=$.ig.angular.igHierarchicalGrid.element||"<table></table>";$.ig.angular.igHierarchicalGrid.bindEvents=$.ig.angular.igHierarchicalGrid.bindEvents||function(scope,element,attrs){var unbinder;unbinder=scope.$watch(attrs.source,function(newValue){$(element).igHierarchicalGrid("option","dataSource",newValue)},true);markWatcher(scope,"igHierarchicalGrid",attrs);element.one("$destroy",function(){unbinder()})};$.ig.angular.igTree=$.ig.angular.igTree||{};$.ig.angular.igTree.bindEvents=$.ig.angular.igTree.bindEvents||function(scope,element,attrs){var unbinder;unbinder=scope.$watch(attrs.source,function(newValue){$(element).igTree("option","dataSource",newValue)},true);markWatcher(scope,"igTree",attrs);element.one("$destroy",function(){unbinder()})};$.ig.angular.igDataChart=$.ig.angular.igDataChart||{};$.ig.angular.igDataChart.bindEvents=$.ig.angular.igDataChart.bindEvents||function(scope,element,attrs){var diff=[],ds=scope.$eval(attrs.source),unbinder;var changeHandler=function(newValue,oldValue){var $chartElem=$(element),chart=$chartElem.data("igDataChart");if(chart.dataSources[chart._containerSourceID].data()!==newValue){$chartElem.igDataChart("option","dataSource",newValue);return}if(newValue.length===oldValue.length){var equals=equalsDiff(newValue,oldValue,diff);if(diff.length>0&&!equals){for(var i=0;i<diff.length;i++){$chartElem.igDataChart("notifySetItem",newValue,diff[i].index,newValue[diff[i].index],oldValue[diff[i].index])}return}}$chartElem.igDataChart("notifyClearItems",newValue)};ds.push=function(){unbinder();var res=Array.prototype.push.apply(this,arguments);$(element).igDataChart("notifyInsertItem",this,this.length-1,arguments[0]);unbinder=scope.$watch(attrs.source,changeHandler,true);markWatcher(scope,"igDataChart",attrs);return res};unbinder=scope.$watch(attrs.source,changeHandler,true);markWatcher(scope,"igDataChart",attrs);element.one("$destroy",function(){unbinder()})};$.ig.angular.igBaseChart=$.ig.angular.igBaseChart||{};$.ig.angular.igBaseChart.element=$.ig.angular.igBaseChart.element||"<div></div>";$.ig.angular.igBaseChart.bindEvents=$.ig.angular.igBaseChart.bindEvents||function(scope,element,attrs){var controlName=attrs["data-ig-control-name"],unbinder;unbinder=scope.$watch(attrs.source,function(newValue){$(element)[controlName]("notifyClearItems",newValue)},true);markWatcher(scope,controlName,attrs);element.one("$destroy",function(){unbinder()})};$.ig.angular.igSparkline=angular.extend($.ig.angular.igSparkline||{},$.ig.angular.igBaseChart);$.ig.angular.igFunnelChart=angular.extend($.ig.angular.igFunnelChart||{},$.ig.angular.igBaseChart);$.ig.angular.igHtmlEditor=$.ig.angular.igHtmlEditor||{};$.ig.angular.igHtmlEditor.element=$.ig.angular.igHtmlEditor.element||"<div></div>";$.ig.angular.igHtmlEditor.bindEvents=$.ig.angular.igHtmlEditor.bindEvents||function(scope,element,attrs){var controlName=attrs["data-ig-control-name"],unbinder;unbinder=scope.$watch(attrs.value,function(newValue){$(element)[controlName]("setContent",newValue,"html")},true);markWatcher(scope,controlName,attrs);element.one("$destroy",function(){unbinder()})};$.ig.angular.igTreeGrid=$.ig.angular.igTreeGrid||{};$.ig.angular.igTreeGrid.element=$.ig.angular.igTreeGrid.element||"<table></table>";$.ig.angular.igPivotGrid=$.ig.angular.igPivotGrid||{};$.ig.angular.igPivotGrid.element=$.ig.angular.igPivotGrid.element||"<table></table>";function convertToCamelCase(str){return str.replace(/-([a-z])/g,function(group){return group[1].toUpperCase()})}function getPropertyType(obj,prop){var i;for(i in obj){if(obj.hasOwnProperty(i)){if(i===prop){return $.type(obj[i])}if($.type(obj[i])==="object"||$.type(obj[i])==="array"){getPropertyType(obj[i],prop)}}}return null}function extractOptions(nodeName,context,options,element,scope){var i,name,value,optionName,children=context.children,attrs=context.attributes,eventAttrPrefix="event-";for(i=0;i<attrs.length;i++){name=attrs[i].name;value=attrs[i].value;if(name.startsWith(eventAttrPrefix)){name=name.substr(eventAttrPrefix.length);value=scope.$eval(value)||value}name=convertToCamelCase(name);if(value==="true"||value==="false"||/^-?\d+\.?\d*$/.test(value)||/^{{[^}]+}}$/.test(value)){value=scope.$eval(value.replace(/([{}:])\1/g,""))}options[name]=value}for(i=0;i<children.length;i++){if(!context.optionsPath){context.optionsPath=[]}optionName=children[i].nodeName.toLowerCase();if(optionName==="content"){continue}optionName=convertToCamelCase(optionName);var opts=$.ui[nodeName].prototype.options;if(context.optionsPath[0]==="features"&&options.name){opts=$.ui[nodeName.replace("Hierarchical","")+options.name].prototype.options;context.optionsPath=[]}for(var j=0;j<context.optionsPath.length;j++){if(opts[context.optionsPath[j]]&&context.optionsPath[j]!=="columnLayouts"){opts=opts[context.optionsPath[j]]}}if(children[i].childElementCount>0){var option;if(children[i].hasAttributes()||getPropertyType(opts,optionName)==="object"){option={}}else{option=[]}if($.type(options)==="array"){options.push(option);children[i].optionsPath=context.optionsPath;extractOptions(nodeName,children[i],options[options.length-1],element,scope)}else{options[optionName]=option;children[i].optionsPath=context.optionsPath.concat(optionName);extractOptions(nodeName,children[i],options[optionName],element,scope)}}else{if(!context.hasAttributes()&&$.type(options)==="array"){if(children[i].nextSibling&&children[i].nextSibling.textContent.trim()!==""){options.push(children[i].nextSibling.textContent.trim())}else{options.push({});extractOptions(nodeName,children[i],options[options.length-1],element,scope)}}else{if(children[i].nextSibling&&children[i].nextSibling.textContent.trim()!==""){options[optionName]=children[i].nextSibling.textContent.trim()}else{options[optionName]={};extractOptions(nodeName,children[i],options[optionName],element,scope)}}}}return options}function getHtml(selector){return $(selector).html()}var module=angular.module("igniteui-directives",[]);var igniteElementDirectiveConstructor=function(){return{restrict:"EAC",require:"?ngModel",template:function(element,attrs){var content,template,templateParts;attrs.$set("data-ig-control-name",this.name);content=element.find("content").html();template=$.ig.angular[this.name]&&$.ig.angular[this.name].element||"<div></div>";if(content){templateParts=template.match("(<[^/][\\w]+>)(</[\\w]+>)");if(templateParts.length===3){template=templateParts[1]+content+templateParts[2]}}return template},replace:true,link:function(scope,element,attrs,ngModel){scope.getHtml=scope.getHtml||getHtml;var controlName=attrs["data-ig-control-name"];if(controlName){if(element.context){var options=scope.$eval(attrs[controlName])||extractOptions(controlName,element.context,{},element,scope);if(element.removeAttr){element.removeAttr("width").removeAttr("height")}if(attrs.source){options.dataSource=scope.$eval(attrs.source)}else{attrs.source=attrs[controlName]+".dataSource";attrs.primaryKey=options.primaryKey}if($.ig.angular[controlName]&&$.ig.angular[controlName].bindEvents){$.ig.angular[controlName].bindEvents(scope,element,attrs,ngModel)}scope.$on("$destroy",function(){if(element.data(controlName)){element[controlName]("destroy")}if($.ig.angular[controlName]&&$.ig.angular[controlName].events&&$.ig.angular[controlName].events.length){element.off($.ig.angular[controlName].events.join(" "))}});element[controlName](options)}}}}};for(var control in $.ui){if(control.substring(0,2)==="ig"){module.directive(control,igniteElementDirectiveConstructor)}}})(angular,jQuery);