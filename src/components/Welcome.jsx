
const userName = "Rahul";

export function Welcome() {
    // this.userName = "Raju";
    return (
        <>
        <h1 className="welcome-title">Welcome to the App, {userName}!</h1>
        </>
    )
}

export function WelcomeMessage({message}) {
    return (
        <>
        <p>{message}</p>
        </>
    )
}

