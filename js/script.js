var helloBtn = document.getElementById('hello-btn');
var helloFunction = () => {
    alert('You have logged in!')
};
helloBtn.addEventListener('click', helloFunction);