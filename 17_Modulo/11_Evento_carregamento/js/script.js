// window.addEventListener("load", function (){
//     alert("Assine os termos de uso");
// });

window.addEventListener("beforeunload", function (e) {
    e.returnValue = null;
})
