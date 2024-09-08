import React from 'react';
import { jwtDecode } from "jwt-decode"; // Default import for the jwt-decode library

const TestToken = () => {
    const token = localStorage.getItem("token");

    const isTokenExpired = () => {
        if (token) {
            const decodedToken = jwtDecode(token); // Call jwt_decode to decode the token
            console.log(decodedToken.exp); // Add some logic here to check token expiration;
            const currentTime=Date.now()/1000;
            const tokenTime=decodedToken.exp;
            console.log(tokenTime);
            if(tokenTime<currentTime){
                localStorage.removeItem("token");
                console.log("token removed");
            }
        }
    };

    return (
        <div>
            {/* You can trigger the function to check if the token is expired */}
            <button onClick={isTokenExpired}>Check Token</button>
        </div>
    );
};

export default TestToken;
