import React, { Component, ErrorInfo, ReactNode } from 'react';
import { logger } from '../logger';

interface Props {
  children: ReactNode;
  title?: string;
}

interface State {
  hasError: boolean;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    logger.error('ErrorBoundary caught an error:', error, errorInfo);
  }

  render(): ReactNode {
    const { hasError } = this.state;
    const { title } = this.props;

    if (hasError) {
      return (
        <div role='alert' className='Error-boundary'>
          <h1>{title ? `${title} error` : 'An error occurred'}</h1>
          <p>Refresh to try again</p>
        </div>
      );
    }

    return this.props.children;
  }
}
