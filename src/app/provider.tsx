import { MainErrorFallback } from "@/components/error/main";
import React from "react";
import { ErrorBoundary } from "react-error-boundary";
import { HelmetProvider } from "react-helmet-async";

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    // TODO: Suspense components
    <React.Suspense fallback={<div>Loading</div>}>
      <ErrorBoundary FallbackComponent={MainErrorFallback}>
        <HelmetProvider>
          {/* TODO: React Query here */}
          {children}
        </HelmetProvider>
      </ErrorBoundary>
    </React.Suspense>
  );
};
