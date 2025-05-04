
import React, { useEffect, useState } from 'react';
import { Card, Table, Spinner, Alert } from 'react-bootstrap';

const ACTIVITIES_API = 'https://literate-space-journey-9wr7796xxv63vp9-8000.app.github.dev/api/activities/';

function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(ACTIVITIES_API)
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch activities');
        return res.json();
      })
      .then(data => {
        setActivities(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Card className="mb-4">
      <Card.Body>
        <Card.Title as="h2" className="mb-3">Activities</Card.Title>
        {loading && <Spinner animation="border" role="status"><span className="visually-hidden">Loading...</span></Spinner>}
        {error && <Alert variant="danger">{error}</Alert>}
        <Table striped bordered hover responsive>
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>User</th>
              <th>Type</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(a => (
              <tr key={a._id}>
                <td>{a._id}</td>
                <td>{a.user}</td>
                <td>{a.activity_type}</td>
                <td>{a.duration}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
}

export default Activities;
