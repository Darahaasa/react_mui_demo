
// // import { useEffect, useState, useRef, createContext, useMemo } from 'react';
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import Products from "./Pages/Products";
// // import Services from "./Pages/Service";
// // import AboutUs from "./Pages/Aboutus";
// // import ContactUs from "./Pages/Contactus";
// // import Login from "./Pages/Login"; 
// // import SignUp from "./Pages/SignUp";


// // function App() {

// //     let [products,updateProducts] = useState([])
// //     useEffect( 
// //         () => {
// //             getProducts()
// //         },[]
// //     )

// //     async function getProducts() {
// //         let res = await fetch('https://fakestoreapi.com/products') //fetch('https://fakestoreapi.com/products')  this will return promice object here, without using then method await is used.  
// //         let prodList = await res.json()
// //         updateProducts(prodList)
// //         console.log(prodList)
// //     }

// //     if(products.length  === 0){
// //         return (<h1>fetching data......</h1>)
// //     }

// //   return (
// //     <Router>
// //       <Navbar />
// //       <Routes>
// //         <Route path="/products" element={
// //             products.map((p) =>{<Products {...p} key={p.id} ></Products>})
// //         } 
// //         />
// //         <Route path="/services" element={<Services />} />
// //         <Route path="/aboutus" element={<AboutUs />} />
// //         <Route path="/contactus" element={<ContactUs />} />
// //         <Route path="/login" element={<Login />} />  
// //         <Route path="/signup" element={<SignUp />} /> 
// //       </Routes>
// //     </Router>
// //   );
// // }

// // export default App;



// import { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Navbar from "./components/Navbar";
// import Products from "./Pages/Products";
// import Services from "./Pages/Service";
// import AboutUs from "./Pages/Aboutus";
// import ContactUs from "./Pages/Contactus";
// import Login from "./Pages/Login"; 
// import SignUp from "./Pages/SignUp";
// import './App.css';
// import Home from './Pages/Home';


// function App() {
//     let [products, updateProducts] = useState([]);

//     useEffect(() => {
//         getProducts();
//     }, []);

//     async function getProducts() {
//         let res = await fetch('https://fakestoreapi.com/products');
//         let prodList = await res.json();
//         updateProducts(prodList);
//         console.log(prodList);
//     }

//     if (products.length === 0) {
//         return (<h1>Fetching data......</h1>);
//     }

//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 {/* Products route */}
//                 <Route 
//                   path="/products" 
//                   element={
//                     <div className='produc-list'>
//                       {products.map((p) => (
//                         <Products {...p} key={p.id} />
//                       ))}
//                     </div>
//                   } 
//                 />
//                 <Route path="/services" element={<Services />} />
//                 <Route path="/aboutus" element={<AboutUs />} />
//                 <Route path="/contactus" element={<ContactUs />} />
//                 <Route path="/login" element={<Login />} />  
//                 <Route path="/signup" element={<SignUp />} /> 
//                 <Route path="/" element={<Home />} /> 
//             </Routes>
//         </Router>
//     );
// }

// export default App;


import './App.css';
import { createBrowserRouter, RouterProvider, useOutletContext } from 'react-router-dom';
import Root from './Root';
import Products from './Pages/Products';
import Services from './Pages/Service';
import AboutUs from './Pages/Aboutus';
import ContactUs from './Pages/Contactus';
import Login from './Pages/Login'; 
import SignUp from './Pages/SignUp';
import Home from './Pages/Home';
import Details from './Pages/Details';
import ErrorPage from './components/ErrorPage';


const ProductsWrapper = () => {
  const products = useOutletContext();
  return (
      <div className='produc-list'>
          {products.map((p) => (
              <Products {...p} key={p.id} />
          ))}
      </div>
  );
};

// const ChildtoParentProps = () => {
//   const [todos, updateTodos] = useState(['Task1', 'Task2']);
//   const [searchQuery, setSearchQuery] = useState('');

//   const addNew = (task) => {
//     updateTodos([...todos, task]);
//   };

//   const handleSearch = (query) => {
//     setSearchQuery(query); // Update the search query
//   };

//   return (
//     <>
//       <Search add={handleSearch} /> {/* Pass the search handler to Search */}
//       <ul>
//         {todos.map((t, index) => (
//           <li key={index}>{t}</li>
//         ))}
//       </ul>
//       <ColumnVirtualizationGrid searchQuery={searchQuery} /> {/* Pass the search query to DataGrid */}
//     </>
//   );
// };


const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: 'products',
                element: <ProductsWrapper />,
            },
            { path: '/services', element: <Services /> },
            { path: '/aboutus', element: <AboutUs /> },
            { path: '/contactus', element: <ContactUs /> },
            { path: '/login', element: <Login /> },
            { path: '/signup', element: <SignUp /> },
            { path: '/', element: <Home /> },
            { path: 'details', element: <Details /> },
        ],
    },
]);


function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
