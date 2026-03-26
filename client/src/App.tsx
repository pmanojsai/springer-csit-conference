import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/home";
import AboutPage from "@/pages/about";
import CallForPapersPage from "@/pages/call-for-papers";
import CommitteePage from "@/pages/committee";
import DatesPage from "@/pages/dates";
import RegistrationPage from "@/pages/registration";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={AboutPage} />
      <Route path="/call-for-papers" component={CallForPapersPage} />
      <Route path="/committee" component={CommitteePage} />
      <Route path="/dates" component={DatesPage} />
      <Route path="/registration" component={RegistrationPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
