import React, {useState} from 'react';

const SmallForm = (props) => {
    const [form, setForm] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });

    const onChangeHandler = (event) => {
        setForm({
            ...form, //spread out what is already instated 
            [event.target.name]:event.target.value
        })
    }
    return (
        <div className="mx-auto center">
            <form>
                <div className="form-row">
                    <div className="form-group col-md-6 mx-auto center mb-3">
                        <label for="firstName">First Name:</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="firstName" />
                    </div>
                    <div className="form-group col-md-6 mx-auto center m-3">
                        <label for="lastName">Last Name:</label>
                        <input type="text" onChange={onChangeHandler} className="form-control" name="lastName"/>
                    </div>
                </div>

                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="email">Email:</label>
                    <input type="email" onChange={onChangeHandler} className="form-control" name="email"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="password">Password:</label>
                    <input type="password" onChange={onChangeHandler} className="form-control" name="password"/>
                </div>
                <div className="form-group col-md-6 mx-auto center m-3">
                    <label for="confirmPassword">Confirm Password:</label>
                    <input type="password" onChange={onChangeHandler} className="form-control" name="confirmPassword"/>
                </div>

                <button type="submit" className="btn btn-primary btn-Ig m-3">Sign in</button>
            </form>

            <div>
                <h1>Form Result</h1>
            <h3>Your Form Data</h3>
            <p>First Name: {form.firstName}</p>
            <p>Last Name: {form.lastName}</p>
            <p>Email: {form.email}</p>
            <p>Password: {form.password}</p>
            <p>Confirm Password: {form.confirmPassword}</p>
        </div>
        </div>
        
    )
}

export default SmallForm;