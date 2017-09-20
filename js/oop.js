// 一.对象
// 1.创建对象
// 第一种方式
var People = {
    name : "eavan",
    age : 24,
    getName : function(){
        alert(this.name);        //eavan
    }
}
// 第二种方式
var People = new Object();
People.name = "eavan";
People.age = 24;
People.getName = function(){
    alert(this.name);
}
// =》
var People  = {};                      //我们创建了一个空对象People
People.__proto__ = Object.prototype;   //我们将这个空对象的__proto__成员指向了Object函数对象prototype成员对象
Object.call(People);         		   //我们将Object函数对象的this指针替换成People，然后再调用Object函数

// 2.封装
var Person = function(){
    var name = "eavan";              //私有属性
    function checkName(){};          //私有方法

    this.myName = "gaof";            //对象共有属性
    this.myFriends = ["aa","bb","cc"];
    this.copy = function(){}         //对象共有方法

    this.getName = function(){       //构造器方法
        return name;
    };            
}

// 3.理解原型
Person.isChinese = true;                  //类的静态共有属性（对象不能访问）
Person.prototype.sex = "man" ;            //类的共有属性
Person.prototype.frends = ["gao","li","du"];
Person.prototype.isBoy = function(){};    //类的共有方法
// 对绑定在prototype上的引用类型的变量，由于被所有对象所共有，
// 其中某一个对象对该数据进行修改，
// 当别的对象访问该数据的时候，所访问到的值就是被修改后的。
var person1 = new Person();
person1.frends.push("dd");
console.log(person1.frends);    //["gao", "li", "du", "dd"]
var person2 = new Person();
person2.frends.push("ee");
console.log(person2.frends);     //["gao", "li", "du", "dd", "ee"]

person2.sex = "woman";
console.log(person1.sex);                //man
console.log(person2.sex);                //woman

console.log(person1.hasOwnProperty("sex"));        //原型中的属性，返回false
console.log(person2.hasOwnProperty("sex"));        //实例中的属性，返回true

// 二.继承

// 1.原型链继承
function Super(){
    this.val = true;
    this.arr = ["a"];
}
function Sub(){
    //...
}
Sub.prototype = new Super();

var sub = new Sub();
console.log(sub.val)        //true

// 子类的所有实例共享了父类中的引用类型属性
function Super(){
    this.friends = ["peng","gao"];
}
function Sub(){
    //...
}
Sub.prototype = new Super();
var sub1 = new Sub();
var sub2 = new Sub();
sub1.friends.push("du");
console.log(sub2.friends);            //["peng", "gao", "du"]

// 2.构造函数继承
function Super(){
    this.val = true;
    this.arr = ["a"];
}
function Sub(){
    Super.call(this);
}
var sub = new Sub();
console.log(sub.val)        //true

// 3.组合继承
function Super(){
    this.val = true;
    this.arr = ["a"];
}
function Sub(){
    Super.call(this);                    //{2}
}
Sub.prototype = new Super();                //{1}
Sub.prototype.constructor = Sub;            //{3}
var sub = new Sub();
console.log(sub.val)        //true

// 4.寄生组合式继承
function inheritObject(obj){
    var F = function(){};
    F.prototype = obj;
    return new F();
}
function Super(){
    this.val = 1;
    this.arr = [1];
}
Super.prototype.fun1 = function(){};
Super.prototype.fun2 = function(){};

function Sub(){
    Super.call(this);
}
var p = inheritObject(Super.prototype);         //{1}
p.constructor = Sub;                            //{2}
Sub.prototype = p;                              //{3}
 
var sub = new Sub();

// 三.多态
// 同一个方法的多种调用方式，
// 在javascript中，通过arguments对象对传入的参数做判断就可以实现多种调用方式

function Add(){
    function zero(){
        return 10;
    }
    function one(num){
        return 10 + num;
    }
	function    two(num1, num2){
	    return num1 + num2;
	}
	this.add = function(){
	    var arg = arguments,
	        len = arg.length;
	    switch (len){
	        case 0:
	            return zero();
	        case 1:
	            return one(arg[0]);
	        case 2:
	            return two(arg[0], arg[1]);
	        }
	    }
	}
}
var A = new Add();
console.log(A.add());                //10
console.log(A.add(5));              //15
console.log(A.add(6, 7));          //13