import React from 'react'

export default function joinClubForm() {

    return (
        <div>
            <form>
                <input
                    type='text'
                    name='reply_to'
                    placeholder='Your email'
                    defaultValue="Email address"
                />
                <button type="submit">Subscribe</button>
            </form>
        </div>
    )
}
