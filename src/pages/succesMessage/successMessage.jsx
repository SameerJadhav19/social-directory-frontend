import "./successMessage.css";
import { useHistory} from "react-router-dom";
function SuccessMessage(){
    const history = useHistory();
    const ReDirect = () => {
        history.push("/signin")
    }
    return(
        <div className="success">
            <div className="succesMessage">
                <div className="messages">
                    <span className="msg">
                        Registration successfull!!!! Please <span className="link" onClick={ReDirect}>click here</span> to login.
                    </span>
                </div>
            </div>
        </div>
    )
}
export default SuccessMessage;