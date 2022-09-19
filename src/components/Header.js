import React from 'react';


function Header(props) {


    const {cartItem} = props;

    return (
        <header className="block row center">
            <div>
                <a href='/'><h2>RAHIL STORE</h2></a>
            </div>
            <div>
                <a href='/cart'>Cart{' '}<button className="badge">{cartItem.length}</button></a>
                <a href='/sign-in'>Sign In</a>

            </div>
        </header>
    );
}

export default Header; 