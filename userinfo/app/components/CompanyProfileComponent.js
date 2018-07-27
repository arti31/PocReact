var React = require('react');
import UltimatePaginationBootstrap4 from '../lib/components/Paginator'

const CompanyProfileComponent = ({
    userInfo,
    currentPage,
    onPageChange,
    totalRecords
}) => {
    return (
        <div>
            <table cellPadding="8" cellSpacing="8">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Phone</th>
                        <th>Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        userInfo.map((eachRecord, key) => (
                            <tr key={key}>
                                <td>
                                    {eachRecord.Id}
                                </td>
                                <td>
                                    {eachRecord.UserProfile.Name}
                                </td>
                                <td>
                                    {eachRecord.UserProfile.Phone}
                                </td>
                                <td>
                                    {eachRecord.UserProfile.Address}
                                </td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
            <UltimatePaginationBootstrap4
               currentPage={currentPage} 
               totalPages={totalRecords}
               onChange={onPageChange}
       />
        </div>
    )

}
export default CompanyProfileComponent;