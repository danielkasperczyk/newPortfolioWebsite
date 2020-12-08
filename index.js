const button = document.querySelector('.navMobile__button');
const navigation = document.querySelector('.navMobile');
const navigationBg = document.querySelector('.navMobile__blur')

function showNav(e){
    if(!(navigation.classList.contains('navMobile--show'))){
        navigation.classList.add('navMobile--show')
        navigationBg.style.display = 'block';
        document.body.style.height = "100%"
        document.body.style.overflow = "hidden";
    }
    else{
        navigation.classList.remove('navMobile--show')
        navigationBg.style.display = 'none';
        document.body.style.height = "auto"
        document.body.style.overflow = "visible";
    }
    console.log(e);
}

button.addEventListener('click', showNav);
navigationBg.addEventListener('click', showNav)