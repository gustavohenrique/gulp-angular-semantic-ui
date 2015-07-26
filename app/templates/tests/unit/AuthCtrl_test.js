angular = {
    module: function () { return this; },
    controller: function (name, func) {
        angular[name] = func;
        return this;
    }
};

var expect = require('chai').expect;
require ('../../app/scripts/controllers/AuthCtrl');


describe('AuthCtrl', function() {
    beforeEach( function () {
        angular.AuthCtrl();
    });

    it('should contains the default username and password', function() {
        var scope = angular;
        expect(scope.user.username).to.equal('wrong-username');
        expect(scope.user.password).to.equal('wrong-password');
    });

});