import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MasterLayout } from "../layout/core/MasterLayout";
import MyApp from "../../pages/MyApp";
import List from "../../pages/List";
import Detail from "../../pages/Detail";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterLayout />}>
          <Route path="" element={<MyApp />} />
          <Route path="list" element={<List />} />
          <Route path="detail" element={<Detail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export { AppRoutes };
