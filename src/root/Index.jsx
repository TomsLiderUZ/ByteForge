import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { navbar } from "../utils/navbar";
import NotPage from "../pages/notFound/index";

function Index() {
  return (
    <Routes>
      {navbar.map(({ path, element, id }) => {
        return <Route key={id} path={path} element={element} />;
      })}
      <Route path="/uz" element={<Navigate to="/uz/game" />} />
      <Route path="/jp" element={<Navigate to="/jp/game" />} />
      <Route path="/ru" element={<Navigate to="/ru/game" />} />
      <Route path="/en" element={<Navigate to="/en/game" />} />
      <Route path="/" element={<Navigate to="/en/game" />} />
      <Route path="*" element={<NotPage />} />
    </Routes>
  );
}

export default Index;
