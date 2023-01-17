import { BrowserRouter, Route } from "react-router-dom";
import { AwaitedPage } from "./pages/AwaitedPage";
import { ReturnTypePage } from "./pages/ReturnTypePage";

export function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <h1>Utility Type</h1>
        <ul>
          <li>
            <a href="retry-type">RetryType</a>
          </li>
          <li>
            <a href="awaited">awaited</a>
          </li>
        </ul>
        <Route path="/retry-type">
          <ReturnTypePage />
        </Route>
        <Route path="/awaited">
          <AwaitedPage />
        </Route>
      </main>
    </BrowserRouter>
  );
}
