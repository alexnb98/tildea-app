import React from "react";

const Option = props => (
        <button onClick={props.click}
        // className="px-5 py-3 display-4 rounded shadow"
        className="display-4 border-0 rounded px-5 py-3 btn-light shadow"
        disabled={props.disabled}
        >
        {props.option}
    </button>
);

export default Option;
// import React from "react";

// const Option = props => (
//     <div
//         onClick={props.click}
//         className="px-5 py-3 display-4 rounded shadow"
//     >
//         {props.option}
//     </div>
// );

// export default Option;

