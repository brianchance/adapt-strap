/**
 * adapt-strap
 * @version v2.1.4 - 2015-01-28
 * @link https://github.com/Adaptv/adapt-strap
 * @author Kashyap Patel (kashyap@adap.tv)
 * @license MIT License, http://www.opensource.org/licenses/MIT
 */
(function(window, document, undefined) {
'use strict';

// Source: alerts.tpl.js
angular.module('adaptv.adaptStrap.alerts').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('alerts/alerts.tpl.html', '<div ng-show="settings.type !== \'\'" class="alert alert-{{ settings.type }} alert-dismissible fade in" role="alert"><button type="button" class="close" ng-click="close();" aria-label="Close"><span aria-hidden="true">&times;</span></button><h4><span ng-class="iconMap[settings.type]"></span>&nbsp;&nbsp; <strong>{{ settings.caption }}</strong> {{ settings.message }}</h4></div>');
  }
]);

// Source: infinitedropdown.tpl.js
angular.module('adaptv.adaptStrap.infinitedropdown').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('infinitedropdown/infinitedropdown.tpl.html', '<div class="ad-infinite-list-container"><div class="dropdown"><button type="button" class="dropdown-toggle" ng-class="attrs.btnClasses || \'btn btn-default\'" data-toggle="dropdown"><span ng-if="!attrs.labelDisplayProperty || !selectedItems.length">{{ attrs.initialLabel || \'Select\' }}</span> <span ng-if="attrs.labelDisplayProperty && selectedItems.length">{{ adStrapUtils.getObjectProperty(selectedItems[selectedItems.length - 1], attrs.labelDisplayProperty) }}</span> <span class="caret"></span></button><ul class="dropdown-menu" role="menu" ng-style="localConfig.dimensions"><li class="text-overflow" data-ng-repeat="item in items.list" ng-class="{\'active\': adStrapUtils.itemExistsInList(item, selectedItems)}" ng-click="addRemoveItem($event, item, selectedItems)"><a role="menuitem" tabindex="-1" href=""><span ng-if="attrs.displayProperty">{{ adStrapUtils.getObjectProperty(item, attrs.displayProperty) }}</span> <span ng-if="attrs.template" ad-compile-template="{{ attrs.template }}"></span> <span ng-if="attrs.templateUrl" ng-include="attrs.templateUrl"></span></a></li><li class="text-overflow text-center" ng-style="{\'opacity\': localConfig.loadingData ? 1 : 0}"><a role="menuitem" tabindex="-1" href=""><ad-loading-icon></ad-loading-icon></a></li></ul></div></div>');
  }
]);

// Source: loadingindicator.tpl.js
angular.module('adaptv.adaptStrap.loadingindicator').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('loadingindicator/loadingindicator.tpl.html', '<div class="ad-loading-overlay-container" ng-class="containerClasses" ng-style="{\'z-index\': zIndex || \'1000\',\'position\': position || \'absolute\'}" ng-show="loading"><div class="wrapper"><div class="loading-indicator"><ad-loading-icon loading-icon-size="{{ loadingIconSize }}" loading-icon-class="{{ loadingIconClass }}"></ad-loading-icon></div></div></div>');
  }
]);

// Source: tableajax.tpl.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/tableajax.tpl.html', '<div class="ad-table-ajax-container" ng-if="items.paging.totalPages || localConfig.loadingData || !attrs.itemsNotFoundMessage"><table class="ad-sticky-table {{ attrs.tableClasses || \'table\' }}" ng-if="attrs.tableMaxHeight" ng-class="{\'ad-fixed-layout\': attrs.tableMaxHeight}"><thead><tr class="ad-user-select-none" ng-include="\'tableajax/headerRowContent.html\'"></tr></thead></table><div class="ad-table-container" ng-style="{\'max-height\': localConfig.tableMaxHeight}"><table class="{{ attrs.tableClasses || \'table\' }}" ng-class="{\'ad-fixed-layout\': attrs.tableMaxHeight}"><thead><tr class="ad-user-select-none" ng-if="!localConfig.tableMaxHeight" ng-include="\'tableajax/headerRowContent.html\'"></tr></thead><tbody><tr ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tableajax/rowContent.html\'"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" ng-repeat-end><td colspan="{{ columnDefinition.length + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr></tbody></table><ad-loading-overlay loading="localConfig.loadingData"></ad-loading-overlay></div><ng-include src="\'tableajax/pagination.html\'"></ng-include></div><div ng-if="localConfig.showNoDataFoundMessage && !localConfig.loadingData && attrs.itemsNotFoundMessage"><div class="alert alert-info" role="alert">{{ attrs.itemsNotFoundMessage }}</div></div>');
  }
]);

