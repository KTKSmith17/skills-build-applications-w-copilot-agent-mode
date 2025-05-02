
// Activities.js
// Fetches activities from the Django REST API
export { API_BASE_URL } from "./Workouts";
export const ACTIVITIES_API = `${API_BASE_URL}/activities/`;

// Example usage:
// fetch(ACTIVITIES_API).then(res => res.json()).then(data => ...);
