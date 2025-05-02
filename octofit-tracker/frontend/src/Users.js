// Users.js
// Fetches users from the Django REST API
const BASE_URL = process.env.CODESPACE_URL || "http://localhost:8000";
export const USERS_API = `${BASE_URL}/api/users/`;

// Example usage:
// fetch(USERS_API).then(res => res.json()).then(data => ...);
