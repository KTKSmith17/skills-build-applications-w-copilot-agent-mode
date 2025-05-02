// Workouts.js
// Fetches workouts from the Django REST API
import { API_BASE_URL } from './apiConfig';
export const WORKOUTS_API = `${API_BASE_URL}/api/workouts/`;

// Example usage:
// fetch(WORKOUTS_API).then(res => res.json()).then(data => ...);
