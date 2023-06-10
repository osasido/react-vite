import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { useLocation } from 'react-router-dom';
import { Profile } from '../models/Profile';

const ProfilePage = () => {

  const [profile, setProfile] = useState<Profile>()
  const location = useLocation();


  useEffect(() => {
    // console.log(location.state);
    setProfile(location.state)
  }, [])


  return (
    <Card style={{ width: '40%', margin: "0 auto" }}>
      {/* type checks happen here */}
      <Card.Img variant="top" src={profile ? profile.avatar : ""} />
      <Card.Body>
        <Card.Title>{profile ? profile.first_name + " " + profile.last_name : ""}</Card.Title>
        <Card.Text>
          {
            profile ?
              profile.employment.title + " in " + profile.address.state + ", " + profile.address.country
              : ""
          }
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>
          Username: {profile ? profile.username : ""}
        </ListGroup.Item>
        <ListGroup.Item>
          Date of Birth: {profile ? profile.date_of_birth : ""}
        </ListGroup.Item>
        <ListGroup.Item>
          Email: {profile ? profile.email : ""}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="/">Home</Card.Link>
      </Card.Body>
    </Card>
  )
}

export default ProfilePage