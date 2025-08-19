import { useState } from 'react';
import './sidebar.css'

function Sidebar() {
    const [isOpen, setIsOpen] = useState(true);
    const toggleSidebar = () => {
        setIsOpen(!isOpen)
    }
    return(
        <div className={`sidebar ${isOpen ? 'open' : 'closed'}`}>
            <div className="header">
                <button className='toggleButton' onClick={toggleSidebar}>
                    <div className={`arrow ${isOpen ? 'left' : 'right'}`}></div>
                </button>
                <div className='logo'>
                    <h2>{isOpen ? "My App" : ""}</h2>
                </div>
            </div>
        </div>
    );
}

export default Sidebar