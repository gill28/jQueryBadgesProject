$(function() {

    $.ajax({
        url: 'https://www.codeschool.com/users/Rocket55.json',
        dataType: 'jsonp',
        success: function(response) {

            addCourses('response', response.courses.completed);
        }
    });
    function addCourses(courses) {

        var $badges = $('#badges');

        courses.forEach( function(course){

           $('<div />', {
               'class': 'course'
           }).appendTo($badges);

        });
    }

});
