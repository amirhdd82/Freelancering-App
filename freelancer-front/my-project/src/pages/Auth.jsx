import React from "react";

import AuthContainer from "../features/authentication/AuthContainer";

function Auth() {
  return (
    <div className="container xl:max-w-screen-xl">
      <div className="flex justify-center pt-10">
        <div className="w-full sm:max-w-sm">
          <AuthContainer />
        </div>
      </div>
    </div>
  );
}

export default Auth;
