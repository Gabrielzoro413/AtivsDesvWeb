document.addEventListener("DOMContentLoaded",()=>{
    loadLivros()
})

function addLivro(){
    let livroInput = document.getElementById("livroInput")
    let livroText = livroInput.value.trim()

    if(livroText === ""){
        alert("digite uma livro valida")
        return;
    }

    let livroList = document.getElementById("livroList")
    let item = document.createElement("li")
    item.innerHTML = `
    <span onclick="toggleLivro(this)">${livroText}</span>
    <button class = "delete-btn" onclick="deleteLivro(this)">X</button> `

    livroList.appendChild(item)
    livroInput.value = ""

}

function toggleLivro(element){
    element.parentElement.classList.toggle("completed")

}

function deleteLivro(button){
    button.parentElement.remove()

}

function saveLivros(){
    let livros = [];
    document.querySelectorAll("#livroList li").forEach((livro)=>{
        livros.push({
            livro: livro.innerText.replace("X","").trim(),
            status: livro.classList.contains("completed") 
        })
    })
    localStorage.setItem("livros", JSON.stringify(livros))
}

function loadLivros(){
    let livro = JSON.parse(localStorage.getItem("livroList") || [])
    let livroList = document.getElementById("livroList")
    livro.forEach(element =>{
    item.innerHTML = `
    <span onclick="toggleLivro(this)">${livroText}</span>
    <button class = "delete-btn" onclick="deleteLivro(this)">X</button> `

    if(element.status){
        item.classList.add("completed")
    }



   livroList.appendChild(item)
    saveLivros()
    })
}