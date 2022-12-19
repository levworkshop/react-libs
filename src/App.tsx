import './App.css';
import { NavLink, Route, Routes } from 'react-router-dom';
import Form from './components/Form';

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


            <Routes>
                <Route
                    path='/form'
                    element={<Form />}
                />
            </Routes>
        </>
    );
}

export default App;
