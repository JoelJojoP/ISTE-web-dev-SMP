
document.getElementById("Make_Note").onclick = function (){
    const note_title = document.getElementById("Title");
    const note_cont = document.getElementById("cont");

    if(note_title.value==""){
        note_title.style.borderColor = "red";
        document.getElementById("TitleHelp").textContent = "Please enter a title";
    }
    else if(note_cont.value==""){
        note_cont.style.borderColor = "red";
        document.getElementById("contentHelp").textContent = "Please enter the content";
    }
    else{
        let Title = localStorage.getItem("title");
        let cont = localStorage.getItem("note");
        if(Title == null){
            TitleObj = [];
            NoteObj = [];
        }
        else{
            TitleObj = JSON.parse(Title);
            NoteObj = JSON.parse(cont);
        }
        TitleObj.push(note_title.value);
        NoteObj.push(note_cont.value);
        localStorage.setItem("title",JSON.stringify(TitleObj));
        localStorage.setItem("note",JSON.stringify(NoteObj));
        document.getElementById("note_form").reset();
    }
    update_list();
};

function update_list(){
    const list = document.getElementById("list_note");
    while(list.hasChildNodes())
        list.removeChild(list.firstChild);
    let titles = localStorage.getItem("title");
    let conts = localStorage.getItem("note");
    if(titles == null){
        TitleObj = [];
        NoteObj = [];
    }
    else{
        TitleObj = JSON.parse(titles);
        NoteObj = JSON.parse(conts);
    }
    for (let i = 0; i < TitleObj.length; i++) {
        const c_title = document.createElement("h5");
        c_title.classList.add("card-title");
        c_title.innerText = TitleObj[i];
        const c_cont = document.createElement("p");
        c_cont.classList.add("card-text");
        c_cont.innerText = NoteObj[i];
        const card_body = document.createElement("div");
        card_body.classList.add("card-body","bg-dark");
        card_body.appendChild(c_title);
        card_body.appendChild(document.createElement("hr"));
        card_body.appendChild(c_cont);
        const del = document.createElement("button");
        del.innerText = "Delete Note";
        del.classList.add("btn","btn-danger");
        del.setAttribute("onclick","Javascript:deleteNote(this.id)");
        del.setAttribute("id","${i}");
        card_body.appendChild(del);
        const card = document.createElement("div");
        card.classList.add("card");
        card.setAttribute("style","width: 50rem");
        card.appendChild(card_body);
        list.appendChild(card);
        list.appendChild(document.createElement("br"));
    }
}

function deleteNote(index) {  
    let titles = localStorage.getItem("title");
    let conts = localStorage.getItem("note");
    if(titles == null){
        TitleObj = [];
        NoteObj = [];
    }
    else{
        TitleObj = JSON.parse(titles);
        NoteObj = JSON.parse(conts);
    }
    TitleObj.splice(index,1);
    NoteObj.splice(index,1);
    localStorage.setItem("title",JSON.stringify(TitleObj));
    localStorage.setItem("note",JSON.stringify(NoteObj));
    update_list();
}