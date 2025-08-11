import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { HelmetProvider } from "react-helmet-async";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
const queryClient = new QueryClient();

const ProjectsPage = lazy(() => import("./pages/Projects"));
const ProcessPage = lazy(() => import("./pages/ProcessPage"));
const TestimonialsPage = lazy(() => import("./pages/TestimonialsPage"));
const SustainabilityPage = lazy(() => import("./pages/SustainabilityPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const App = () => (
  <QueryClientProvider client={queryClient}>
    <HelmetProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="px-6 py-10 text-muted-foreground">Loading…</div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/projects" element={<ProjectsPage />} />
              <Route path="/process" element={<ProcessPage />} />
              <Route path="/testimonials" element={<TestimonialsPage />} />
              <Route path="/sustainability" element={<SustainabilityPage />} />
              <Route path="/contact" element={<ContactPage />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </HelmetProvider>
  </QueryClientProvider>
);

export default App;
