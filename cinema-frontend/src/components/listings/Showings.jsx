import Link from "react-router-dom/Link";
import Button from "react-bootstrap/Button";


const Showings = ({ showing, movie, setTime, setTitle }) => {


    const linkbooking = () => {

        let time = showing;
        let title = movie.title;

        setTime(time);
        setTitle(title);
    }


    return (
        <Link to="/bookings" ><Button className="mr-3" variant="primary" onClick={linkbooking}>{showing} </Button></Link>
    );
}

export default Showings;