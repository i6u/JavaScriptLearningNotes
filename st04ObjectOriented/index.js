/**
 * Created by zhouweitao on 16/7/28.
 */

function A() {
    this.sayHehe = function () {
        console.log("hehe")
    }
}

//实例方法
A.prototype.sayHello = function () {
    console.log("Hello JS");
}
//静态方法
A.sayHi = function () {
    console.log("hello jikexueyuan")
}

var a = new A();
a.sayHello();
A.sayHi();


function B() {

}

//继承
B.prototype = new A();
var b = new B();

b.sayHello();
b.sayHehe();
a.sayHehe();