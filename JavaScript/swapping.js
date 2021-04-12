function swap(){
    var s1,s2,s3,s4;
    s1=document.getElementById('flex1').src;
    s2=document.getElementById('flex2').src;
    s3=document.getElementById('flex3').src;
    s4=document.getElementById('flex4').src;
    document.getElementById('flex1').src=s4;
    document.getElementById('flex2').src=s3;
    document.getElementById('flex4').src=s1;
    document.getElementById('flex3').src=s2;
}