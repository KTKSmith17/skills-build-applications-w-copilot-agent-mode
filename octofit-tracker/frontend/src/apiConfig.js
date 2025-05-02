// apiConfig.js
// Centralized API base URL configuration for OctoFit

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || (typeof window !== 'undefined' && window?.location?.hostname?.includes("github.dev")
  ? `https://${window.location.hostname.replace(/-\d+\./, '-8000.')}`
  : "http://localhost:8000");

export { API_BASE_URL };
