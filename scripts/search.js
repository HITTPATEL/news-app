// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar()

let search=(e)=>{
    if(e.key==="Enter"){
        let query=document.getElementById("search_input").value; 
        let url=`https://masai-mock-api.herokuapp.com/news?q=${query}`
        fetch(url)
        .then((res)=>{
               return res.json()
        })
        .then((res)=>{
            console.log(res)
            localStorage.setItem("search",JSON.stringify(res))
            window.location.href="search.html"
        })
    }
    
}
document.querySelector("#search_input").addEventListener("keypress",search)

let data=JSON.parse(localStorage.getItem("search"))
console.log(data);

document.querySelector("#results").innerHTML=null;
data.articles.forEach(({title,urlToImage, description})=>{
      let box=document.createElement("div")
     box.setAttribute("class","news")
     box.addEventListener("click",function(){
         myFun(data)
     })
     let img=document.createElement("img");
     img.src=urlToImage;
     let h3=document.createElement("h3");
     h3.innerText=title;
     let p=document.createElement("p");
     p.innerText=description
     box.append(img,h3,p);
     document.querySelector("#results").append(box)
})


let myFun=(data)=>{
     console.log(data.articles)
}

