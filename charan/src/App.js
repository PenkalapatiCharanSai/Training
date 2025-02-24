//^Routing
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

//^
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./crudcomponents/Home";
// import Edit from "./crudcomponents/Edit";
// import Create from "./crudcomponents/Create";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

// const App = () => {
//     return (
//         <Router basename="/CrudOperations">  
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/create" element={<Create />} />
//                 <Route path="/edit/:id" element={<Edit />} />
//             </Routes>

//             {/* Toast Notification */}
//             <ToastContainer position="top-center" autoClose={3000} />
//         </Router>
//     );
// };

// export default App;

//^Redux 
import React from "react";
import { Provider } from "react-redux";
import BookContainer from "./reduxcompo/BookContainer";
import store from "./redux/bookex/store";
const App = () => {
    return (
        <Provider store={store}>
            <h1>Redux Book Store</h1>
            <BookContainer />
        </Provider>
    );
};

export default App;
