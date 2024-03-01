import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { Dashboard } from './Pages/Dashboard';



function App() {
    return (
        <>
        <BrowserRouter>
        <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path='/signin' element={<Signin/>} />
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path="/send" element={<SendMoney />} />
        </Routes>
        </BrowserRouter>
        </>
    );
}

export default App;
