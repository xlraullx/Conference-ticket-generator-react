import { useLocation } from "react-router";
import Ticket from "../components/ticket/index.jsx";

const TicketPage = () => {
    const Location = useLocation();
    const data = Location.state;
    return <Ticket data={data}/>;
};

export default TicketPage;