import React from "react";

class ErrorBoundary extends React.Component<{}, { error?: Error }> {
  constructor(props = {}) {
    super(props);
    this.state = { error: undefined };
  }

  static getDerivedStateFromError(error: Error) {
    return { error };
  }

  render() {
    if (this.state.error) {
      return "An error occurred";
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
