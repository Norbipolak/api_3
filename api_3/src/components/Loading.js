function Loading({display}) {
    return(
        <div className={"loading-icon " + (!display ? "d-none" : "")}>

        </div>
    );
}

export default Loading;

/*
function Loading({display}) {
    return(
        <div className="loading-icon">
            
        </div>
    );
}

és vár egy display-t, ami egy useState true false-os változó lesz, amivel meghatározzuk, hogy mikor mutassuk, mikor legyen ez a loading!!! 

ezt a loading-icon-t pedig megcsináljuk a style-ban 
az erederti icon az 200*200-as, de nekünk nem kell ekkora, ezért elég egy 150*150-es is!! 
.loading-icon {
    height: 150px;
    width: 150px;
    background-image: url("../images/loading-icon.gif");
    background-position: center;
    background-size: 150px; 
}

alapból nem adjuk meg neki, hogy display: none, mert majd itt adjuk meg neki a className-ben 
attól függően, hogy a display, ami majd ugye egy useState-s változó lesz 
és majd behívásnál ezt ott megcsináljuk 

de itt meg ezt csináljuk meg 
<div className={"loading-icon " + !display ? "d-none" : ""}>
ha display az false lesz, akkor kap egy display: none-t, amugy meg egy üres string-et kap és nem határozzuk meg, hogy milyen display legyen

és, mivel ennek a div-nek egy background-image-e van ezért itt a div-en belül nem kell egy img tag!!! 
de amit meg kell itt csinálni, hogy hol jelenjen meg 
ezért position: fixed lesz és kell egy top: 0, bottom: 0, right: 0, left: 0 és margin: auto
hogy teljesen középen legyen mindig a képernyőn!!!!! 
-> 
.loading-icon {
    height: 150px;
    width: 150px;
    background-image: url("../images/loading-icon.gif");
    background-position: center;
    background-size: 150px;  
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
}

a UsersPage-n meg csináljuk a többit 
*/ 