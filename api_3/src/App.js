import UsersPage from './components/UsersPage';
import "./styles/style.scss";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCalendar, faEnvelope, faLocation, faMobile, faPerson, faPersonDress} from '@fortawesome/free-solid-svg-icons';

library.add(faPerson, faPersonDress, faEnvelope, faCalendar, faLocation, faMobile)


function App() {
    return(
        <BrowserRouter>
            <Routes>
                <Route>
                    <Route path="/" element={<UsersPage/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