// Source: tablelite.tpl.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/tablelite.tpl.html', '<div class="ad-table-lite-container" ng-if="items.allItems.length || !attrs.itemsNotFoundMessage"><table class="ad-sticky-table {{ attrs.tableClasses || \'table\' }}" ng-if="attrs.tableMaxHeight" ng-class="{\'ad-fixed-layout\': attrs.tableMaxHeight}"><thead><tr class="ad-user-select-none" ng-include="\'tablelite/headerRowContent.html\'"></tr></thead></table><div class="ad-table-container" ng-style="{\'max-height\': attrs.tableMaxHeight}"><table class="{{ attrs.tableClasses || \'table\' }}" ng-class="{\'ad-fixed-layout\': attrs.tableMaxHeight}"><thead><tr class="ad-user-select-none" ng-if="!attrs.tableMaxHeight" ng-include="\'tablelite/headerRowContent.html\'"></tr></thead><tbody ng-if="!attrs.draggable" ng-include="\'tablelite/defaultRow.html\'"></tbody><tbody ng-if="attrs.draggable" ng-include="\'tablelite/draggableRow.html\'"></tbody></table></div><ng-include src="\'tablelite/pagination.html\'"></ng-include></div><div ng-if="!localConfig.localData.length && attrs.itemsNotFoundMessage"><div class="alert alert-info" role="alert">{{ attrs.itemsNotFoundMessage }}</div></div>');
  }
]);

// Source: treebrowser.tpl.js
angular.module('adaptv.adaptStrap.treebrowser').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('treebrowser/treebrowser.tpl.html', '<div class="ad-tree-browser-container" ng-class="{\'tree-bordered\': attrs.bordered}"><div data-level="0" class="tree-view"><div class="tree"><script type="text/ng-template" id="{{ localConfig.rendererTemplateId }}"><div class="content"\n' + '                     ng-style="{\'padding-left\': level * (attrs.childrenPadding || 15) + \'px\'}"\n' + '                     ng-class="{{ attrs.rowNgClass }}">\n' + '                    <div class="content-holder">\n' + '                        <div class="toggle">\n' + '                            <i ng-if="!item._ad_expanded && hasChildren(item) && !item._ad_loading"\n' + '                               ng-class="iconClasses.expand"\n' + '                               ng-click="toggle($event,item)"></i>\n' + '                            <i ng-if="item._ad_expanded && !item._ad_loading"\n' + '                               ng-class="iconClasses.collapse"\n' + '                               ng-click="toggle($event,item)"></i>\n' + '                            <span ng-if="item._ad_loading">\n' + '                                <i ng-class="iconClasses.loadingSpinner"></i>\n' + '                            </span>\n' + '                        </div>\n' + '                        <div class="node-content">\n' + '                          <ng-include ng-if="attrs.nodeTemplateUrl" src="attrs.nodeTemplateUrl"></ng-include>\n' + '                          <span ng-if="!attrs.nodeTemplateUrl">{{ item.name || "" }}</span>\n' + '                        </div>\n' + '                    </div>\n' + '                </div>\n' + '                <div ng-show="item._ad_expanded">\n' + '                    <div class="tree-level tree-sub-level"\n' + '                         onLoad="level=level+1"\n' + '                         ng-repeat="item in item[attrs.childNode]"\n' + '                         ng-include="\'{{ localConfig.rendererTemplateId }}\'">\n' + '                    </div>\n' + '                </div></script><div><div class="tree-level tree-header-level border" ng-if="attrs.nodeHeaderUrl"><div class="content" ng-style="{\'padding-left\': (attrs.childrenPadding || 15) + \'px\'}"><div class="content-holder"><div class="toggle"></div><div class="node-content ad-user-select-none" ng-include="attrs.nodeHeaderUrl"></div></div></div></div><div class="tree-level tree-top-level border" onload="level = 1" ng-repeat="item in treeRoot[attrs.childNode]" ng-include="\'{{ localConfig.rendererTemplateId }}\'"></div></div></div></div></div>');
  }
]);

