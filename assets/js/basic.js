// Get the modal
var modal = $('#myModal')[0];
// Get the button that opens the modal
var btn = $('#myBtn')[0];
// Get the <span> element that closes the modal
var span = $('.close')[0];
// When the user clicks the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";

}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//
//
// var yourNavigation = $(".menuBar");
// var stickyDiv = "sticky";
// var yourHeader = $(".logoBar").height();
//
// $(window).scroll(function() {
//   if ($(this).scrollTop() > yourHeader) {
//     yourNavigation.addClass(stickyDiv);
//
//   } else {
//     yourNavigation.removeClass(stickyDiv);
//   }
// });


// $(document).ready(function() {
//   alert("Hello! I am an alert box!!");
//
//   $.ajax({
//     url: 'news.xml',
//     type: 'default GET (Other values: POST)',
//     dataType: 'xml',
//     success: xmlParser
//   })
// });
//
// function xmlParser(xml) {
//   $(xml).find("article").each(function(){
//     $(".newsBox").append( "<p class='mini'>Posted Friday, August 18, 2017</p>" )
//
//   });
//
// }
