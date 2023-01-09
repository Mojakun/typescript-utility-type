import { BrowserRouter, Route } from "react-router-dom";
import { ReturnTypePage } from "./pages/ReturnTypePage";

export function App() {
  return (
    <BrowserRouter>
      <h1>Utility Type</h1>
      <ul>
        <li>
          <a href="retry-type">RetryType</a>
        </li>
      </ul>
      <Route path="/retry-type">
        <ReturnTypePage />
      </Route>
    </BrowserRouter>
  );
}
