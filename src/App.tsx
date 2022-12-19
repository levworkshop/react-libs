import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Form from './components/Form';
import HttpRequest from './components/HttpRequest';

function App() {
    return (
        <>
            <div>
                <NavLink
                    to="/form"
                >
                    Form
                </NavLink>
            </div>
            <div>
                <NavLink
                    to="/request"
                >
                    HTTP Requests
                </NavLink>
            </div>


            <Routes>
                <Route
                    path='/form'
                    element={<Form />}
                />
                <Route
                    path='/request'
                    element={<HttpRequest />}
                />
            </Routes>
        </>
    );
}

export default App;
