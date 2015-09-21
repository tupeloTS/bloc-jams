
 
var pointsArray = document.getElementsByClassName('point');
                   
var revealPoint = function(point) {
    point.style.opacity = 1;
    point.style.transform = "scaleX(1) translateY(s)";
    point.style.msTransform = "scaleX(1) translateY(0)";
    point.style.WebkitTransform = "scaleX(1) translateY(0)";   
    };

var animatePoints = function(points) {                                
    forEach(points, revealPoint);
};

window.onload = function() {
    
    if (window.innerHeight > 950) {
         animatePoints(pointsArray);
     }
    
    var sellingPoints = document.getElementsByClassName('selling-points')[0];
    
    window.addEventListener('scroll', function(event) {
        console.log(event);
         
    var scrollDistance = sellingPoints.getBoundingClientRect().top - window.innerHeight + 200;
    if (document.body.scrollTop >= scrollDistance) {
        animatePoints(pointsArray);
    }
     });
 
}
               
                