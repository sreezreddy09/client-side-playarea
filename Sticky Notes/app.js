/**
 * Created by SrikanthReddy on 2/3/2016.
 */
$(function() {
    $('#addTaskBtn').click(function () {
        createTask();
    });
    function createTask() {
        var userEnteredValue = $('#taskInput').val();
        var x = $('<input>').attr({type: "button", value: "Trash", id: "addBtnTrash",class: "btn btn-default"});
        var y = $('<input>').attr({type: "button", value: "Done", id: "addBtnDone",class: "btn btn-default"});
        $('<li class="todoItem">').text(userEnteredValue).appendTo('#taskContainer').prepend(y).prepend(x);
        $('#taskInput').val('');

        $('.todoItem').on('click','#addBtnDone' ,function(event){
            $(this).closest('li').addClass('done');
        });
        $('.todoItem').on('click','#addBtnTrash', function(event){
            $(this).closest('li').remove('.done');
        })

    }
    $('#taskInput').keydown(function(event){
        if(event.which === 13){
            createTask();
        }
    });
})

//        $('#addBtnTrash').click(function (event) {
//            $('#taskContainer>li').remove('.done');
//        });
//        $('<li class="todoItem">').text(userEnteredValue).appendTo('#taskContainer').prepend(y).prepend(x);
//        $('#addBtnDone').click(function (event) {
//            $('#taskContainer>li').addClass('done');
//        });
//        $('#addBtnTrash').click(function (event) {
//            $('#taskContainer>li').remove('.done');
//        });
//            $('#taskInput').val('');
//
//        }
//
//    $('#taskInput').keydown(function(event){
//        if(event.which === 13){
//            createTask();
//        }
//    });
//})