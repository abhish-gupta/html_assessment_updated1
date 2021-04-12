function validate()
{
    var name = document.ContactUs.Name.value;
    var email = document.ContactUs.Email.value;
    var msg = document.ContactUs.Comment.value;
                
    if(name==null || name=="" || msg==null || msg=="" || email==null || email=="")
    {
        alert("All Fields are Mandatory!!");
        return false;
    }
    if(email.indexOf('@')==0)
    {
        alert("Invalid email address");
        return false;
    }    
    if ((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.'))
    {
        alert("Invalid Email address");
        return false;
    }
}