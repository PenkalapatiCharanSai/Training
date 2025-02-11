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

//^ web page
// import Navbar from './components/Navbar';
// import Main from './components/Main';
// import Footer from './components/Footer';
// import Sidebar1 from './components/Sidebar1';
// import Sidebar2 from './components/Sidebar2';
// class App extends React.Component{
//   render(){
//     return(
//       <div className="App">
//         <h1></h1>
//         <Navbar/>
//         <Main/>
//         <div className='side'>
//         <Sidebar1/>
//         <Sidebar2/>
//         </div>
//         <Footer/>
//       </div>
//     )
//   }
// }
// export default App;

//^Props
// import CBCProEx from"./propexample/CBCProEx";
// class App extends React.Component{
//   render(){
//     return(
//       <div>
//         <CBCProEx
//         name="Charan"
//         age={19}
//         hobbies={["playing freefire","watching movies"]}
//         address={{city:"Anantapur", area:"Garladinne"}}
//         isMarried={false}
//         sendFun={function(){alert("Hi Charan")}}
//         />
//       </div>
//     )

//   }
// }
// export default App;
// import FBCPropex1 from './propexample/FBCPropex1';
// const App = () => {
//     return (
//         <div>
//             <FBCPropex1
//                 username="Charan"
//                 isLoggedIn={true}
//                 profiles={["insta", "snapchat", "facebook", "Threads"]}
//             />
//         </div>
//     );
// };
// export default App;

//^props.children
// import PropsChildren from './propexample/PropsChildren';
// import SubChildrenProps from './propexample/SubChildrenProps';
// import Child1 from './propexample/Child1';
// import Child2 from './propexample/Child2';
// import Child3 from './propexample/Child3';
// const App = ()=>{
//     return(
//         <div>
//         <PropsChildren username="Charan" company="TCS">
//         <h1>This data is passing as a props to children to child component</h1>
//         <SubChildrenProps/>
//         </PropsChildren>
//         <Child1/>
//         <Child2/>
//         <Child3/>
        
//         </div>
//     )
// }
// export default App;

//^ States
// import CBCStateEx from './stateexample/CBCStateEx';
// import Counter from './stateexample/Counter';
// import FBCStateEx from './stateexample/FBCStateEx';
// const App=()=> {
  
//     return (
//       <div>
//         <CBCStateEx/>
//         <Counter/>
//         <FBCStateEx/>
//       </div>
      
//     )
//   }

// export default App;


// import FuctionalComponent from './components/FuctionalComponent';

// const App = () => {
//   return (
//     <div className='App'>
//       <h1>Welocme this is App.js</h1>
//     <FuctionalComponent 
//       clg='MRU' city="Hyderabad"
//     />  
//     </div>
//   );
// };

// export default App;
//^Form
// import ClassComponent from './components/ClassComponent';
// import MyForm from './components/MyForm';

// const App = () => {
//   return (
//     <div className='App'>
//       {/* <ClassComponent/> */}
//       <MyForm/>
//     </div>
//   );
// };

// export default App;

//^Hooks
// import UseEffectEx from './hooksexample/UseEffectEx';
import RefExample from './hooksexample/RefExample';
import RefExample1 from './hooksexample/RefExample1';
const App = () => {
  return (
    <div className='App'>
      {/* <UseEffectEx/> */}
      <RefExample/>
      <RefExample1/>
    </div>
  );
};

export default App;