import React from "react";
import "./index.css";
import { Navigate, Route, Routes } from "react-router-dom";
import Auth from "./pages/Auth";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "react-hot-toast";
import CompleteProfile from "./pages/CompleteProfile";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

import AppLayout from "./ui/AppLayout";

import Projects from "./pages/Projects";
import Project from "./pages/Project";
import OwnerDashboard from "./pages/OwnerDashboard";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Toaster />
      <Routes>
        <Route path="/auth" element={<Auth />} />
        <Route path="/complet-profile" element={<CompleteProfile />} />
        <Route path="/owner" element={<AppLayout />}>
          <Route index element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<OwnerDashboard />} />
          <Route path="projects" element={<Projects />} />
          <Route path="Project/:id" element={<Project />} />
        </Route>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
