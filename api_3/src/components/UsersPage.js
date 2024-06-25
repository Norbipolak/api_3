import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect } from "react";
import getUrlVar from "./getUrlVar";

function UsersPage() {
    const [users, setUsers] = useState([]);
    const [results, setResults] = useState(parseInt(getUrlVar("results", 12)));
    const [displayLoading, setDisplayLoading] = useState(false);

    const getUserData = async ()=> {
        try {
            setDisplayLoading(true);
            const response = await fetch("https://randomuser.me/api/?results " + results);
            const json = await response.json();
            setUsers(json.results);
            setDisplayLoading(false)
        } catch(err) {
            console.log(err);
        }
    };

    useEffect(()=> {
        getUserData();
    }, []);

    loadMore = async ()=> {
        setResults(r=>r+12);
        await getUserData();
        setTimeout(()=> {
            window.scrollTo(0, document.body.scrollHeight);
        }, 200);
    };

    useEffect(()=> {
        window.history.pushState({}, "", `?results=${results}`)
    }, [results]);

    return(
        <div className="container-xl p-lg text-center">
            <Loading display={displayLoading}/>
            <div className="grid-col-3 gap-md">
                {
                    users.map((u,i )=> 
                        <User key={i} u={u}/>
                    )
                }
            </div>
            {
                !displayLoading && 
                <button className="input-md btn-secondary mt-lg"
                onClick={loadMore}
                >Load more...</button>
            }
        </div>
    );
}


export default UsersPage;

/*
Amikor itt lementjük ezt const [results, setResults] = useState(getUrlVar("results", 12));
az a baj, hogy most hozzáfüzi és nem hozzáadja, tehát ez lesz az url-ben ->
localhost:3000?results=1212

getUrlVar("results", 12)
tehát ez string-ben jön le és egyszerűen csak hozzáfüzi és nem hozzáadja

Ha nincsen ilyen változó, akkor 12, amit ugye number-ként adtunk meg utána meg hozzáfüzi 
az a lényeg, hogy itt amit megkaptunk azt parseInt-eljük!!! 
parseInt(getUrlVar("results", 12))

loading ikont kellene berakni, mert egy kis idő, amig betölt és leteker 
erre csinálunk egy komponenst 

most itt kell neki egy useState-s változó, hogy megkapja-e a d-none-t vagy ne és mutassuk 
erre létrehozunk itt egy displayLoading-os useState-s változót 
const [displayLoading, setDisplayLoading] = useState(true);

return-be meg beletesszük, meghívjuk
ugye ott a komponens vár egy display-t, amit itt megadunk a displayLoading-val neki!
->
nem jelenik meg, de itt displayLoading az true van const [displayLoading, setDisplayLoading] = useState(true);
ott meg csak, akkor kapja meg a d-none class-t ha tagadjuk a display-t -> !display ? "d-none" : ""}>

de mégis valamiért megkapta ezt a d-none class-t 
ezzel se ment, hogy itt megadtuk neki a true-t egyből -> <Loading display={true}/>

az volt a gond, hogy ezt be kell rakni egy ilyenbe () -> <div className={"loading-icon " + (!display ? "d-none" : "")}>
Mert ez fontos, hogy zárójelben legyen, mert ez egy logikai feltétel!!!!!!!!!!!!

és akkor most végig loading-olunk!!! 
be kell állítani set-vel, hogy mikor szeretnénk, hogy ennek az értéke true legyen és mikor, hogy false!!! 

elöször is a useState-nek az alapértéke az kell, hogy legyen, hogy false, hogy ne jelenjen meg ez mindig!!! 
const [displayLoading, setDisplayLoading] = useState(false);

És jó ez az await, mert ez lehetővé teszi számunkra, hogy bávárjuk az adatokat, amiket a szerver küld 
és ott a try-ban mielőtt betölteni azt mondjuk, hogy setDisplayLoading(true)
viszont, amikor set-eltük már a users-t, akkor meg ezt beállítjuk false-ra 
->
    const getUserData = async ()=> {
        try {
            setDisplayLoading(true);
            const response = await fetch("https://randomuser.me/api/?results " + results);
            const json = await response.json();
            setUsers(json.results);
            setDisplayLoading(false)
        } catch(err) {

és akkor ez müködik, akkor is amikor még nem töltött be semmit, meg akkor is, amikor rányomunk a load-ra és betölt többet is 
mert ugy akkor is lejátszodik ez a folyamat, hogy lehozzuk a user-eket, meg set-eljük vele a user-es ezt -> const [users, setUsers] = useState([]);

még valami, ha load-olunk, akkor ennek nem is kellene, hogy megjelenjen 
->
<button className="input-md btn-secondary mt-lg"
onClick={loadMore}
>Load more...</button>

at modnjuk, hogy ez csak akkor jelenjen meg, ha nem displayloading 
->
            {
                !displayLoading && 
                <button className="input-md btn-secondary mt-lg"
                onClick={loadMore}
                >Load more...</button>
            }

és ezt is zárójelbe kell tenni, de nem ilyenbe (), hanem ilyenbe {}
de viszont nem kell az internal operatoros ? :, hanem elég egy &&-jel!! 

a flex.scss.-ben csinálunk egy bootstrap-es grid rendszert!!! 
*/ 