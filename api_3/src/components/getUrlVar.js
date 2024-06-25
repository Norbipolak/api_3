function getUrlVar({name, defaultValue}) {
    const searchParam = new URLSearchParams(window.location.search);
    const param = searchParam.get(name)
    return param ? param : defaultValue 
}

export default getUrlVar;

/*
function getUrlVar({name}) {

}

export default getUrlVar;

itt ez egy vár egy name-t 
Az url változókat azokat úgy tudjuk lementeni, hogy van ez a window.location.serach!!!!!!!!!! 
->
?results=60 

és létezik egy ilyen beépített függvény, hogy URLSearchParams()
->
function getUrlVar({name}) {
    new URLSearchParams();
}

nagyon fontos, hogy a ULSearchParams-ban van az elmagyarázás!!! 

function getUrlVar({name}) {
    const searchParams = new URLSearchParams(window.location.search);
    return searchParams.get(name)
}

export default getUrlVar;

Ez csinálunk nekünk egy url-t ebből az URLSearchParams-ból -> const searchParams = new URLSearchParams(window.location.search);
és ennek létezik egy get metódusa!!! 
a window.location.search pedig biztosít a constructor-ában neki egy ilyen searchParams dolgot!!!!! 

ha pl. a google-ben rákeresünk valamire 
és a beírjuk, hogy window.location.search 
-> 
'?q=asdf&sca_esv=5da6c0e4b63a9ce6&authuser=2&sxsrf=ADLYWIKu0u2dj3qLJ4K8S3mREnz03vJCww%3A1718971933765&source=hp&ei=HW51ZqWNLKf_7_UPxcSRiAw&iflsig=AL9hbdgAAAAAZnV8LbVDV8Gq84humi9nPLkTG1q7JQGf&ved=0ahUKEwjlj_S71eyGAxWn_7sIHUViBMEQ4dUDCBU&uact=5&oq=asdf&gs_lp=Egdnd3Mtd2l6IgRhc2RmMgUQABiABDIFEC4YgAQyBRAuGIAEMgUQABiABDIHEAAYgAQYCjIHEAAYgAQYCjIHEC4YgAQYCjIHEAAYgAQYCjIHEAAYgAQYCjIHEAAYgAQYCki7BFAAWNkBcAB…'

de ezt kézzel is meg lehet adni!!!! 

és akkor abból tudja get-elni a dolgokat vagy azt fogja mondani, hogy null 
de mi ezt nem akarjuk, hogy null legyen az értéke!!!! 
Ezért inkább készítünk egy defaultValue-t!!! 
-> 
function getUrlVar({name, defaultValue}) {
    const searchParam = new URLSearchParams(window.location.search);
    const param = searchParam.get(name)
    return 
}

és amikor itt a return-ben visszaadjuk a dolgokat
Ha a param létezik akkor azt adjuk vissza, különben pedig a defaultValue-t 
->
return param ? param : defaultValue 

és ez azért jó nekünk mert a results useState-ben meg tudjuk hívni a getUrlVar-t 
visszamegyünk a UsersPage-re!!!!! 
****
Még valami olyasmit kellene megcsinálni, hogy a button-vel, amit készítettünk az egyes user-eket meg tudjuk nyítni 
de erre kell, hogy a user-nek valami azononsítóját is ismernünk kellene, erre volt az előző prijektben, hogy mindegyiknek volt egy id-ja 
de itt nincsen szóval itt ezt nem tudjuk megcsinálni!!!!
Szóval itt nincsen, és ez alapján nem tudjuk betölteni és nincsen id!!! 
És ezért nem tudjuk megnyítni külön oldalon!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
*/