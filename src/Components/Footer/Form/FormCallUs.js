import useForm from "./useForm";
import validateInfo from "./validateInfo";
import "./Form.css";

const FormCallUs = ({submitForm}) => {
    const { handleChange, values, handleSubmit, errors} = 
        useForm(
            submitForm,
            validateInfo
            );
  return (
      <div className="main-container">
        <div className="form-content-right">
            <form  className="form" onSubmit={handleSubmit}>
                <h1 className="form-header">LET US CALL YOU</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                       First Name 
                    </label>
                    <input 
                            type="text" 
                            name="firstname" 
                            className="form-input" 
                            placeholder="First Name"
                            value={values.firstname}
                            onChange={handleChange}
                            />
                            {errors.firstname && <p>{errors.firstname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="lastname" className="form-label">
                        Last Name
                    </label>
                    <input 
                            type="text" 
                            name="lastname" 
                            className="form-input" 
                            placeholder="Last Name"
                            value={values.lastname}
                            onChange={handleChange}
                            />
                            {errors.lastname && <p>{errors.lastname}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="country" className="form-label">
                        Country
                    </label>
                    <input 
                            type="text" 
                            name="country" 
                            className="form-input" 
                            placeholder="Country"
                            value={values.country}
                            onChange={handleChange}
                            />
                            {errors.country && <p>{errors.country}</p>}
                </div>      
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        Email
                    </label>
                    <input 
                            type="email" 
                            name="email" 
                            className="form-input" 
                            placeholder="Email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                </div>
                <div className="form-inputs">
                    <label htmlFor="phonenumber" className="form-label">
                        Phone Number
                    </label>
                    <input 
                            type="tel" 
                            name="phonenumber" 
                            className="form-input" 
                            placeholder="Phone Number"
                            value={values.phonenumber}
                            onChange={handleChange}
                            />
                            {errors.phonenumber && <p>{errors.phonenumber}</p>}
                </div>
                <div className="checkbox-input">
                    <input 
                        type="checkbox"
                        name="confirm"
                    />
                    <label htmlFor="confirm" className="checkbox-label">
                        I expressly consent to receiving electronic messages by My personel Data and the terms of use.
                    </label>
                </div>

                <button className="form-input-btn"
                    type="submit">
                    Please Call Me
                </button>
            </form>
        </div>
    </div>
  )
}

export default FormCallUs;