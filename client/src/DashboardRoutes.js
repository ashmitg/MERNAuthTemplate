import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import DashboardNavbar from "./components/navbar/dashboardNav";

// Lazy load the main dashboard component
const MainDashboard = React.lazy(()=> import("./views/dashboard/main"));
const ChatPage = React.lazy(()=> import("./views/dashboard/chatPage"));

const DashboardRoutes = () => {

  return (
      <>
      <DashboardNavbar />
      <Routes>
        <Route path="/" element={<MainDashboard />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      </>
  );
};

export default DashboardRoutes;
