// credit: http://www.javascriptkit.com/javatutors/touchevents2.shtml
function swipedetect(el, callback) {
  const touchsurface = el
  let swipedir
  let startX
  let startY
  // let dist
  let distX
  let distY
  const threshold = 150 // required min distance traveled to be considered swipe
  const restraint = 100 // maximum distance allowed at the same time in perpendicular direction
  const allowedTime = 300 // maximum time allowed to travel that distance
  let elapsedTime
  let startTime
  const handleswipe = callback || function(swipedir) {}
  touchsurface.addEventListener('touchstart', function(e) {
    const touchobj = e.changedTouches[0]
    swipedir = 'none'
    // dist = 0
    startX = touchobj.pageX
    startY = touchobj.pageY
    startTime = new Date().getTime() // record time when finger first makes contact with surface
    // e.preventDefault()
  }, false)
  touchsurface.addEventListener('touchmove', function(e) {
    // e.preventDefault() // prevent scrolling when inside DIV
  }, false)
  touchsurface.addEventListener('touchend', function(e) {
    debugger
    const touchobj = e.changedTouches[0]
    distX = touchobj.pageX - startX // get horizontal dist traveled by finger while in contact with surface
    distY = touchobj.pageY - startY // get vertical dist traveled by finger while in contact with surface
    elapsedTime = new Date().getTime() - startTime // get time elapsed
    if (elapsedTime <= allowedTime) { // first condition for awipe met
      if (Math.abs(distX) >= threshold && Math.abs(distY) <= restraint) { // 2nd condition for horizontal swipe met
        swipedir = (distX < 0) ? 'left' : 'right' // if dist traveled is negative, it indicates left swipe
      } else if (Math.abs(distY) >= threshold && Math.abs(distX) <= restraint) { // 2nd condition for vertical swipe met
        swipedir = (distY < 0) ? 'up' : 'down' // if dist traveled is negative, it indicates up swipe
      }
    }
    handleswipe(swipedir)
    // e.preventDefault()
  }, false)
}
// USAGE:
// var el = document.getElementById('swipezone');
// swipedetect(el, function(swipedir){
// // swipedir contains either "none", "left", "right", "top", or "down"
// el.innerHTML = 'Swiped <span style="color:yellow">' + swipedir +'</span>';
// });
export default swipedetect
