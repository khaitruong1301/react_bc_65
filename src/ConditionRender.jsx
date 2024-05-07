import React, { useState } from 'react';

function Welcome() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sử dụng câu lệnh if
  if (isLoggedIn) {
    return <h1>Welcome back! (using if)</h1>;
  }

  // Sử dụng toán tử ba ngôi trong JSX
  return (
    <div>
      {isLoggedIn ? (
        <h1>Welcome back! (using ternary operator)</h1>
      ) : (
        <h1>Please sign up. (using ternary operator)</h1>
      )}

      {/* Sử dụng toán tử && */}
      {isLoggedIn && <p>You are logged in. (using &&)</p>}
      {!isLoggedIn && <p>You are not logged in. Please sign up or log in. (using &&)</p>}

      {/* Button to toggle login state */}
      <button onClick={() => setIsLoggedIn(!isLoggedIn)}>
        {isLoggedIn ? 'Log Out' : 'Log In'}
      </button>
    </div>
  );
}

export default Welcome;

