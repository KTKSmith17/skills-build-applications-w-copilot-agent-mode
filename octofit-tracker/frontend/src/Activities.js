// Activities.js
// Fetches activities from the Django REST API
const BASE_URL = process.env.CODESPACE_URL || "http://localhost:8000";
export const ACTIVITIES_API = `${BASE_URL}/api/activities/`;

// Example usage:
// fetch(ACTIVITIES_API).then(res => res.json()).then(data => ...);
