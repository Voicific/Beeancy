import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("Uncaught error:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-bg text-text flex items-center justify-center px-6">
          <div className="text-center max-w-md">
            <h1 className="font-display text-3xl mb-3">Something went wrong</h1>
            <p className="text-muted mb-6">
              We're working on it. Please refresh the page in a moment.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-5 py-2.5 rounded-full bg-text text-bg text-small font-medium"
            >
              Refresh page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}