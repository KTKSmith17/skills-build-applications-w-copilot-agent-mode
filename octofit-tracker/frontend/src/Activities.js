
// Activities.js
// Fetches activities from the Django REST API
import { API_BASE_URL } from './apiConfig';
export const ACTIVITIES_API = `${API_BASE_URL}/api/activities/`;

// Example usage:
// fetch(ACTIVITIES_API).then(res => res.json()).then(data => ...);
