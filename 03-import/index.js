import defaultM ,{ name, printModule } from './module.js'
console.log(name)
console.log(defaultM)
printModule();

// 动态加载模块
if(true) {
    import('./module.js').then(module => {
        console.log(module)
    })
}