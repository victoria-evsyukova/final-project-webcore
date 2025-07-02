var buttonMessage = document.querySelectorAll('.message');
var buttonCall = document.querySelectorAll('.tel');

var buttonClose = document.querySelectorAll('.close');
var buttonCloseCall = document.querySelector('.modal-call__close');

var mask = document.querySelector('.mask');

var modalFeedback = document.querySelector('.modal-feedback');
var modalCall = document.querySelector('.modal-call');



for (var i = 0; i < buttonMessage.length; i++) {  
    buttonMessage[i].addEventListener('click', function(event) {  
        mask.classList.add('opacity');
        modalFeedback.style.transform = 'translateX(0px)';
        modalFeedback.style.transition = 'transform 1.5s';
        modalFeedback.style.visibility = 'visible';  
        modalCall.style.transform = 'translate(700px)';
    });  
};

for (var i = 0; i < buttonCall.length; i++) {  
    buttonCall[i].addEventListener('click', function(event) {  
        mask.classList.add('opacity');
        modalCall.style.transform = 'translateX(0px)';
        modalCall.style.transition = 'transform 1.7s';
        modalCall.style.visibility = 'visible'; 
        modalFeedback.style.transform = 'translate(700px)';
    });  
};


for (var i = 0; i < buttonClose.length; i++) {  
    buttonClose[i].addEventListener('click', function(event) {
        mask.classList.remove('opacity');
        mask.style.transition = 'transform 1.5s';
        if (modalFeedback.style.transform === 'translateX(0px)') {
            modalFeedback.style.transform = 'translateX(700px)'; 
            modalFeedback.style.transition ='transform 2s';
            modalFeedback.style.transform = 'translateX(700px)'; 
        } 
        if (modalCall.style.transform == 'translateX(0px)') {
            modalCall.style.transform = 'translateX(700px)'; 
            modalCall.style.transition ='transform 2s';
            modalFeedback.style.transform = 'translate(700px)';
        }    
    });
};

if (mask) { 
    mask.addEventListener('click', function(event) {
    if (modalFeedback.style.transform === 'translateX(0px)' || 
        modalCall.style.transform === 'translateX(0px)') {
        
        modalFeedback.style.transform = 'translateX(700px)'; 
        modalCall.style.transform = 'translateX(700px)';
        mask.classList.remove('opacity');
        }
    });
}



document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        if (modalFeedback.style.transform == 'translateX(0px)') {
            modalFeedback.style.transform = 'translateX(700px)'; 
        }
        if (modalCall.style.transform == 'translateX(0px)') {
            modalCall.style.transform = 'translateX(700px)'; 
        } 
            mask.classList.remove('opacity');
    }
});


// buttonCloseCall.addEventListener('click', function() {
//     mask.classList.remove('opacity');
//     mask.style.transition = 'transform 1.5s';
//     modalCall.style.transform = 'translateX(700px)'; 
//     modalCall.style.transition ='transform 1.4s';
// });