// Source: headerRowContent.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/headerRowContent.html', '<th class="ad-select-cell" ng-if="attrs.rowExpandTemplate"><i></i></th><th data-ng-repeat="definition in columnDefinition" ng-click="sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplate" ad-compile-template="definition.columnHeaderTemplate"></div><div class="ad-display-inline-block" ng-if="definition.columnHeaderDisplayName" ng-bind="definition.columnHeaderDisplayName"></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.predicate == definition.sortKey"><i ng-class="iconClasses.sortAscending" ng-hide="localConfig.reverse"></i> <i ng-class="iconClasses.sortDescending" ng-show="localConfig.reverse"></i></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.predicate != definition.sortKey"><i ng-class="iconClasses.sortable"></i></div></th>');
  }
]);

// Source: pagination.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/pagination.html', '<div class="row"><div class="col-md-8 col-sm-8"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'" ng-show="items.paging.totalPages > 1"><li><a class="ad-cursor-pointer" ng-click="loadPage(1)" ng-disabled="items.paging.currentPage == 1"><i ng-class="iconClasses.firstPage"></i></a></li><li><a class="ad-cursor-pointer" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1"><i ng-class="iconClasses.previousPage"></i></a></li><li ng-repeat="page in localConfig.pagingArray" ng-class="{active: items.paging.currentPage == page}"><a class="ad-cursor-pointer" ng-click="loadPage(page)">{{ page }}</a></li><li><a class="ad-cursor-pointer" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.nextPage"></i></a></li><li><a class="ad-cursor-pointer" ng-click="loadLastPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.lastPage"></i></a></li></ul></div><div class="col-md-4 col-sm-4 text-right"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li ng-repeat="size in items.paging.pageSizes" ng-class="{active: items.paging.pageSize == size}"><a class="ad-cursor-pointer" ng-click="pageSizeChanged(size)">{{ size }}</a></li></ul></div></div>');
  }
]);

// Source: rowContent.js
angular.module('adaptv.adaptStrap.tableajax').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tableajax/rowContent.html', '<td class="ad-select-cell ad-cursor-pointer" ng-if="attrs.rowExpandTemplate" ng-click="adStrapUtils.addRemoveItemFromList($index, localConfig.expandedItems)"><i ng-class="iconClasses.expand" ng-if="!adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i> <i ng-class="iconClasses.collapse" ng-if="adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i></td><td data-ng-repeat="definition in columnDefinition" ng-style="{\'width\': definition.width}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ adStrapUtils.applyFilter(adStrapUtils.getObjectProperty(item, definition.displayProperty, item), definition.cellFilter) }}</div></td>');
  }
]);

// Source: defaultRow.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/defaultRow.html', '<tr ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tablelite/rowContent.html\'"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" ng-repeat-end><td colspan="{{ columnDefinition.length + !!attrs.draggable + !!attrs.selectedItems + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr>');
  }
]);

// Source: draggableRow.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/draggableRow.html', '<tr ad-drag="true" ad-drag-handle="true" ad-drop="true" ad-drag-data="item" ad-drop-over="onDragOver($data, $dragElement, $dropElement, $event)" ad-drop-end="onDropEnd($data, $dragElement, $dropElement, $event)" ad-drag-begin="onDragStart($data, $dragElement, $event)" ad-drag-end="onDragEnd($data, $dragElement, $event)" ng-repeat-start="item in items.list" ng-class="getRowClass(item, $index)" ng-include="\'tablelite/rowContent.html\'"></tr><tr ng-if="attrs.rowExpandTemplate && adStrapUtils.itemExistsInList($index, localConfig.expandedItems)" ng-repeat-end><td colspan="{{ columnDefinition.length + !!attrs.draggable + !!attrs.selectedItems + 1}}" ng-include="attrs.rowExpandTemplate"></td></tr>');
  }
]);

// Source: headerRowContent.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/headerRowContent.html', '<th class="ad-select-cell" ng-if="attrs.draggable"><i></i></th><th class="ad-select-cell" ng-if="attrs.rowExpandTemplate"><i></i></th><th class="ad-select-cell" ng-if="attrs.selectedItems && items.allItems"><input type="checkbox" class="ad-cursor-pointer" ng-click="adStrapUtils.addRemoveItemsFromList(items.allItems, selectedItems)" ng-checked="adStrapUtils.itemsExistInList(items.allItems, selectedItems)"></th><th data-ng-repeat="definition in columnDefinition" ng-click="sortByColumn(definition)" ng-class="{\'ad-cursor-pointer\': definition.sortKey}" ng-style="{\'width\': definition.width}"><div class="ad-display-inline-block" ng-if="definition.columnHeaderTemplate" ad-compile-template="definition.columnHeaderTemplate"></div><div class="ad-display-inline-block" ng-bind="definition.columnHeaderDisplayName"></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.predicate == definition.sortKey"><i ng-class="iconClasses.sortAscending" ng-hide="localConfig.reverse"></i> <i ng-class="iconClasses.sortDescending" ng-show="localConfig.reverse"></i></div><div ng-class="{\'ad-display-inline-block\': attrs.snugSortIcons, \'pull-right\': !attrs.snugSortIcons}" ng-if="definition.sortKey && localConfig.predicate != definition.sortKey"><i ng-class="iconClasses.sortable"></i></div></th>');
  }
]);

