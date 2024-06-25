import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Link } from "react-router-dom";

function User({ u }) {
    const [data, setData] = useState(`${u.name.title} ${u.name.first} ${u.name.last}`);

    return (
        <div className="box-secondary-lighter p-md">
            <h3>{data}</h3>

            <div className="img-holder">
                <img src={u.picture.thumbnail} />
            </div>

            <div className="d-flex jc-space-between mb-md">
                <div className="color-white font-xxl cursor-pointer c-hover-white"
                    onMouseOver={() => setData(u.gender)}
                    onMouseLeave={() => setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon={u.gender === 'male' ? 'fa-solid fa-person' : 'fa-solid fa-person-dress'} />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon={u.gender === 'male' ? 'fa-solid fa-person' : 'fa-solid fa-person-dress'} />
                        </div>
                    </div>



                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                    onMouseEnter={() => setData(u.email)}
                    onMouseLeave={() => setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                    </div>
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                    onMouseEnter={() => setData(u.dob.date.substr(0, 10))}
                    onMouseLeave={() => setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon="fa-solid fa-calendar" />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon="fa-solid fa-calendar" />
                        </div>
                    </div>
                </div>

                <div className="color-white font-xxl cursor-pointer c-hover-white"
                    onMouseEnter={() => setData(u.location.country)}
                    onMouseLeave={() => setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon="fa-solid fa-location-dot" />
                        </div>
                    </div>
                </div>


                <div className="color-white font-xxl cursor-pointer c-hover-white"
                    onMouseEnter={() => setData(u.cell)}
                    onMouseLeave={() => setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <FontAwesomeIcon icon="fa-solid fa-mobile" />
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon="fa-solid fa-mobile" />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon="fa-solid fa-mobile" />
                        </div>
                    </div>
                </div>
            </div>

            <Link to="/user">
                <button className="input-md btn-primary">Open</button>
            </Link>
        </div>
    );
}

export default User;

/*
Megcsináltuk scss-ben ezt 
.fa-icon-holder {
    height: 30px;
    overflow: hidden;
}

.fa-icon-holder:hover .upper-icon {
    margin-top: -40px;
}

.fa-icon-holder .upper-icon, .fa-icon-holder .lower-icon {
    transition: margin-top 1s ease;
}

.fa-icon-holder:not(:hover) .upper-icon {
    margin-top: 0;
}

és most itt ki kell cserélni az összeset ennek a példájára 
-> 
                <div className="color-white font-xxl cursor-pointer c-hover-white"
                onMouseEnter={()=>setData(u.email)}
                onMouseLeave={()=> setData(`${u.name.title} ${u.name.first} ${u.name.last}`)}>
                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                        <div className="lower-icon">
                            <FontAwesomeIcon icon="fa-solid fa-envelope" />
                        </div>
                    </div>
                </div>

de úgy, hogy az elsőnél 
ha az u.gender az male, akkor kell nekünk a fa-solid fa-person, ha meg nem, akkor meg kell a fa-solid fa-person-dress 
<FontAwesomeIcon icon={u.gender === 'male' ? 'fa-solid fa-person' : 'fa-solid fa-person-dress'}/>
tehát itt az ikonoknál is használhatunk internal operator-t 

                    <div className="d-block fa-icon-holder">
                        <div className="upper-icon">
                            <FontAwesomeIcon icon={u.gender === 'male' ? 'fa-solid fa-person' : 'fa-solid fa-person-dress'}/>
                        </div>
                        <div className="lower-icon">
                        <FontAwesomeIcon icon={u.gender === 'male' ? 'fa-solid fa-person' : 'fa-solid fa-person-dress'}/>
                        </div>
                    </div>

megcsináltuk az összesre 
*/