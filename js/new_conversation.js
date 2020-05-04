console.log($(".fab").text());
function simulateClick(className) {
    var evt = document.createEvent("MouseEvents");
    evt.initMouseEvent("click", true, true, window,
        0, 0, 0, 0, 0, false, false, false, false, 0, null);
    var element = document.getElementsByClassName(className);
    element.dispatchEvent(evt);
}
//simulateClick("fab");
$(".fab").click(function(){
    console.log("click");
    
});