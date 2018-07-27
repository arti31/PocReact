var React = require('react');
import allUsers from '../constants/appConfiguration';

const UserProfileComponent = (
    props
) => {
    return (
        <div>
            <div className="allInfo">
                <div className="userProfile">
                    <select onChange={props.displayDetails}>
                        <option value="">Select</option>
                        {
                            allUsers.map((option, key) => <option key={key} value={option.Id}>{option.UserProfile.Name}</option>)
                        }
                    </select>
                </div>
            </div>
            {
                props.allDetails  ? <div className="details">
                    <button className="accordion">Personal Details</button>
                    <div className="panel">
                        <table>
                            <tbody>
                                {
                                   props.allDetails[0] ? Object.keys(props.allDetails[0].UserProfile).map((key,id) =>
                                        <tr key = {id}>
                                            <td> {key} </td>
                                            <td> {props.allDetails[0].UserProfile[key]} </td>
                                        </tr>

                                    ) : (<tr>No Records Available</tr>)
                                }
                            </tbody>
                        </table>
                    </div>

                    <button className="accordion">Employment Details</button>
                    <div className="panel">
                    <table>
                            <tbody>
                                {
                                   props.allDetails[0] ?  Object.keys(props.allDetails[0].EmploymentProfile).map((key,id) =>
                                        <tr key = {id}>
                                            <td> {key} </td>
                                            <td> {key == 'Skills' ? props.allDetails[0].EmploymentProfile.Skills.join() : props.allDetails[0].EmploymentProfile[key]} </td>
                                        </tr>

                                    ) : (<tr>No Records Available</tr>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div> : <div></div>
            }

        </div>
    )
}
export default UserProfileComponent;