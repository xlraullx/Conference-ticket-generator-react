import './index.css'
import logo from '../../assets/images/logo-mark.svg'

const Ticket = (user) => {
    const avatar = typeof user.data.avatar === 'string'? user.data.avatar : URL.createObjectURL(user.data.avatar[0])

    return (
        <div className='ticket-container'>
            <h1>Congrats, <span className='name-gradiant'>{user.data.name}!</span><br /> Your ticket is ready.</h1>

            <p className='ticket-message'> We've emailed your ticket to <br /><span>{user.data.email}</span> and will send updates in <br /> the run up to the event.</p>

            <div className='ticket-container-card'>
                    <div className='ticket-card'>
                        <div className='ticket-top'>
                            <img src={logo} alt="logo" />
                            <div className='ticket-about'>
                                <p>Coding Conf</p>
                                <span className='ticket-info'>Jan 31, 2025 / Austin, TX</span>
                            </div>
                        </div>
                        <div className='ticket-user'>
                            <img src={avatar} alt="User Avatar"/>
                            <div className='user-info'>
                                <p className='user-name'>{user.data.name}</p>
                                <p className='user-github'>{user.data.githubUserName}</p>
                            </div>
                        </div>
                        <div className='ticket-id'><p className='id'>#01609</p></div>
                    </div>
            </div>
        </div>
    )
}

export default Ticket;