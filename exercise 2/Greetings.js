// welcome

function UserGreeting(props) {
  return <h1>Welcome back!</h1>; // Gunakan tag <h1> yang benar
}

// sign in
function GuestGreeting(props) {
  return <h1>Please sign up.</h1>; // Gunakan tag <h1> yang benar
}

// choose greetings
function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}
