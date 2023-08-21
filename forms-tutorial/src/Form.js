import React, { useState } from "react"



export default function Form () {
    const [formFields, setFormFields] = useState({
        firstName: "",
        lastName: "",
        userName: "",
        description: "",
        isTrue: true,
        tiers: "",
        favColour: ""
    })


    function handleChange(event) {
        const {name, value, type, checked} = event.target
        setFormFields(prevState => {
            return {
                ...prevState,
                [name]: type === "checkbox" ? checked : value
            }
        })
    }

    function handleSubmit(event) {
        event.preventDefault()
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" 
            placeholder="First Name" 
            onChange={handleChange} 
            name="firstName" 
            value={formFields.firstName}
            />

            <input type="text" 
            placeholder="Last Name" 
            onChange={handleChange} 
            name="lastName" 
            value={formFields.lastName}
            />

            <input type="text" 
            placeholder="Username" 
            onChange={handleChange} 
            name="userName" 
            value={formFields.userName}
            />

            <textarea 
                placeholder="description"
                onChange={handleChange}
                name="description"
                value={formFields.description}
                />

              <div className="flx"> <input
                    type="checkbox"
                    id="isTrue"
                    checked={formFields.isTrue}
                    onChange={handleChange}
                    name="isTrue"
                    />
                <label htmlFor="isTrue">Subscribing</label>
                <br />
                </div> 

                <fieldset>

                    <legend>Choose Subscription Plan</legend>

                    <div className="flx">
                    <input 
                        type="radio"
                        id="tier1"
                        name="tiers"
                        value="tier1"
                        onChange={handleChange}
                        checked={formFields.tiers === "tier1"}
                    />
                    <label htmlFor="tier1">Tier 1</label>
                    </div>
                    <br />
                    <div className="flx">
                    <input 
                        type="radio"
                        id="tier2"
                        name="tiers"
                        value="tier2"
                        onChange={handleChange}
                        checked={formFields.tiers === "tier2"}
                    />
                    <label htmlFor="tier2">Tier 2</label>
                    </div>
                    <br />
                    <div className="flx">
                    <input 
                        type="radio"
                        id="tier3"
                        name="tiers"
                        value="tier3"
                        onChange={handleChange}
                        checked={formFields.tiers === "tier3"}
                    />
                    <label htmlFor="tier3">Tier 3</label>
                    <br />
                </div>
                </fieldset>
                <br />

                <label htmlFor="favColour">What is your favourite colour</label>
                <br />

                <select 
                    id="favColour"
                    name="favColour"
                    value={formFields.favColour}
                    onChange={handleChange}
                    >
                    <option value="">-- Choose --</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="indigo">Indigo</option>
                    <option value="orange">Orange</option>
                    <option value="violet">Violet</option>

                </select>
                <br />
                <br />

                <button>Submit</button>

        </form>
    )
}