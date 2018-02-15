
/*var modal = document.getElementById('myModal');
var x = document.getElementsByClassName('close');

function openPopup(id) {
    let modalWindow = document.getElementById(id);
    modalWindow.classList.add('active');
}*/

//for ( var i = 0; i < x.length; i++ ) {
//    x[i].addEventListener('click', function(e) {
//        let target = e.target;
//        target.parentElement.parentElement.classList.remove('active');
//    })
//}

/*
window.addEventListener('click', function(e) {
    let target = e.target;
    if (target.classList.contains('active')){
        target.classList.remove('active');
    }
})

window.addEventListener('click', function(e) {
    let target = e.target;
    if(target.dataset.modal){
        let modalId = target.dataset.modal;
        openPopup(modalId);
    }
})*/





/*$(function(){ // start document ready
    
    $(document).click( function(event){
        if (( $(event.target).closest( "#myBtn.active" ).length ) || ( $(event.target).closest( "#myModal.active" ).length )) {
            $('#myModal').addClass( 'active' );
            $('#myBtn').removeClass( 'active' );
        } else {
            $('#myModal').removeClass( 'active' );
            $('#myBtn').addClass( 'active' );
        } // end Строка поиска
    });

    $('.country').each(function(a){
        $(this).click(function(){
            
            $('.country').removeClass('active');
            $(this).addClass('active');
            
            $('.h-phone-number').removeClass('active').eq(a).addClass('active');
            
        });
    });
    
}); // end document ready














/*
    xs - mobile 
    sm - tablet 768+
    md - descto small 992+
    lg - desctop big 1200+


    div.col-xs-12.col-sm-6.col-md-4


    .container
        .row
            .col'ы
        .row
            .col'ы
*/