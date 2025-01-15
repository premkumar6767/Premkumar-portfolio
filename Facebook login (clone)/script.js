$(document).ready(function () {
    $(".signup").validate({
        rules: {
            fname: {
                required: true,
                minlength: 5,
            },
            sname: {
                required: true,
                minlength:5,
            },
            mail:{
                required:true,
            },
            password:{
                required:true,
                minlength:8,
            },
            quat:{
                required:true,
            },
            date:{
                required:true,
            },
            month:{
                required:true,
            },
            year:{
                required:true,
            },


        }
       /* messages: {
            fname: {
                required: "please enter your first name",
                minlength: "please enter minimum 5 characters",
            },
            sname: {
                required: "please enter your sur name",
                minlength:"please enter minimum 5 characters",
            },
            mail:{
                required:"please enter a valid email id",
            },
            password:{
                required:"please enter a strong password",
                minlength:8,
            },
            gender:{
                required:"select the gender",
            },
        }*/
    });

});