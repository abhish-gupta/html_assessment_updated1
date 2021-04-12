$(document).ready(function() {
    $('#button').click(function(){
        var name = $('#fname').val();
        var email = $('#fmail').val();
        var comment =$('#msg').val();
        if(name==''||name==null||email==''||email==null||comment==''||comment==null){
            alert("All fields are mandatory!!!");
            return false;
        }
        if(email.indexOf('@')==0)
        {
            alert("Invalid email address!!");
            return false;
        }    
        if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
        {
            alert("Invalid Email address!!");
            return false;
        }
    })
})