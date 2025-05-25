import React, { Suspense } from 'react';
import { ErrorBoundary } from "react-error-boundary";

const ErrorBoundaryContainer = ({ children }: { children: React.ReactNode }) => {
  function ErrorFallback({ error, resetErrorBoundary }: { error: Record<string, any>, resetErrorBoundary: (...args: any[]) => void }) {
    console.log(error)
    return (
      <div role="alert">
        <pre>{error.message}</pre>
        <button onClick={resetErrorBoundary}>重试</button>
      </div>
    )
  }

  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Suspense fallback={<div>loading...</div>}>{children}</Suspense>
    </ErrorBoundary>
  )
}
export default ErrorBoundaryContainer;