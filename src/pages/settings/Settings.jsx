import Sidebar from '../../components/sidebar/Sidebar'
import './settings.css'

export default function Settings() {
    return (
        <div className='settings'>
            <div className="settingsWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update your account</span>
                    <span className="settingsDeleteTitle">Delete your account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className='' src="https://images.unsplash.com/photo-1662920390926-61936eddb607?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80" alt="profile pic - update later" />
                        <label htmlFor="fileInput"><i className="settingsPPIcon fa-regular fa-circle-user"></i></label>
                        <input type="file" id='fileInput' style={{ display: 'none' }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder='Jay' />
                    <label>Email</label>
                    <input type="email" placeholder='mratyunjaykag@gmail.com' />
                    <label>Password</label>
                    <input type="password" />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}
