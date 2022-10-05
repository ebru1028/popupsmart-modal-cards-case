import React from 'react'

export default function joinClubForm() {

    const onSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        //setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    value="Email address"
                    onChange={handleChange}
                />

                <button type="submit">Subscribe</button>

            </form>
        </div>
    )
}
