import React from "react";

function Home() {
  return (
    <div className="page">
      <h1>Home Page</h1>
      <p>
        Welcome to the Home page. This component is lazy loaded when you
        navigate to this route.
      </p>
      <div className="content">
        <p>
          Route-based lazy loading improves performance by splitting code into
          chunks.
        </p>
        <p>Each chunk is loaded only when the user navigates to that route.</p>
      </div>
    </div>
  );
}

export default Home;
