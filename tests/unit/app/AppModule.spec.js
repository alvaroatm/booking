describe('app', function () {

  beforeEach(module('app'));

  it('should load everything', inject(function () {
    expect(true).toBe(true);
  }));

  it('should be able to connect firebase', inject(function($firebaseObject){

    var ref = new Firebase("https://haicku-starter-app.firebaseio.com/data");

    var syncObject = $firebaseObject(ref);

  }));

});
