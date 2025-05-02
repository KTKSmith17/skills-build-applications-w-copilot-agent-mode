// WorkoutsList.js
// Displays a list of workouts fetched from the backend API
import React, { useEffect, useState } from "react";
import { WORKOUTS_API } from "./Workouts";
import "./App.css";

const WorkoutsList = () => {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(WORKOUTS_API)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch workouts");
        return res.json();
      })
      .then((data) => {
        setWorkouts(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center mt-4">Loading workouts...</div>;
  if (error) return <div className="alert alert-danger mt-4">{error}</div>;

  return (
    <div className="container mt-4">
      <h2 className="octofit-heading mb-4">Workouts</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered table-hover align-middle">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Type</th>
              <th>Duration (min)</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {workouts.length === 0 ? (
              <tr><td colSpan="5" className="text-center">No workouts found.</td></tr>
            ) : (
              workouts.map((w) => (
                <tr key={w.id || w._id}>
                  <td>{w.name}</td>
                  <td>{w.type}</td>
                  <td>{w.duration}</td>
                  <td>{w.calories}</td>
                  <td>{w.date ? new Date(w.date).toLocaleDateString() : ""}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default WorkoutsList;
