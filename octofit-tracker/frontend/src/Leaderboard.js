
// Leaderboard.js
// Fetches leaderboard from the Django REST API
export { API_BASE_URL } from "./Workouts";
export const LEADERBOARD_API = `${API_BASE_URL}/leaderboard/`;

// Example usage:
// fetch(LEADERBOARD_API).then(res => res.json()).then(data => ...);
