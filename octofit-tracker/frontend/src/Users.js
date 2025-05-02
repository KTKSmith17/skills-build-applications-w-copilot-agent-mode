
// Users.js
// Fetches users from the Django REST API
import { API_BASE_URL } from './apiConfig';
export const USERS_API = `${API_BASE_URL}/api/users/`;

// Example usage:
// fetch(USERS_API).then(res => res.json()).then(data => ...);
