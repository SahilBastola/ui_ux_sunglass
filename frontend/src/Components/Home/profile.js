import React, { useState } from "react";

const ProfilePage = () => {
  const [userInfo, setUserInfo] = useState({
    name: "Tekkk",
    email: "tekk@.com",
    password: "tekk123",
    profileImage: "https://fiverr-res.cloudinary.com/images/q_auto,f_auto/gigs2/103084523/original/67f215591f6b20f71983e601030e82b31f5292a5/create-a-cartoon-profile-picture.jpg",
  });
  const [isEditing, setIsEditing] = useState(false);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
    // Here you would typically make an API call to update the user's information in the backend
  };

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Profile Page</h1>
      <div className="row">
        <div className="col-md-3">
          <img src={userInfo.profileImage} alt="Profile" className="img-thumbnail" />
        </div>
        <div className="col-md-9">
          <form>
            <div className="form-group">
              <label htmlFor="nameInput">Name</label>
              {isEditing ? (
                <input
                  type="text"
                  className="form-control"
                  id="nameInput"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">{userInfo.name}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="emailInput">Email</label>
              {isEditing ? (
                <input
                  type="email"
                  className="form-control"
                  id="emailInput"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">{userInfo.email}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="passwordInput">Password</label>
              {isEditing ? (
                <input
                  type="password"
                  className="form-control"
                  id="passwordInput"
                  name="password"
                  value={userInfo.password}
                  onChange={handleInputChange}
                />
              ) : (
                <p className="form-control-plaintext">********</p>
              )}
            </div>
            <div className="text-right">
              {isEditing ? (
                <button type="button" className="btn btn-primary mr-2" onClick={handleSaveClick}>
                  Save
                </button>
              ) : (
                <button type="button" className="btn btn-primary mr-2" onClick={handleEditClick}>
                  Edit
                </button>
              )}
              <button type="button" className="btn btn-danger">
                Logout
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;