import React from "react";

const Demo = () => {
  return (
    <div>
      <h1>Demo Mode</h1>
      <p>
        This demo shows a preview of PromoGPT using mock data.  
        The real dashboard will populate with your business analytics once registered.
      </p>

      <button
        className="btn-primary"
        onClick={() => window.location.assign("/dashboard")}
      >
        Enter Demo Dashboard
      </button>
    </div>
  );
};

export default Demo;
