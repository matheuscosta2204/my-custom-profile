import React from 'react';

const heartBeating = (props) => {
    const width = props.width ? props.width : "100";
    const height = props.height ? props.height : "100";
    return (
        <svg width={width} height={height} xmlns="http://www.w3.org/2000/svg"> 
            <g>
                <title>Heart Beating</title>
                <path stroke="#000" id="svg_1" d="m183.314065,253.455497c-11.998268,-9.089737 -16.288127,-14.839741 -16.322894,-21.878787c-0.031705,-6.416953 5.263904,-12.610256 10.75187,-12.574541c2.740445,0.01787 8.618875,2.379661 10.700447,4.299203c1.048819,0.967176 1.54559,0.871803 3.880672,-0.745038c6.355109,-4.400349 12.560938,-4.492711 16.580105,-0.246743c6.423483,6.78595 5.254018,14.889613 -3.361817,23.2953c-4.580673,4.468952 -14.583858,12.397122 -15.641774,12.397122c-0.321909,0 -3.285881,-2.045937 -6.586609,-4.546519l0,0.000002z" stroke-width="0.5" fill="#FFAFCC"/>
            </g>
        </svg>
    );
}

export default heartBeating;