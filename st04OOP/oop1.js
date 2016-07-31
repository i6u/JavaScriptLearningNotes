/**
 * Created by zhouweitao on 16/7/30.
 */
/*通过原型量扩展function来模拟创建对象*/
(function () {
    var n = 'abc';
    function Person(name) {
        this._name = name;
    }

    Person.prototype.say = function () {
        console.log('person say'+this._name);
    }
    window.Person = Person;
}());

var p = new Person();
p.say();

/*继承*/
(function () {
    function Student(name) {
        this._name = name;
    }
    /*Student继承Person*/
    Student.prototype = new Person();
    /*重写say方法*/
    var superSay = Student.prototype.say;
    Student.prototype.say = function () {
        /*调用父类say方法*/
        // console.log(this);
        superSay.call(this);    //此处的this指Person
        console.log('student say'+this._name);
    }
    window.Student = Student;
}());

var s = new Student('+ime');
s.say();
