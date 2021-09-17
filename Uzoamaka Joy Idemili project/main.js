 function onclickmenu(){
     document.getElementById('navbar').classList.toggle('change');
     document.getElementById('nav').classList.toggle('change-btn');
     
 }

function mycomments(){
    var comment = document.getElementById("rate-comment");
    if(comment.style.display == "none"){
        comment.style.display ="block";}
        else{comment.style.display = "none";
        }
    }

function menuslide(){
    var menus = document.getElementById("menulist");
    if(menus.style.display == "none"){
        menus.style.display ="block";}
        else{menus.style.display = "none";
        }
    }

function validate(){
    if (document.myform.name.value == ""){
        alert ("Please provide name");
        document.myform.name.focus();
        return false;
    }
    if (document.myform.phone.value == ""){
        alert ("Please provide phone number");
        document.myform.phone.focus();
        return false;
    }
    if (document.myform.email.value == ""){
        alert ("Please provide email");
        document.myform.email.focus();
        return false;
    }
    if (document.myform.subject.value == ""){
        alert ("Please provide Message Subject");
        document.myform.subject.focus();
        return false;
    }if (document.myform.message.value == ""){
        alert ("Please write message");
        document.myform.message.focus();
        return false;
    }
    return(true);
}
function validatedata(){
    if (document.nxtform.rates.value == ""){
        alert ("Please rate us");
        document.nxtform.rates.focus();
        return false;
    }
    if (document.nxtform.name.value == ""){
        alert ("Please provide phone number");
        document.nxtform.name.focus();
        return false;
    }
    if (document.nxtform.comments.value == ""){
        alert ("Please provide email");
        document.nxtform.comments.focus();
        return false;
    }
    return(true);
}

