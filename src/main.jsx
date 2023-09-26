import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
// import { HooksApp } from "./HooksApp";

import "./index.css";
// import { TodoApp } from "./08-useReducer/TodoApp";
import { MainApp } from "./09-useContext/MainApp";
import { AboutPage } from "./09-useContext/AboutPage";
import { LoginPage } from "./09-useContext/LoginPage";
import { HomePage } from "./09-useContext/HomePage";

// import { CounterApp } from "./01-useState/CounterApp";
// import { CounterWithCustomHook } from "./01-useState/CounterWithCustomHook";
// import { SimpleForm } from "./02-useEffect/SimpleForm";
// import { FormWithCustomHook } from "./02-useEffect/FormWithCustomHook";
import { MultipleCustomHook } from "./03-examples/MultipleCustomHook";
// import { FocusScreen } from "./04-useRef/FocusScreen";
// import { Layout } from "./05-useLayoutEffect/Layout";
// import { Memorize } from "./06-memos/Memorize";
// import { MemoHook } from "./06-memos/MemoHook";
// import { CallbackHook } from "./06-memos/CallbackHook";
// import { Padre } from "./07-tarea-memo/Padre";

// import "./08-useReducer/intro-reducer"

// const router = createBrowserRouter([
//   // Here we define the routes
//   {
    
//     element: <MainApp />,
//     errorElement: <h1>Page not found</h1>,
//     children: [
//       {
//         path: "/",
//         element: <HomePage />,
//       },
//       {
//         path: "/about",
//         element: <AboutPage />,
//       },
//       {
//         path: "/login",
//         element: <LoginPage />,
//       },
//     ],
//   },
// ]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* <RouterProvider router={router} /> */}
    <MultipleCustomHook/>
  </React.StrictMode>
);
