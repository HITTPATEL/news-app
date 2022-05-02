

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