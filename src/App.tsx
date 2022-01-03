import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { useRecoilValue } from "recoil";


function App() {

  return (
    <div>
      <input type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
