import React, {useState} from 'react';
import './Student.css';
import lincoln from './lincoln.png';


const Student = () => {
    const [popupStyle, showPopup] = useState("hide")
    const popup = () => {
        showPopup("login-popup")
        setTimeout(() => {
            
        }, 9000);
        
    }


    return(
        <div className='signup'>
        <div className='container'>
        <div className='card'>
        <div class="inner-box" id="card">
                <div class="card-front">
                    <div className='logo'>
                        <img src={lincoln} alt=''/>
                    </div>
                    <form>
                        <input type="text" class="input-box" placeholder="Username"/>
                        <input type="text" class="input-box" placeholder="Email address"/>
                        <input type="email" class="input-box" placeholder="password"/>
                        <input type="password" class="input-box" placeholder="Confirm Password"/>
                        <button onClick={popup} class="submit-btn">Submit</button>  
                               
                    </form>
                    
                
                </div>
                <div className={popupStyle}>
                            <h3>Welcome</h3>
                            <p class='button'>Are you a lecturer or a Student?</p>
                            </div>   
                </div>
         </div>
         </div>
         </div>
    )

    }

export default Student;