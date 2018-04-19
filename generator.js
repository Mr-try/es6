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