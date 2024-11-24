import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetProfiles } from '../components/actions/profileActions';
import RowDetails from '../components/RowDetails';

function Admin() { 

 
  const profiles =useSelector(state=>state.profiles); 
  const dispatch =useDispatch(); 
  useEffect(() => { 
    const fetchProfiles = async () => { 
      await dispatch(GetProfiles());
    };
  
    fetchProfiles();
  }, [dispatch]);
  
  

  return (
      <div className="container p-4 mt-4">
        <div className="row justify-content-evenly mt-4">
          <div className="col-lg-12 col-md-12 mt-4">
            <div className="d-flex">
              <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profiles list</h2>
            </div>
            <div className="shadow-lg p-3 mb-5 bg-body rounded" style={{ backgroundColor: "white" }}>
              <table className="table table-hover">
                <thead> 

                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Role</th>
                    <th scope="col">Telephone</th>
                    <th scope="col">City</th>
                    <th scope="col">Country</th>
                    <th scope="col">Bio</th>
                    <th scope="col">Actions</th>
                  </tr>
                </thead>
                <tbody> 
  {profiles && profiles.profiles && profiles.profiles.length > 0 ? (
    profiles.profiles.map(({ _id, user, tel, city, country, bio, postalcode }) => (
      <RowDetails 
        key={_id} 
        _id={_id} 
        user={user} 
        tel={tel} 
        city={city} 
        country={country} 
        bio={bio} 
        postalcode={postalcode} 
      />
    ))
  ) : (
    <tr>
      <td colSpan="8" className="text-center">
        No profiles found
      </td>
    </tr>
  )}
</tbody>

              </table>
            </div>
          </div>
        </div>
      </div>
    
  );
}

export default Admin;
