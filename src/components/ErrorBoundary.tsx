import React, { ErrorInfo } from "react";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  state = {
    hasError: false,
  };

  // TODO: could add some fallback behavior here;
  // such as giving the user the option to reload the page,
  // report the error, etc.

  static getDerivedStateFromError(/* error: any */) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.log("Error:", error);
    console.log("Error Info:", errorInfo);
    // You can also send error info to an error tracking service here
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
