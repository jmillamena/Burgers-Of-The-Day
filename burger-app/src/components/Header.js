import Card from "react-bootstrap/Card";
import "./App.css";

function Header() {
  return (
    <>
      <Card>
        <Card.Body className="home-card">
          <Card.Text className="homecard-text">
            <strong>
              Welcome to Bob's Burgers Restaurant.
              <br />
              We are showcasing our Burgers of the Day for our Favorite
              Customers!!!! Yes, we mean you Teddy...
            </strong>
          </Card.Text>
        </Card.Body>
        <Card.Img
          variant="bottom"
          src="https://i.cbc.ca/1.5953371.1616001351!/fileImage/httpImage/bob-s-burgers.jpg"
        />
      </Card>
    </>
  );
}

export default Header;
