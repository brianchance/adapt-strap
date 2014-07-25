// ========== initialize documentation app module ========== //
angular.module('adaptv.adaptStrapDocs', [
  'ngSanitize',
  'adaptv.adaptStrap'
])

// ========== documentation support controllers ========== //
.controller('layoutCtrl', ['$scope', '$anchorScroll', '$location', 'adaptStrapModules',
  function ($scope, $anchorScroll, $location, adaptStrapModules) {
    $scope.modules = adaptStrapModules;
    $scope.scrollTo = function (id, $event) {
      $event.preventDefault();
      $location.hash(id);
      $anchorScroll();
    };
  }
])

// ========== documentation support directives ========== //
.directive('markdown', function ($compile, $http) {
  var converter = new Showdown.converter();
  return {
    restrict: 'E',
    replace: true,
    link: function (scope, element, attrs) {
      function load() {
        if ('src' in attrs) {
          $http.get(attrs.src).then(function (data) {
            var format = attrs.src.split('.');
            if (format[format.length - 1] === 'js' || format[format.length - 1] === 'html') {
              data.data = '```\n' + data.data + '\n```';
            }
            element.html(converter.makeHtml(data.data));
            element.find('pre code').each(function (i, block) {
              hljs.highlightBlock(block);
            });
          });
        } else {
          element.html(converter.makeHtml(element.html()));
          element.find('pre code').each(function (i, block) {
            hljs.highlightBlock(block);
          });
        }
      }
      attrs.$observe('src', function () {
        load();
      });
    }
  };
})
.directive('codeNavigator', [function () {
  return {
    link: function (scope) {
      scope.currentFile = scope.files[0];
      scope.setCurrentFile = function (file) {
        scope.currentFile = file;
      };
    },
    restrict: 'E',
    scope: {
      files: '=',
      basePath: '@'
    },
    templateUrl: 'docs/codeNavigator.html'
  };
}])
.directive('componentOptions', [function () {
  return {
    link: function (scope) {

    },
    restrict: 'E',
    scope: {
      module: '='
    },
    templateUrl: 'docs/componentOptions.html'
  };
}]);