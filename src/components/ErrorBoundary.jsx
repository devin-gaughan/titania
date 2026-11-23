import { Component } from 'react';

export default class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{
          display: 'flex', flexDirection: 'column', alignItems: 'center',
          justifyContent: 'center', height: '100%', color: '#b4bfcd',
          fontFamily: 'DM Sans, sans-serif', textAlign: 'center', padding: '2rem',
          background: 'var(--bg-deep, #0e131a)',
        }}>
          <div style={{ fontSize: '2rem', marginBottom: '1rem', opacity: 0.5 }}>
            &#x26A0;
          </div>
          <h2 style={{ fontSize: '1rem', color: '#e7ebf1', marginBottom: '0.5rem' }}>
            3D Renderer Unavailable
          </h2>
          <p style={{ fontSize: '0.85rem', maxWidth: '340px', lineHeight: 1.5 }}>
            WebGL could not initialize. Try a different browser or check that
            hardware acceleration is enabled.
          </p>
          <button
            onClick={() => this.setState({ hasError: false, error: null })}
            style={{
              marginTop: '1rem', padding: '8px 16px', background: 'rgba(76,141,246,0.15)',
              border: '1px solid rgba(76,141,246,0.3)', borderRadius: '6px',
              color: '#74a8f9', cursor: 'pointer', fontFamily: 'inherit', fontSize: '0.82rem',
            }}
          >
            Retry
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}
