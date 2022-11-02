
$('#buyBtn').click( (e) => {
    $('.cardBody').hide('slow');
    $('.cardBody2').show('slow');
    $('#backBtn').show('slow');
    $('.fa-cart-plus').addClass('greenCart');
    e.preventDefault();
    
})

$('#backBtn').click((e) => {
    $('.cardBody').show('slow');
    $('.cardBody2').hide('slow');
    $('#backBtn').hide('slow');
    $('.fa-cart-plus').removeClass('greenCart');
    e.preventDefault();
})

$('form').submit(function(e) {
    $('.cardBody2').hide()
    $('.cardBody3').show(500).delay(50000).fadeOut(500);
    $('.cardBody').hide(500).delay(50000).fadeIn(500);
    e.preventDefault()
    
})

$('#saveBtn').click(function(e) {
    $('.heart').toggleClass('isAnimating');
    e.preventDefault()
})

$('.heart').on('animationend', function(){
    $(this).css('backgroundPosition','right')
  })

$('.heart').click(function() {
    $(this).css('backgroundPosition','left')

})

    

