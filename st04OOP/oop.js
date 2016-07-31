/**
 * Created by zhouweitao on 16/7/30.
 */
/*NO.1*/
var person = {
    name:'iwn',
    age:30,
    eat:function () {
        alert('eat');
    }
}
console.log(person.age+person.name,person.eat);

/*NO.2*/
function Person() {

}
Person.prototype = {
    name:'jobs',
    age:55,
    eat:function () {
        console.log('apple lnc');
    }
};

var p = new Person();
console.log(p.name);
p.eat();

/*NO.3*/


