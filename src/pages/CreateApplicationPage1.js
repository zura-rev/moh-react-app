import React, { useState, useRef, useEffect } from "react";
import { Button, Form, Row, Col } from 'react-bootstrap'


const CreateApplicationPage = () => {

    const [apP_PID, setApP_PID] = useState("")
    const [apP_FIRST_NAME, setApP_FIRST_NAME] = useState("")
    const [apP_LAST_NAME, setApP_LAST_NAME] = useState("")
    const [apP_PHONE, setApP_PHONE] = useState("")
    const [apP_REG_ADDRESS, setApP_REG_ADDRESS] = useState("")

    const addressRef = useRef(null)

    const refChange = (event) => {
        console.log('__ref', addressRef.current)
    }

    return <>
        <form>
            <div class="mb-3">
                <label  htmlFor="address2" className="form-label">address2</label>
                <input type="text" ref={addressRef} className="form-control" id="address2" onChange={refChange}  />
            </div>
            <div class="mb-3">
                <label htmlFor="pid" class="form-label">PID</label>
                <input type="text" className="form-control" id="pid" name="apP_PID" value={apP_PID} onChange={(event) => setApP_PID(event.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="firstName" className="form-label">firstName</label>
                <input type="text" className="form-control" id="firstName" name="firstName" value={apP_FIRST_NAME} onChange={(event) => setApP_FIRST_NAME(event.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="lastName" className="form-label">lastName</label>
                <input type="text" className="form-control" id="lastName" value={apP_LAST_NAME} onChange={(event) => setApP_LAST_NAME(event.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="phone" className="form-label">phone</label>
                <input type="text" className="form-control" id="phone" value={apP_PHONE} onChange={(event) => setApP_PHONE(event.target.value)} />
            </div>
            <div class="mb-3">
                <label htmlFor="address" className="form-label">address</label>
                <input type="text" className="form-control" id="address" value={apP_REG_ADDRESS} onChange={(event) => setApP_REG_ADDRESS(event.target.value)} />
            </div>

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </>
}

export default CreateApplicationPage