import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import App from "./App.tsx";

function ErrorFallback({ error }: FallbackProps) {
  return (
    <div role="alert">
      There was an error:{" "}
      <pre style={{ color: "red", whiteSpace: "normal" }}>{error.message}</pre>
    </div>
  );
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <App />
    </ErrorBoundary>
  </StrictMode>
);
