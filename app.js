let spinnerWrapper = document.querySelector('.spinner-wrapper');

setTimeout(function() {

    spinnerWrapper.parentElement.removeChild(spinnerWrapper)
}, 600);