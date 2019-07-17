import React from 'react';

const Contact = (props) => {
    setTimeout(() => {
        props.history.push('/about')
    },5000)
    return(
        <div className="container">
            <h4 className="center white-text">Contact</h4>
            <div className="right ">
                <ul>
                    <li>contact Number:-0123456789</li>
                    <li>email:-xyz@mail.com</li>
                </ul>
            </div>
            <div className="left ">
                <ul>
                    <li>HR : Khyati Goyal</li>
                    <li> consulting Manager :- Yoshi </li>
                    <li>Financer :- Radha Agarwal</li>
                    <li> PR Manager :- Love mehta</li>
                </ul>
            </div>
        </div>
    )
}
export default Contact;
