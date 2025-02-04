import logo from './logo.svg';
import './App.css';
import React from 'react';

// function App() {
  // let x =React.createElement("div" ,{className:"App"},
  // React.createElement("h1",null,"hello from react"));
//   let username = "charan";
  
//   return (
//     <div className="App">
//       <h1>Malla Reddy University</h1>
//       <p>CSE</p>
//       <h2>{username}</h2><hr></hr><br></br>
//       {100*100}
//       <h1>hello form react</h1>
  
//     </div>
//   );
// }


//^ Functional Component
// function App(){
//   return(
//     <div>
//       <h1>Functionl Component</h1>
//     </div>
//   )
// }

//^ Class Component
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <h1>Class Component</h1>
//       </div>
//     )
//   }
// }


//^ Arrow Function
// function App() {
//   return (
//     <div className='App'>
//       <h1>Arrow Function Component</h1>
//     </div>
//   );
// }
// export default App;

import Navbar from './components/Navbar';
import Main from './components/Main';
import Footer from './components/Footer';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
class App extends React.Component{
  render(){
    return(
      <div className="App">
        <h1></h1>
        <Navbar/>
        <Main/>
        <div className='side'>
        <Sidebar1/>
        <Sidebar2/>
        </div>
        <Footer/>
      </div>
    )
  }
}
export default App;
