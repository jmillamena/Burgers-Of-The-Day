import Card from "react-bootstrap/Card";

function Header() {
  return (
    <>
      <Card>
        <Card.Body>
          <Card.Text>
            <strong>
              Welcome to bobs burgers Resturaunt.
              <br />
              We are Showcasing our Burgers of the Day for our Favorite
              Customers!!!! yes, we mean you Teddy...
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
