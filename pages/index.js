import { ErrorMessage, Field, Formik } from 'formik';
import Link from 'next/link'
import baseUrl from "../helpers/baseUrl";
import * as yup from 'yup'

const Home = ({ cx }) => {
  const initialValue = {
    email: "",
    password: "",
  }
  console.log("users ",cx);
  const onSubmit = async (values, { resetForm }) => {
    console.log("Values ", values);
    const res = await fetch(`${baseUrl}/api/login`, { method: "GET" })
    const data = await res.json()
    window.location.href = "/Profile/test"
    console.log("users ", data);
    resetForm()
  }
  const validationSchema = yup.object().shape({
    email: yup.string().required("Required"),
    password: yup.string().required('Required').min(8, "Minimum 8 Charachers").max(15, "Maximum 15 Characters"),
  })
  return (<div className="container h-100">
    <div className="d-flex justify-content-center h-100 cardDiv">
      <div className="user_card">
        <div className="d-flex justify-content-center">
          <div className="brand_logo_container">
            <img src="images/pinterest-circle-logo-png-transparent.png" className="brand_logo" alt="Logo" />
          </div>
        </div>
        <div className="d-flex justify-content-center form_container">
          <Formik
            initialValues={initialValue}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
          >
            {({ handleSubmit }) => (
              <form onSubmit={(e) => {
                e.preventDefault()
                handleSubmit()
              }}>
                <div className="input-group mb-3">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bi bi-person"></i>
                    </span>
                  </div>
                  <Field type="email" name="email" label="" className="form-control input_user" placeholder="username" />
                </div>
                <ErrorMessage name="email" component="div" className="text-danger" />
                <div className="input-group mb-2">
                  <div className="input-group-append">
                    <span className="input-group-text">
                      <i className="bi bi-key"></i>
                    </span>
                  </div>
                  <Field type="password" name="password" label="" className="form-control input_pass" placeholder="password" />
                </div>
                <ErrorMessage name="pass" component="div" className="text-danger" />
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input type="checkbox" label="" className="custom-control-input" id="customControlInline" />
                    <label className="custom-control-label" htmlFor="customControlInline">Remember me</label>
                  </div>
                </div>
                <div className="d-flex justify-content-center mt-3 login_container">
                  <button type="submit" className="btn login_btn">Login</button>
                </div>
              </form>
            )}
          </Formik>
        </div>

        <div className="mt-4">
          <div className="d-flex justify-content-center links">
            Don't have an account? <a href="#" className="ml-2">Sign Up</a>
          </div>
          <div className="d-flex justify-content-center links">
            <a href="#">Forgot your password?</a>
          </div>
        </div>
      </div>
    </div>
  </div>)

}
export async function getStaticProps() {
  const res = await fetch(`${baseUrl}/api/login`, { method: "GET" })
  const data = await res.json()
  return {
    props: {
      cx: data
    }
  }
}

export default Home