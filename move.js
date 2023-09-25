// allows us to go back and use any image we want to move or switch characters
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(left, bottom) {
        element.style.left = left + 'px'
        element.style.bottom = bottom + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
     let direction = null;
     let x = left;
     let y = bottom;  
    }

  
// default movement
function moveWithArrowKeys(left, bottom, callback){
    let direction = null;
    let x = left;
    let y = bottom;

    element.style.left = x + 'px'
    element.style.bottom = y + 'px'
    // function allows us to move a certain distance everytime a key is pressed
    function moveCharacter(){ 
        if(direction === 'west'){
            x-=1
        }
        if(direction === 'north'){
            y+=1
        }
        if(direction === 'east'){
            x+=1
        }
        if(direction === 'south'){
            y-=1
        }
        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
    }
    
    setInterval(moveCharacter, 1)
    // if i click a certain key that will be the direction it takes me 
    document.addEventListener('keydown', function(e){
        if(e.repeat) return;
    
        if(e.key === 'ArrowLeft'){
            direction = 'west'
        }
        if(e.key === 'ArrowUp'){
            direction = 'north'
        }
        if(e.key === 'ArrowRight'){
            direction = 'east'
        }
        if(e.key === 'ArrowDown'){
            direction = 'south'
        }
        callback(direction)
    })
    // allows me to stop moving when i take my finger off one of the arrow keys
    document.addEventListener('keyup', function(e){
        direction = null
        callback(direction)
    })
}
// repeats the whole process by returning to the first function
return {
    to: moveToCoordinates,
    withArrowKeys: moveWithArrowKeys
}        
}