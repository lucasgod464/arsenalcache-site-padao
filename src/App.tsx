
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import AdminPanel from "./pages/AdminPanel";
import LeadsPage from "./pages/LeadsPage";
import MasterClass from "./pages/MasterClass";
import DiamondSystem from "./pages/DiamondSystem";
import DiamondLeadsPage from "./pages/DiamondLeadsPage";
import DiamondMasterClass from "./pages/DiamondMasterClass";
import CookieBanner from "./components/CookieBanner";

function App() {
  // Create a client
  const queryClient = new QueryClient();

  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter basename="/">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/golden-admin" element={<AdminPanel />} />
              <Route path="/golden-leads" element={<LeadsPage />} />
              <Route path="/golden-masterclass" element={<MasterClass />} />
              <Route path="/diamond-system" element={<DiamondSystem />} />
              <Route path="/diamond-leads" element={<DiamondLeadsPage />} />
              <Route path="/diamond-masterclass" element={<DiamondMasterClass />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
            <CookieBanner />
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

export default App;
