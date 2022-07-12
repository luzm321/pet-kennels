import "./WelcomeUser.css";

export const WelcomeUser = ({ userName }) => {

    return (
        <>
            <h3 className="userName">Welcome, {userName}!</h3>
        </>
    )
};