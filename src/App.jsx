import MainLayout from "./layouts/MainLayout";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import { RouterProvider , createBrowserRouter ,createRoutesFromElements,Route } from "react-router";


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<MainLayout />}>
      <Route index element={<Home />} />
      <Route path='/About' element={<About />} />
    </Route>
  )
);


const App = () => {
  return  <RouterProvider router={router} />;
};

export default App;