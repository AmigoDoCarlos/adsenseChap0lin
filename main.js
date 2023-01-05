
let isBurguerMenuExpanded = false;

function toggleBurguerMenu(){
    if(isBurguerMenuExpanded === false){
        isBurguerMenuExpanded = true;
        return gsap.timeline()
        .to('.headerBurguerMenu', {duration: 0, yPercent: -50})
        .to('.headerBurguerMenu', {duration: 0.3, yPercent: 0, scaleY: 1});
    }
    gsap.to('.headerBurguerMenu', {duration: 0.3, yPercent: -50, scaleY: 0});
    isBurguerMenuExpanded = false;
}

function setCookiesConsent(){
    const cookieBox = document.querySelector('.cookieBox');    
    document.cookie = `CookieBy=Chap0lin; path=/; max-age=${60*60*24*30}`;  //configurando cookie de permissão de cookies para durar 1 mês
    if(document.cookie){                                            //se a configuração foi bem sucedida, 
        console.log('Configuração de cookies bem-sucedida');
    } else {
        console.log('Erro na configuração do cookie.');
        return;
    }

    checkCookiesConsent();
}

function checkCookiesConsent(){
    console.log('Verificando estado do cookieBox...');
    const cookieBox = document.querySelector('.cookieBox'); 
    if(cookieBox !== null){
        const checkCookie = document.cookie.indexOf('CookieBy=Chap0lin');
        console.log(`checkCookie = ${checkCookie}`);
        (checkCookie === -1)
        ? cookieBox.classList.add('cookieShow')
        : cookieBox.classList.remove('cookieShow');
    } else {
        console.log('cookieBox não está definido.')
    }
}

window.onload = function() {
    checkCookiesConsent();
}