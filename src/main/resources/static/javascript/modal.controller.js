angular.module('modalDemo', [])
.controller('modalCtrl', function ($scope, $modal) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.animationsEnabled = true;

  $scope.open = function (size) {

    var modalInstance = $modal.open({
      animation: $scope.animationsEnabled,
      templateUrl: 'actorContentId',
      controller: 'modal',
      size: size,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });
});
