import "./App.css";
import { lazy, Suspense } from "react";

const LazyDashboard = lazy(() => import("./components/dashboard"));
function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyDashboard />
    </Suspense>
  );
}

export default App;
