import React from "react";
import "./hp.css"; // Import the CSS file
import { useNavigate } from "react-router-dom";

const Hp = () => {
    const navigate=useNavigate();
    const handlecontinue=()=>{
        navigate("/login")
    }
  return (
    <div className="hm_back">
      <>    
        <div className="hm_cent">
          <>
            <div className="hm_casesheet">
              <p>CASE SHEET</p>
            </div>
          </>
          <>
            <div className="hm_logo">
              <h1>HOPE RECOVERY CENTRE</h1>
              <p>Integrated rehabilitation centre for addicts (IRCA)</p>
              <button className="hm_btn" onClick={handlecontinue}>Continue</button>
              <hr className="hm_line" />
            </div>
          </>
          <>
          <div className="btm_part">
            <p>
                <h3>Project Managed by Hope Recovery centre (R)</h3>
            </p>
            <p>
                Recognized by : Ministry of Social Justice and Empowerment, Govt of India.
            </p>
            <p>
                Co-ordinated by : Women and Child Welfare Department, Govt of Karnataka.
            </p>
            <p>
                Piranwadi Village, Piranwadi Post, Janatha Plot, Opposite to KLS Public School, Belagavi - 590014
                <p className="inside_p">
                    Ph:0831-2400150, 8197453180, E-mail:hopepiranwadi@gmail.com
                </p>
            </p>
          </div>
          </>
        </div>
      </>
    </div>
  );
};

export default Hp;
