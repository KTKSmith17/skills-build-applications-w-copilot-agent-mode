// Workouts.js
// Fetches workouts from the Django REST API
const BASE_URL = process.env.CODESPACE_URL || "http://localhost:8000";
export const WORKOUTS_API = `${BASE_URL}/api/workouts/`;

// Example usage:
// fetch(WORKOUTS_API).then(res => res.json()).then(data => ...);
