const {body} = document;

function changeBackground(num){
    // Check if background is already showing
    let previousBackground;
    if( body.className){
        previousBackground=body.className;
    }
    // Reset CSS class for body
    body.className= ''
    switch(num){
        case '1':
           return (previousBackground === 'background-1' ? false : body.classList.add('background-1'))
        case '2':
            return(previousBackground === 'background-2' ? false : body.classList.add('background-2'))
            // break;
        case '3':
            return (previousBackground === 'background-3' ? false : body.classList.add('background-3'))
            // break;
        default:
            break;
    }
}
