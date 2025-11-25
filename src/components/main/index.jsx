import './index.css'
import Form from '../form'
import { Ticket } from '../ticket'

const Main = () => {
    return(
    <main className="main">
        <div className="presentation-text">
            <h1>Your Journey to Coding Conf <br /> 2025 Starts Here!</h1>
            <p>Secure your spot at next year's biggest coding conference.</p>
        </div>
        
        <Form/>
        {/* <Ticket/> */}
        
    </main>
    )
}

export default Main 