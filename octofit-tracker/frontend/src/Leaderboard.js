// Leaderboard.js
// Fetches leaderboard from the Django REST API
const BASE_URL = process.env.CODESPACE_URL || "http://localhost:8000";
export const LEADERBOARD_API = `${BASE_URL}/api/leaderboard/`;

// Example usage:
// fetch(LEADERBOARD_API).then(res => res.json()).then(data => ...);
