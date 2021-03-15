// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';

// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );
import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App"
//import HeaderBlock from './components/HeaderBlock'

import './index.css';

// const el = React.createElement(
//   'h1',
//   null,
//   'Hello World,ReactJS!!!'
// );

// const AppList = () => {
//   const items = ['item1', 'item2', 'item3', 'item4'];
//   const firstItems = <li>item0</li>;
//   const isAuth = false;
//   return (
//     <ul>
//       {
//         isAuth ? firstItems : null
//       }
//       {
//         items.map(item => <li>{item}</li>)

//       }
//       <li>{items[0]}</li>
//       <li>{items[1]}</li>
//     </ul>
//   )
// }
// const AppHeader = () => {

//   return (
//     <h1
//       className='header'
//     >this is my header</h1>
//   )

// };

// const AppInput = () => {
//   const placeholder = 'Type text...'
//   return (
//     <label htmlFor='search'>
//       <input id='search' placeholder={placeholder} />
//     </label>
//   )
// }

// const App = () => {
//   return (
//     <>
//       <HeaderBlock />
//     </>
//   )
// }
// const el = (
//   <>
//     <AppHeader />
//     <AppList />
//     <AppHeader />
//     <AppList />
//   </>
// )

ReactDOM.render(<App />, document.getElementById('root'));

