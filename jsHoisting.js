//1
console.log(hello);//undef                                
var hello = 'world';//vars are function scoped and this was not hoisted to allow the var to be accessible before the declaration

//2
var needle = 'haystack';
test();
function test(){
	var needle = 'magnet';
	console.log(needle);//magnet-> var needle was function scoped and defined as magnet within the function called. The function was globally scoped thus allowing it to be fwd referenced
}

//3
var brendan = 'super cool';
function print(){
	brendan = 'only okay';
	console.log(brendan);
}
console.log(brendan)//super cool-> the var was not declared within the func unlike above, this meant the var called brendan was defined outside the funct and printed outside the funct also. Moreover the func called print was not actually called

//4
var food = 'chicken';
console.log(food);//chicken -> the print was from the var declared and defined previously
eat();//fwd referenced the func called eat
function eat(){//globally hoisted to allow fwd ref
	food = 'half-chicken';//food as a var was function scoped to be defined as half-chicken
	console.log(food);//print half-chicken ->func scoped food 
	var food = 'gone';//var food re-defined
}

//5
mean();//func called but not hoisted allowing fwd ref
console.log(food);//food not defined outside of func
var mean = function() {//mean as a var was not hoisted allowing fwd reference above
	food = "chicken";
	console.log(food);
	var food = "fish";
	console.log(food);
}
console.log(food);//food not defined outside of funct

//6
console.log(genre);//var called genre not hoisted ahead of func log, not allowed to fwd ref the var//print undef
var genre = "disco";//var declared and assigned
rewind();//func fwd referenced
function rewind() {//func declared and defined
	genre = "rock";//func scoped defined
	console.log(genre);//prints func scoped genre as rock
	var genre = "r&b";//funccoped var redefined as r&b
	console.log(genre);//print r&b
}
console.log(genre);//access global scop var print disco

//7
dojo = "san jose";//func defined globally
console.log(dojo);//dojo accessed print san jose
learn();//learn fwd referenced
function learn() {//func declared and defined
	dojo = "seattle";//func scoped dojo defined as seattle
	console.log(dojo);//print seattle as func scoped dojo
	var dojo = "burbank";//func scoped dojo redefined as burbank
	console.log(dojo);//print burbank
}
console.log(dojo);//print global scoped dojo as san jose again

//8
console.log(makeDojo("Chicago", 65));//called func with args chicago and 65, fwd ref func called makeDojo
console.log(makeDojo("Berkeley", 0));//called fun with args berkley and 0//since dojo is a constant the obj cannot be changed and this is an error when called
function makeDojo(name, students){//func defined
        const dojo = {};//constant called dojo as obj
        dojo.name = name;//obj key called name set to arg paramenter for name or Chicago
        dojo.students = students;//key called students set to arg parameter for students of 65
        if(dojo.students > 50){//bool if students greater than 65
            dojo.hiring = true;//key called hiring set to val of true
        }
        else if(dojo.students <= 0){//bool is student val < 0
            dojo = "closed for now";
        }
        return dojo;//return the obj called dojo
}