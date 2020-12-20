import './styles/snackbar.css'

class Snackbar{
    constructor(){
        this.Snackbar = document.createElement('div');
    }
    init(){
        this.Snackbar.classList.add('snackbar');
        document.querySelector('body').appendChild(this.Snackbar);
    }
    show(message){
        this.Snackbar.textContent = message;
        this.Snackbar.classList.add('active');
        setTimeout(() => {
            this.Snackbar.classList.remove('active')
        }, 3000)
    }
}

export {Snackbar as default};