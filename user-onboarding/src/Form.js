import React from 'react';


const Form = (props) => {
    const { change, submit, errors } = props;
    const { username, email, password, tos, disabled } = props.values;


    const onChange = (evt) => {
        const {name, value, checked, type} = evt.target;
        const newOne = type === 'checkbox' ? checked : value;
        change(name, newOne)
    }

    const onSubmit = (evt) => {
        evt.preventDefault();
        submit();
    }

    return (

        <div>
            <h1>Form Management</h1>
            <div>{errors.username}</div>
            <div>{errors.password}</div>
            <div>{errors.email}</div>
            <div>{errors.tos}</div>
            <form onSubmit={onSubmit}>
                <label>Name:
                    <input type="text" 
                    name="username" 
                    value={username} 
                    onChange={onChange}
                    />
                </label>
                <label>Email:
                    <input type="email" 
                    name="email" 
                    value={email} 
                    onChange={onChange}
                    />
                </label>
                <label>Password:
                    <input type="password" 
                    name="password" 
                    value={password} 
                    onChange={onChange}
                    />
                </label>
                <label>Terms of Service:
                    <input type="checkbox" 
                    name="tos" 
                    value={tos} 
                    onChange={onChange}
                    />
                </label>
                <button id='submit' disabled={disabled}>submit</button>
            </form>
        </div>
    )
}

export default Form;