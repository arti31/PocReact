var React = require('react');
import UserProfileComponent from '../components/UserProfileComponent';
import allUsers from '../constants/appConfiguration';

class UserProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    displayDetails = event => {
       let filteredRecords = allUsers.filter(records => records.Id === parseInt(event.target.value));
       this.setState({
        allDetails : filteredRecords
       });
    }

    render() {
        const props = {
            displayDetails : this.displayDetails,
            allDetails : this.state.allDetails
        }
        return <UserProfileComponent 
              {...props}
        />; 
    }
}

export default UserProfile;

