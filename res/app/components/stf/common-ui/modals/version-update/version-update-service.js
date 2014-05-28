module.exports = function FatalMessageServiceFactory($modal, $location, socket) {
  var service = {}

  var ModalInstanceCtrl = function ($scope, $modalInstance, device) {
    $scope.ok = function () {
      $modalInstance.close(true)
      $location.path('/')
    }

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel')
    }
  }

  service.open = function () {
    var modalInstance = $modal.open({
      template: require('./version-update.jade'),
      controller: ModalInstanceCtrl
    })

    modalInstance.result.then(function (selectedItem) {
    }, function () {
    })
  }

  return service
}
