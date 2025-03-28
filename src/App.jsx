import MainLayout from "./layouts/MainLayout";
import React from "react";
import Home from "./pages/Home"
import About from "./pages/About"
import { RouterProvider , createBrowserRouter ,createRoutesFromElements,Route } from "react-router";





const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path='/About' element={<About />} />
      </Route>
    )
  );

  return  <RouterProvider router={router} />;
};

export default App;