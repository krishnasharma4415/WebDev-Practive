console.log("Hello World");

setTimeout(() => {
    console.log("I am inside timeout");
}, 2000);

console.log("The end");

// const fn = () => {
//     console.log("nothing");
// }
// const callback = (arg) => {
//     console.log(arg);
// }

const loadScript = (src, callback) => {
    let sc = document.createElement("script");
    sc.src = src;
    sc.onload = callback("Krishna");
    document.head.append(sc);
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", (arg, fn) => {
    console.log(arg);
    fn("argument", ()=>{
        fn2("arguments", ()=>{

        })
    });
});