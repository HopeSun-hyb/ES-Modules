// 变量声明时导出
// export let name = "export-module"
// export function printModule() {
//     console.log("I am module");
// }


let name = "export-module"
let describe = "I am module file."
function printModule() {
    console.log("I am module");
}

let defaultM = "我是defaultM "

export {
    name,
    // 重命名，在导入时也要引入重命名
    describe as moduleDescribe,
    printModule
}
// 默认导出的变量，在接收时可以使用任意变量名接收
export default defaultM