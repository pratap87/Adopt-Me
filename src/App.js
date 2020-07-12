import React from 'react';

import SearchParams from "./SearchParams";
import { render } from 'react-dom';

const App =() => {
return(
    <div>
    <h1 id="something imp">Adopt Me!</h1>
   <SearchParams />
    </div>
);
};
render(
    <App />,
    document.getElementById("root")
);