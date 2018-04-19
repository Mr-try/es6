/******基本概念******/
function* firstGenerator(){
    yield 'hello'
    yield 'try'
    return 'done'
}
const pointerObject = firstGenerator()
pointerObject.next() // {value: "hello", done: false}
pointerObject.next() // {value: "try", done: false}
pointerObject.next() // {value: "done", done: true}
pointerObject.next() // {value: undefined, done: true}
// 当done由false->true时pointerObject的[[GeneratorStatus]]值由suspended->closed

/*******yield******/
// 惰性求值只有当执行gen.next()时候才会计算
function* gen(){
    yield 123+888
}
// Generator函数可以没有yield语句（此时是单纯的暂缓执行函数），反之不行
function* step(){
    console.log(123+333)
}
const tmp = step()
setTimeout(()=>step.next(),2000)

/********next*******/
// yield本身没有返回值，next方法可以带一个参数作为上一条yield语句的返回值
function* f(){
    for(let i = 0; true ; i++){
        const reset = yield i
        if(reset) i = -1
    }
}
const g = f()
g.next() // {value:0,done:false}
g.next() // {value:1,done:false}
g.next() // {value:0,done:false}

/******遍历******/
function* foo(){
    yield 1
    yield 2
    yield 3
    yield 4
    return 5
}
for(let v of foo()){
    console.log(v)
}
// 1 2 3 4
[...foo()] // [1,2,3,4]
Array.from(foo()) // [1,2,3,4]
const tmp = foo()
tmp.next()
tmp.next()
tmp.return('foo') // {value:'foo',done:true}
tmp.next()  // {value:undifined,done:true}

/****** yield* ****/
function* f1(){
    yield 1
    yield 2
}
function* f2(){
    yield 3
    yield* f1()
    yield 4
}
// f2等同于
function* f3(){
    yield 3
    yield 1
    yield 2
    yield 4
}
/*********this*******/
function* F(){
    yield this.x = 1
    yield this.y = 3
}
const obj = {}
const f = F.bind(obj)()

f.next() // obj = {x:1}
f.next() // obj = {x:1,y:3}