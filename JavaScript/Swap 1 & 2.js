function swap(){
    var s1,s2;
    s1=document.getElementById('flex1').src;
    s2=document.getElementById('flex2').src;
    document.getElementById('flex2').src=s1;
    document.getElementById('flex1').src=s2;
}