var allproducts = document.querySelectorAll(".list .list-item")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalprice = 0 

var theresult = document.querySelector("#result")


allproducts.forEach( function(item){
      item.onclick = function (){

            totalprice += +(item.getAttribute("price"))

            content.innerHTML += "<li>" + item.textContent + "</li>" + "<br>"

            if(content.innerHTML != "")
            {
                btn.style.display = "block"
            }
      }
})

btn.onclick = function()
{
    theresult.innerHTML = totalprice + "$"
}























// var allproducts = document.querySelectorAll(".list li")
// var content = document.querySelector("#content")
// var btn = document.querySelector("#btn1")
// var totalprice = 0 


// allproducts.forEach( function(item){
//       item.onclick = function (){

//             totalprice += +(item.getAttribute("price"))

//             content.innerHTML += item.textContent + "<br>"

//             if(content.innerHTML != "")
//             {
//                 btn.style.display = "block"
//                 btn.style.backgroundColor = "red"
//             }
//       }
// })

// btn.onclick = function()
// {
//     console.log(totalprice)
// }
































