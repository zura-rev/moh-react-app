import React, { useState  } from "react";

const initialState = {
    apP_PID:'',
    apP_FIRST_NAME:'',
    apP_LAST_NAME:'',
    apP_PHONE:'',
    apP_REG_ADDRESS:''
}

const CreateApplicationPage = () => {

    const [formState, setFormState] = useState(initialState)

    const handleChange = (event)=>{
        const{name, value} = event.target
        setFormState({...formState, [name]: value})
        console.log('formState', formState)
    }

    return <>
        <form>
            <div class="mb-3">
                <label htmlFor="pid" class="form-label">PID</label>
                <input type="text" className="form-control" id="pid" name="apP_PID" value={formState.apP_PID} onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label htmlFor="firstName" className="form-label">firstName</label>
                <input type="text" className="form-control" id="firstName" name="apP_FIRST_NAME" value={formState.apP_FIRST_NAME} onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label htmlFor="lastName" className="form-label">lastName</label>
                <input type="text" className="form-control" id="lastName" name="apP_FIRST_NAME" value={formState.apP_LAST_NAME} onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label htmlFor="phone" className="form-label">phone</label>
                <input type="text" className="form-control" id="phone" name="apP_PHONE" value={formState.apP_PHONE} onChange={handleChange} />
            </div>
            <div class="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" name="apP_REG_ADDRESS" value={formState.apP_REG_ADDRESS} onChange={handleChange} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
}

export default CreateApplicationPage