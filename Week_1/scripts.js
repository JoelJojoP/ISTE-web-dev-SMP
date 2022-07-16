var em = document.getElementById("mail");
var n = document.getElementById("user_name");
var sub = document.getElementById("sub_button");

sub.onclick = function (){
    var checklist = true;
    var mailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-]/;
    if(n.value == ""){
        checklist = false;
        n.style.borderColor = "red";
        document.getElementById("name_error").textContent = "Please enter a valid username"
    }
    if(!em.value.match(mailRegex)){
        checklist = false;
        em.style.borderColor = "red";
        document.getElementById("mail_error").textContent = "Please enter a valid e-mail address"
    }
    if(checklist)
        location.href = "New_Page.html";
}