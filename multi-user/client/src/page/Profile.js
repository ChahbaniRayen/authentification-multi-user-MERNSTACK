import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Inputs from "../components/Inputs";
import { addProfile, GetProfile } from "../components/actions/profileActions";

function Profile() {
  const reduxErrors = useSelector((state) => state?.errors);
  const [message, setMessage] = useState("");
  const [show, setShow] = useState(false);
  const profiles = useSelector((state) => state?.profiles);
  const [form, setForm] = useState({});
  const dispatch = useDispatch();
  const onChangeHandel = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  console.log(form, "form data");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(addProfile(form, setMessage,setShow));
  };
  useEffect(() => {
    const fetchData = async () => {
      await dispatch(GetProfile());
    };
    fetchData();
  }, [dispatch]);

  useEffect(() => {
    if (profiles?.profile) {
      setForm(profiles.profile);
    }
  }, [profiles?.profile]);

  return (
    <div className="container p-4 mt-4">
      <div className="row justify-content-evenly mt-4">
        {show ? (
          <div class="alert alert-success" role="alert">
            {message}
          </div>
        ) : (
          ""
        )}
        <div className="col-lg-6 col-md-12 mt-4">
          <div className="d-flex">
            <i className="fa-solid fa-user fs-1 mx-2"></i> <h2>Profile</h2>
          </div>
          <div
            className="p-6 shadow-lg p-3 mb-5 bg-body rounded"
            style={{ backgroundColor: "white" }}>
            <form onSubmit={onSubmit}>
              <Inputs
                name="tel"
                label="Telephone"
                value={form && form.tel ? form.tel : ""}
                type="text"
                onChangeHandel={onChangeHandel}
              />
              {reduxErrors?.tel && (
                <div style={{ color: "red" }}>{reduxErrors?.tel}</div>
              )}
              <Inputs
                name="city"
                label="City"
                value={form && form.city ? form.city : ""}
                type="text"
                onChangeHandel={onChangeHandel}
              />
              {reduxErrors?.city && (
                <div style={{ color: "red" }}>{reduxErrors?.city}</div>
              )}

              <Inputs
                name="country"
                label="Country"
                value={form && form.country ? form.country : ""}
                type="text"
                onChangeHandel={onChangeHandel}
              />
              {reduxErrors?.country && (
                <div style={{ color: "red" }}>{reduxErrors?.country}</div>
              )}

              <Inputs
                name="bio"
                label="Bio"
                type="text"
                value={form && form.bio ? form.bio : ""}
                onChangeHandel={onChangeHandel}
              />
              {reduxErrors?.bio && (
                <div style={{ color: "red" }}>{reduxErrors?.bio}</div>
              )}

              <Inputs
                name="postalcode"
                label="PostalCode"
                value={form && form.postalcode ? form.postalcode : ""}
                type="text"
                onChangeHandel={onChangeHandel}
              />
              {reduxErrors?.postalcode && (
                <div style={{ color: "red" }}>{reduxErrors?.postalcode}</div>
              )}

              <div className="d-flex justify-content-between">
                <button type="submit" className="btn btn-outline-primary">
                  Update <i className="fa-solid fa-floppy-disk"></i>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
