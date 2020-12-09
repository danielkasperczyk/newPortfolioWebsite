const button = document.querySelector('.navMobile__button');
const navigation = document.querySelector('.navMobile');
const links = navigation.querySelectorAll('a');
const closeBtn = document.querySelector('.navMobile__closeBtn');

function showNav(){
    if(!(navigation.classList.contains('navMobile--show'))){
        navigation.classList.add('navMobile--show')
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden";
    }
    else{
        navigation.classList.remove('navMobile--show')
        document.body.style.height = "auto"
        document.body.style.overflow = "visible";
    }
    
}
closeBtn.addEventListener('click', showNav);
button.addEventListener('click', showNav);
navigation.querySelector('.navMobile__box').addEventListener('click', e=>{
    if(e.target.tagName.toLowerCase() === 'a'){
        showNav();
    }
})