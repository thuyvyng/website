import { Button, Card, Container, Row } from "react-bootstrap";
import Navigation from "../components/navbar";
import ApiCalendar from "react-google-calendar-api";
import { useState } from "react";
const config = {
  clientId:
    "870230699419-d9v2tsag3c29163j5freiabl7sb8kl99.apps.googleusercontent.com",
  apiKey: process.env.GOOGLE_API_API_KEY,
  scope: "https://www.googleapis.com/auth/calendar",
  discoveryDocs: [
    "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest",
  ],
};
export default function Concert() {
  const apiCalendar = new ApiCalendar(config);
  const [user, setUser] = useState(false);
  const [concerts, setConcerts] = useState([]);

  const handleItemClick = (event, name) => {
    if (name === "sign-in") {
      apiCalendar.handleAuthClick();
      setUser(true);
    } else if (name === "sign-out") {
      apiCalendar.handleSignoutClick();
      setUser(false);
    }
  };

  return (
    <span>
      <Navigation />
      <Container>
        {user ? (
          <Button onClick={(e) => handleItemClick(e, "sign-out")}>
            Sign Out
          </Button>
        ) : (
          <Button onClick={(e) => handleItemClick(e, "sign-in")}>
            Sign In
          </Button>
        )}
        <div>
          <h1 class="display-2 text-right" style={{ textAlign: "right" }}>
            thuyvy's tour
          </h1>{" "}
          {user ? (
            <Button
              style={{ textAlign: "right" }}
              onClick={(e) => {
                apiCalendar
                  .listEvents({
                    q: "concert",
                    maxResults: 20,
                    timeMin: "2025-01-03T10:00:00-07:00",
                    singleEvents: true,
                    orderBy: "startTime",
                  })
                  .then(({ result }) => {
                    setConcerts(result.items);
                  });
              }}
            >
              Create Concert Poster!
            </Button>
          ) : (
            <></>
          )}
          <>
            {concerts.map((concert) => {
              return (
                <Row>
                  <Card>
                    {" "}
                    <Card.Title>
                      {" "}
                      {concert.summary.split("Concert")[0].toUpperCase()}{" "}
                    </Card.Title>
                    <b>
                      <p>
                        <span>
                          {concert.start.date
                            ? new Date(concert.start.date).toDateString()
                            : new Date(
                                concert.start.dateTime,
                              ).toDateString()}{" "}
                        </span>
                        |{" "}
                        <span style={{ color: "#50daa7" }}>
                          {concert.location
                            ? " " + concert.location
                            : " TBD"}{" "}
                        </span>
                      </p>
                    </b>
                  </Card>
                </Row>
              );
            })}
          </>
        </div>
      </Container>
    </span>
  );
}
