// Ude Import export (MANDATORY)
// Onclicking store the news in local storage with key "news" so that you can access that on news.html page
import { navbar } from "../components/navbar.js";

document.querySelector("#navbar").innerHTML=navbar()



let inF=()=>{
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append(res.articles)
    })
}

let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=in"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append(res.articles)
    })

document.querySelector("#in").addEventListener("click",inF)
let append=(data)=>{
    document.querySelector("#results").innerHTML=null;
   data.forEach(({title,urlToImage, description})=>{
         let box=document.createElement("div")
        box.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description
        box.append(img,h3,p);
        document.querySelector("#results").append(box)
   })
}


let inC=()=>{
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=ch"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append2(res.articles)
    })
}

document.querySelector("#ch").addEventListener("click",inC)
let append2=(data)=>{
    document.querySelector("#results").innerHTML=null;
   data.forEach(({title,urlToImage, description})=>{
         let box=document.createElement("div")
        box.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description
        box.append(img,h3,p);
        document.querySelector("#results").append(box)
   })
}


let inUs=()=>{
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=us"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append3(res.articles)
    })
}

document.querySelector("#us").addEventListener("click",inUs)
let append3=(data)=>{
    document.querySelector("#results").innerHTML=null;
   data.forEach(({title,urlToImage, description})=>{
         let box=document.createElement("div")
        box.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description
        box.append(img,h3,p);
        document.querySelector("#results").append(box)
   })
}


let inUk=()=>{
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=uk"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append4(res.articles)
    })
}

document.querySelector("#us").addEventListener("click",inUk)
let append4=(data)=>{
    document.querySelector("#results").innerHTML=null;
   data.forEach(({title,urlToImage, description})=>{
         let box=document.createElement("div")
        box.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description
        box.append(img,h3,p);
        document.querySelector("#results").append(box)
   })
}

let inNz=()=>{
    let url="https://masai-mock-api.herokuapp.com/news/top-headlines?country=nz"
    fetch(url)
    .then((res)=>{
       return res.json();
    })
    .then((res)=>{
      console.log(res.articles)
      append5(res.articles)
    })
}

document.querySelector("#nz").addEventListener("click",inNz)
let append5=(data)=>{
    document.querySelector("#results").innerHTML=null;
   data.forEach(({title,urlToImage, description})=>{
         let box=document.createElement("div")
        box.setAttribute("class","news")
        let img=document.createElement("img");
        img.src=urlToImage;
        let h3=document.createElement("h3");
        h3.innerText=title;
        let p=document.createElement("p");
        p.innerText=description
        box.append(img,h3,p);
        document.querySelector("#results").append(box)
   })
}



