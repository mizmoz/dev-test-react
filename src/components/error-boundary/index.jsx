import React, { Component } from 'react';
import PropTypes from 'prop-types';

// use the ErrorBoundary component class when you want an error boundary on a section of output / render 
export class ErrorBoundary extends Component {

  constructor(props){
    super(props);
    this.state = { hasError: false };
  }

  // used for logging (has errorInfo/call stack) setting state here is likely to be deprecated in the future so we use the getDerived... function for this.
  // could be used for logging service
  componentDidCatch(error, errorInfo) {
    console.error(error);
    console.error(errorInfo);
  }

  // used for state change and corresponding UI update (requires React 16.6+).
  static getDerivedStateFromError() {
    return { hasError: true };
  }

  render () {
    const ErrorFallback = this.props.ErrorFallback;
    if (this.state.hasError) {
      if (this.props.ErrorFallback) {
        return <ErrorFallback />;
      }
      return null;
    }
    
    return this.props.children;
    
  }
  
}

ErrorBoundary.propTypes = {
  children: PropTypes.element,
  ErrorFallback: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.element
  ])
};

ErrorBoundary.defaultProps = {
  children: null,
  ErrorFallback: null
};

// use higher order version of error component to wrap an entire component in an error boundary (wrap around the export statement of your component)
export const withErrorBoundary = (WrappedComponent, ErrorFallback) => {
  return (props) => (
    <ErrorBoundary ErrorFallback={ErrorFallback}>
      <WrappedComponent {...props}/>
    </ErrorBoundary>
  )
}
