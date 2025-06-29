'use client';

// Import the Font Awesome CSS
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Prevent Font Awesome from adding its CSS since we did it manually above
config.autoAddCss = false;

// Import the Font Awesome library configuration
import '../app/utils/fontawesome';

export function Providers({ children }) {
  return children;
}
