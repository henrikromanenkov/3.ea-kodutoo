const titles = document.querySelectorAll(".list-article")
//console.log(titles)

titles.forEach(element => {
    console.log(element.querySelector(".list-article__url"))
    element.querySelector(".list-article__url").addEventListener("click", (e)=>{
        e.preventDefault()
        console.log(e.target.href)
        if(!e.ctrlKey){
            window.location = e.target.href
        }
        //popup kommentaarid
        let comment = e.target.href + "/comments"
        console.log(comment)

    })
});

function loadComments(e){
    //comments-block
    console.log("Rdrfhsd")
    list-article.classList.toggle()
}
