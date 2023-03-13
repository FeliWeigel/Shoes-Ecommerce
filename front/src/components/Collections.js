import "./Home.css"
import "../index.css"
import cardImg1 from "../assets/images/collections1.png"
import cardImg2 from "../assets/images/collections2.png"
import cardImg3 from "../assets/images/collections3.png"

export default function Collections(){
    return (
        <div className="collections container">
            <h3>The best brands and their best models</h3>
            <div className="bar collections-bar"></div>

            <div className="collections-content">
                <div className="collections-card">
                    <h4>JORDAN RETRO 2</h4>
                    <img src={cardImg1} alt="error"/>
                    <h5>Brand: <span>nike</span></h5>
                    <p>Collection: New Arrival</p>
                    <button>View More <i className='bx bx-chevrons-right card-btn-logo'></i></button>
                </div>
                <div className="collections-card">
                    <h4>AIR MAX 90'</h4>
                    <img src={cardImg2} alt="error"/>
                    <h5>Brand: <span>nike</span></h5>
                    <p>Collection: New Arrival</p>
                    <button>View More <i className='bx bx-chevrons-right card-btn-logo'></i></button>
                </div>
                <div className="collections-card">
                    <h4>AIR HUARACHE</h4>
                    <img src={cardImg3} alt="error"/>
                    <h5>Brand: <span>nike</span></h5>
                    <p>Collection: New Arrival</p>
                    <button>View More <i className='bx bx-chevrons-right card-btn-logo'></i></button>
                </div>
            </div>
        </div>
    )
}