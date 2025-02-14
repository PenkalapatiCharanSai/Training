// import React from 'react';
// import Navbar from './components/Navbar';
// import {BrowserRouter, Routes, Route} from "react-router-dom";
// import Dashboard from './pages/Dashboard';
// import Classrooms from './pages/Classrooms';
// import Assesments from './pages/Assesments';
// import Store from './pages/Store';
// import Calender from './pages/Calender';
// import News from './pages/News';
// import Blog from './pages/Blog';
// import PageNotFound from './pages/PageNotFound';
// import Profile from './pages/Profile';
// import MyAccount from './pages/MyAccount';
// import MySettings from './pages/MySettings';
// const App =() => {
//     return (
//         <BrowserRouter>
//         <Navbar/>
//         <Routes>
//             <Route path='/' element={<Dashboard/>}/>
//             <Route path='/classrooms' element={<Classrooms/>}/>
//             <Route path='/assesments' element={<Assesments/>}/>
//             <Route path='/store' element={<Store/>}/>
//             <Route path='/calender' element={<Calender/>}/>
//             <Route path='/news' element={<News/>}/>
//             <Route path='/blog' element={<Blog/>}/>
//             <Route path='/profile' element={<Profile/>}/>
//                    <Route path='/profile/myaccount' element={<MyAccount/>}/>
//                    <Route path='/profile/mysettings'element={<MySettings/>}/>
            
//             <Route path='*' element={<PageNotFound/>}/>
//         </Routes>
//         </BrowserRouter>
//     );
// };

// export default App;

import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './crudcomponents/Home';
import Edit from './crudcomponents/Edit';
import Create from './crudcomponents/Create';

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/create' element={<Create />} />  
                <Route path='/edit' element={<Edit />} />  
            </Routes>
        </BrowserRouter>
    );
};

export default App;
