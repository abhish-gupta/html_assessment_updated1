$(function(){
    var imgArray=new Array();
    imgArray[0]="images/a.jpg";
    imgArray[1]="images/b.jpg";
    imgArray[2]="images/c.jpg";
    imgArray[3]="images/d.jpg";

    var thisId=0;
    window.setInterval(function(){
        $('#map').attr('src',imgArray[thisId]);
        thisId++; 
        if (thisId==3) 
        {
            thisId=0;
        } 
    },2500);        
});