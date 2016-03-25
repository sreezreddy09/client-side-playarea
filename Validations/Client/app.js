$(function(){
    var dialog, form;
    dialog = $('#dialogBox').dialog({
        autoOpen : false,
        height : 570,
        width : 800,
        modal : true,
        buttons : {
            "Create an account" : function (event){
                $(this).attr('disabled','disabled');
                event.preventDefault();
                validateUserInputValues();
            },
            Cancel : function (){
                dialog.dialog('close');
            }
        },
        close : function (){
            clearUserInputValues();
        }
    });
    
    $('#createUser').on('click', function(){
        dialog.dialog('open');
    });
    function validateUserInputValues(){
        var validationRules = {
            rules: {
                name : {
                    required : true,
                    minlength : 3
                },
                emailId : {
                    required : true,
                    email :true
                },
                password : {
                    required :true
                },
                confirmPassword : {
                    required : true,
                    equalTo : '#password'
                },
                phone : {
                    required : true,
                    phoneUS : true
                },
                website :{
                    required : true,
                    url: true
                },
                creditCard : {
                    required : true,
                    creditcard : true
                },
                zipCode : {
                    required : true,
                    digits : true
                }
                
            },
            messages : {
                name: {
                    required : 'Name is required',
                    minlength : 'Must have minimum 3 charecters'
                },
                emailId : {
                    required : 'EmailID is required',
                    email : 'Enter a valid email Id'
                },
                password : {
                    required : 'Password is must'
                },
                confirmPassword : {
                    required : 'Password is required',
                    equalTo : 'Must match the password entered above'
                },
                phone : {
                    required : 'Phone No. is required',
                    phoneUS : 'Enter a valid phone number'
                },
                website : {
                    required : 'Website is required',
                    url: 'Enter a valid web address'
                },
                creditCard : {
                    required : 'Credit Card is required',
                    creditcard : 'Enter a valid Credit Card number'
                },
                zipCode : {
                    required : 'Zip Code is required',
                    digits : 'Enter 5-digit Zip Code number'
                }
            }
            
        };
        $('#createAccountForm').validate(validationRules);
        var isValid = $('#createAccountForm').valid();
        if(isValid){
                    addUser();
                    clearUserInputValues();
                    dialog.dialog('close');
                }else{
                    $('#createAccountForm').hasClass('error');
                    alert('Form is invalid');
                    
                }
    }
    function addUser (){
        var userInsert = '';
        userInsert += '<tr>'+
            '<td>'+ $('#name').val()+'</td>'+
            '<td>'+ $('#emailId').val()+'</td>'+
            '<td>'+ $('#password').val()+'</td>'+
            '<td>'+ $('#phone').val()+'</td>'+
            '<td>'+ $('#website').val()+'</td>'+
            '<td>'+ $('#creditCard').val()+'</td>'+
            '<td>'+ $('#zipCode').val()+'</td>'+
                      '</tr>';
        $('#users tbody').append(userInsert);
    }
    function clearUserInputValues(){
        $('#name').val('');
        $('#emailId').val('');
        $('#password').val('');
        $('#confirmPassword').val('');
        $('#phone').val('');
        $('#website').val('');
        $('#creditCard').val('');
        $('#zipCode').val('');
    }
});