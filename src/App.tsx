import { BrowserRouter, Route, Routes } from "react-router-dom";
import ErrorBoundary from "./components/ErrorBoundary";
import EventTypeManager from "./components/EventTypeManager";
import ShellLayout from "./components/ShellLayout";
import { AppContext, DEFAULT_CONTEXT } from "./utils/context";

// TODO: add theme provider and theming to match svix branding
export default function App() {
  return (
    <ErrorBoundary>
      <AppContext.Provider value={DEFAULT_CONTEXT}>
        <BrowserRouter>
          <Routes>
            <Route element={<ShellLayout />}>
              <Route path="/" element={<EventTypeManager />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </AppContext.Provider>
    </ErrorBoundary>
  );
}
