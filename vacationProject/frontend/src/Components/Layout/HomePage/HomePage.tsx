import { useNavigate } from "react-router-dom";
import "./HomePage.css";


function HomePage(): JSX.Element {
    const navigate = useNavigate();
    return (
        <div className="HomePage">
			<h1>Vacation website</h1>

            <h3>For Register Click <span className="color" onClick={()=>{
                navigate("/register");
            }}>Here</span> or SingIn</h3>
        </div>
    );
}

export default HomePage;