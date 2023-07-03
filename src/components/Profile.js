import { Component } from "react";
import UserContext from "../../utils/UserContext";

class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Michael Scott",
      location: "that'swhatshesaid",
    };
  }
  async componentDidMount() {
    this.timer = setInterval(() => {
    }, 1000);
    const data = await fetch("https://api.github.com/users/nikhilchhetri");
    const json = await data.json();
    this.setState({
      username: json.login,
      location: json.location,
    });
  }
  componentWillUnmount() {
    clearInterval(this.timer);
  }
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {({ user }) => (
            <h2>
              {user.name} - {user.email} Data from UserContext
            </h2>
          )}
        </UserContext.Consumer>
        <h2>Profile - Class based component</h2>
        <h3>{this.props.name}</h3>
        <h3>{this.state.username}</h3>
        <h3>{this.state.location}</h3>
        <button
          onClick={() => {
            this.setState({
              username: "Date Mike",
              password: "parkour!!!",
            });
          }}
        >
          click me
        </button>
      </div>
    );
  }
}

export default Profile;
