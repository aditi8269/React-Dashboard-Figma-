import '@testing-library/jest-dom';

// Mock ResizeObserver for Recharts (Jest doesn’t have it natively)
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
global.ResizeObserver = ResizeObserver;

