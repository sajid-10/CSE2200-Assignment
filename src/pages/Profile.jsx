import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import photo from "../assets/prof.jpeg";

export default function ProfilePage() {
  const user = {
    fullName: "Sajid Al Amin",
    email: "sajid@gmail.com",
    avatar: photo,
    joined: "Jan 10, 2023"
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", 
        backgroundColor: "#181852ff",
        color: "white"
      }}
    >
      <div style={{ textAlign: "center" }}>
        <h1 style={{ marginBottom: 20 }}>Profile</h1>

        <Card style={{ maxWidth: 320, margin: "0 auto", boxShadow: "0 4px 12px rgba(0,0,0,0.1)" }}>
          <Card.Img variant="top" src={user.avatar} />
          <Card.Body>
            <Card.Title>{user.fullName}</Card.Title>
            <Card.Text className="text-muted">{user.email}</Card.Text>
          </Card.Body>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <strong>Full Name:</strong> {user.fullName}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Email:</strong> {user.email}
            </ListGroup.Item>
            <ListGroup.Item>
              <strong>Date Joined:</strong> {user.joined}
            </ListGroup.Item>
          </ListGroup>
        </Card>
      </div>
    </div>
  );
}
