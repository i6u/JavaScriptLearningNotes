/**
 * Created by zhouweitao on 16/7/31.
 */
(function () {
    var n = 'ime';
    function Person(name) {
        var _this ={}
        _this._name = name;
        _this.sayHello = function () {
            console.log('Person say'+_this._name+n);
        }
        return _this;
    }
    window.Person = Person;
}())

function Teacher(name) {
    var _this = Person(name);
    var superSay = _this.sayHello;
    _this.sayHello = function () {
        superSay.call(_this);
        console.log('Teacher say'+_this._name);
    }
    return _this;
}
var t = Teacher('abc');
t.sayHello();