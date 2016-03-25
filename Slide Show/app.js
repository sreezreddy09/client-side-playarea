/*Created by SrikanthReddy on 2/5/2016.*/
$(function(){
    var counter = 0;
    var images =['Image-1','Image-2','Image-3', 'Image-4', "Image-5"];
    $('img').attr('src', 'Images/'+ images[counter]+ '.jpg');

    $('#nextButton').click(function(){
       if(counter< images.length-1){
           counter++;
           $('img').attr('src', 'Images/'+images[counter]+'.jpg');
       }
    });
    $('#prevButton').click(function(){
        if(counter>0){
            counter--;
            $('img').attr('src','Images/'+images[counter]+'.jpg');
        }
    });
    $('#nextButton').on('click', function(){
        $('img').animate({'height':'show'},2000, 'swing');
    });
});