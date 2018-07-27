var React = require('react');
import CompanyProfileComponent from '../components/CompanyProfileComponent';
import allUsers from '../constants/appConfiguration';

class CompanyProfile extends React.Component {
    constructor(props) {
        super(props);
        this.allUsers = allUsers;
        this.perPage = 5;
        this.state = {
            page : 1,
            allUsers : this.allUsers.slice(0,this.perPage)
        };
    }
    
    onPageChange = offset => {
        let startNum = this.perPage * (offset - 1) ;
        let lastNum = startNum + this.perPage ;
        this.setState({page : offset,allUsers : this.allUsers.slice(startNum,lastNum)});
    }

    render() {
        return <CompanyProfileComponent 
        userInfo={this.state.allUsers}
        currentPage = {this.state.page}
        onPageChange = {this.onPageChange}
        totalRecords = {Math.ceil(this.allUsers.length/this.perPage)}
     />; 
    }
}

export default CompanyProfile;

