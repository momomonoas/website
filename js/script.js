$(document).ready(function(){
    let postBox = $('.post-box')
    let letter = $('.letter')
    let click = $('.click')
    let modal = $('.modal')
    let modalBtn = $('.modal .dim i')
    new Swiper(".letter", {
        effect: "cards",
        grabCursor: true,
    })
    postBox.click(function(){
        modal.addClass('show')
        letter.addClass('show')
        click.hide()
    })
    modalBtn.click(function(){
        modal.removeClass('show')
        letter.removeClass('show')
        click.show()
    })
})