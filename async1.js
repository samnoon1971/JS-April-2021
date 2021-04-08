
/**
 *  Synchronous
 * 
 */

function expensiveOperation(){
    for(let i = 0; i < 10000000; i++){
        ctx.fillStyle = 'rgba(0, 0, 255, 0.2';
        ctx.beginPath();
        ctx.arc(random(0, canvas.width), random(0, canvas.height), 10, degToRad(0),
        detToRad(360), false);
        ctx.fill();
    }
}
fillBtn.addEventListener('click', expensiveOperation);
alertBtn.addEventListener(
    'click',
     () => alert('Clicked')
);