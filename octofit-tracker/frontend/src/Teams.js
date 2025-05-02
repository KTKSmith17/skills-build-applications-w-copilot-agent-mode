// Teams.js
// Fetches teams from the Django REST API
const BASE_URL = process.env.CODESPACE_URL || "http://localhost:8000";
export const TEAMS_API = `${BASE_URL}/api/teams/`;

// Example usage:
// fetch(TEAMS_API).then(res => res.json()).then(data => ...);
