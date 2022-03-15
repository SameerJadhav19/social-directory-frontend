import "./introduction.css";

function Introduction(){
    return(
        <div className="introductionContainer">
            <div className="introPage">
                <div className="welcomeMessage">
                    Welcome To Social Directory
                </div>
                <div className="information">
                    <ul>
                        <li>Here you can find people with mutual interest and add them to your personal contact list.</li>
                        <li>You can create your profile so that people who are interested in you can contact you.</li>
                        <li>You can also search people of your interest and add them to your list of friends.</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Introduction;