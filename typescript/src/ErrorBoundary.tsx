// mostly code from reactjs.org/docs/error-boundaries.html
import { Component, ErrorInfo, ReactNode } from "react";
import { Link, Redirect } from "react-router-dom";


class ErrorBoundary extends Component {
  state = { hasError: false, redirect: false };
  static getDerivedStateFromError(): {hasError: boolean, redirect: boolean} {
    return { hasError: true, redirect: false };
  }
  componentDidCatch(error: Error, info: ErrorInfo): void {
    // this can be logged to TrackJS, Sentry, Azure Monitor, New Relic
    console.error("ErrorBoundary caught an error", error, info);
    setTimeout(() => this.setState({ redirect: true }), 5000);
  }

  render(): ReactNode {
    if (this.state.redirect) {
      return <Redirect to="/" />;
    } else if (this.state.hasError) {
      return (
        <h2>
          Oops there was an error. <Link to="/">Click here</Link> to go
          back to the home page or wait five seconds.
        </h2>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
