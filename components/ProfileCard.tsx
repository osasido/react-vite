import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Row, Col, Container } from 'react-bootstrap';
import { getProfiles } from '../src/Apis/Api';
import { Profile } from "../src/models/Profile"

const ProfileCard = () => {

    const [profiles, setProfiles] = useState<Profile[]>([])
    const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
        setIsLoading(true)
        getProfiles().then(data => {
            setProfiles(data)
            setIsLoading(false)
        });
    }, [])
    console.log(profiles)

    return (
        <>
            {
                isLoading ?
                    <Container>
                        <h2>Loading...</h2>
                    </Container> :
                    <Row>
                        {
                            profiles.map((profile, index) => (
                                <Col key={index}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" src={profile.avatar} />
                                        <Card.Body>
                                            <Card.Title> {profile.first_name + " " + profile.last_name} </Card.Title>
                                            <Card.Text>
                                                {profile.employment.title + " in " + profile.address.state + ", " + profile.address.country}
                                            </Card.Text>
                                            <Link to={`/profile/${profile.id}`} state={profile}>
                                                <Button variant="primary">View Profile</Button>
                                            </Link>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                        }
                    </Row>
            }
        </>
    )
}

export default ProfileCard