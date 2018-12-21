const opener = document.querySelector('.opener');
function addClassFunOpener() {
    this.classList.toggle("clickopener");
}
const nav = document.querySelector('.nav');
function addClassFunOpened() {
    nav.classList.toggle("opened");
}
opener.addEventListener('click', addClassFunOpener);

opener.addEventListener('click', addClassFunOpened);