// Source: pagination.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/pagination.html', '<div class="row" ng-if="items.allItems.length > items.paging.pageSizes[0] && !attrs.disablePaging"><div class="col-md-8 col-sm-8 text-left"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li><a ng-click="loadPage(1)" class="ad-cursor-pointer" ng-disabled="items.paging.currentPage == 1"><i ng-class="iconClasses.firstPage"></i></a></li><li><a ng-if="!attrs.draggable" class="ad-cursor-pointer" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1"><i ng-class="iconClasses.previousPage"></i></a></li><li><a id="btnPrev" class="ad-cursor-pointer" ng-if="attrs.draggable" ad-drop="true" ad-drop-over="onNextPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-leave="onNextPageButtonLeave($data, $dragElement, $dropElement, $event)" ad-drop-end="onNextPageButtonDrop($data, $dragElement, $dropElement, $event)" ng-click="loadPreviousPage()" ng-disabled="items.paging.currentPage == 1"><i ng-class="iconClasses.previousPage"></i></a></li><li ng-repeat="page in localConfig.pagingArray" ng-class="{active: items.paging.currentPage == page}"><a ng-click="loadPage(page)" class="ad-cursor-pointer">{{ page }}</a></li><li><a ng-if="!attrs.draggable" class="ad-cursor-pointer" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.nextPage"></i></a></li><li><a ng-if="!attrs.draggable" class="ad-cursor-pointer" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.nextPage"></i></a></li><li><a id="btnNext" class="ad-cursor-pointer" ng-if="attrs.draggable" ad-drop="true" ad-drop-over="onNextPageButtonOver($data, $dragElement, $dropElement, $event)" ad-drop-leave="onNextPageButtonLeave($data, $dragElement, $dropElement, $event)" ad-drop-end="onNextPageButtonDrop($data, $dragElement, $dropElement, $event)" ng-click="loadNextPage()" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.nextPage"></i></a></li><li><a ng-click="loadLastPage()" class="ad-cursor-pointer" ng-disabled="items.paging.currentPage == items.paging.totalPages"><i ng-class="iconClasses.lastPage"></i></a></li></ul></div><div class="col-md-4 col-sm-4 text-right"><ul ng-class="attrs.paginationBtnGroupClasses || \'pagination pagination-sm\'"><li ng-repeat="size in items.paging.pageSizes" ng-class="{active: items.paging.pageSize == size}"><a ng-click="pageSizeChanged(size)" class="ad-cursor-pointer">{{ size }}</a></li></ul></div></div>');
  }
]);

// Source: rowContent.js
angular.module('adaptv.adaptStrap.tablelite').run([
  '$templateCache',
  function ($templateCache) {
    $templateCache.put('tablelite/rowContent.html', '<td class="ad-select-cell ad-cursor-pointer" ng-if="attrs.rowExpandTemplate" ng-click="adStrapUtils.addRemoveItemFromList($index, localConfig.expandedItems)"><i ng-class="iconClasses.expand" ng-if="!adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i> <i ng-class="iconClasses.collapse" ng-if="adStrapUtils.itemExistsInList($index, localConfig.expandedItems)"></i></td><td class="ad-select-cell ad-drag-handle" ng-if="attrs.draggable"><i ng-class="iconClasses.draggable"></i></td><td class="ad-select-cell" ng-if="attrs.selectedItems"><input type="checkbox" class="ad-cursor-pointer" ng-checked="adStrapUtils.itemExistsInList(item, selectedItems)" ng-click="adStrapUtils.addRemoveItemFromList(item, selectedItems)"></td><td data-ng-repeat="definition in columnDefinition" ng-style="{\'width\': definition.width}"><div ng-if="definition.templateUrl"><ng-include src="definition.templateUrl"></ng-include></div><div ng-if="definition.template"><span ad-compile-template="definition.template"></span></div><div ng-if="!definition.templateUrl && !definition.template">{{ adStrapUtils.applyFilter(adStrapUtils.getObjectProperty(item, definition.displayProperty), definition.cellFilter) }}</div></td>');
  }
]);


})(window, document);
