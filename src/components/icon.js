import React from "react";

const getViewBox = name => {
  switch (name) {
    case "time":
      return "0 0 24 24";
    case "arrow-medium":
      return "0 0 48 16";
    case "goal":
      return "0 0 48 48";
    case "build":
      return "0 0 48 48";
    case "grow":
      return "0 0 48 48";
    case "impact":
      return "0 0 48 48";
    case "survey":
      return "0 0 48 48";
    default:
      return "0 0 48 48";
  }
};

const getPath = (name, props) => {
  switch (name) {
    case "time":
      return (
        <path
          {...props}
          d="M12,1c6.1,0,11,4.9,11,11s-4.9,11-11,11S1,18.1,1,12S5.9,1,12,1z M12,6v6h6"
        />
      );
    case "arrow-medium":
      return (
        <path
          {...props}
          d="M1,7h40 M35.2,13L41,7l-5.8-6"
        />
      );
    case "goal":
      return (
        <path
          {...props}
          d="M15,36.6C7,34.7,1,27.6,1,19C1,9.1,9.1,1,19,1c8.6,0,15.7,6,17.6,14 M14,27.7c-3-1.7-5-5-5-8.7 c0-5.5,4.5-10,10-10c3.7,0,6.9,2,8.7,5 M19,19l3,22l6-6l9,9l7-7l-9-9l6-6L19,19z"
        />
      );
    case "build":
      return (
        <path
          {...props}
          d="M16,1H8v42h8V1z M2,43h20 M16,7l27,2v5H16 M8,14H1V9l7-2 M37,19v9 M42,28H32v5h10V28z M16,12L8,5 M16,26l-8-7 M16,40l-8-7 M16,12l-8,7 M16,26l-8,7"
        />
      );
    case "grow":
      return (
        <path
          {...props}
          d="M27,27h-8v18h8V27z M9,37H1v8h8V37z M45,17h-8v28h8V17z M5,17L15,7l8,8L37,1 M28,1h9v9"
        />
      );
    case "impact":
      return (
        <path
          {...props}
          d="M33.8,26c-0.5,2.8-1.9,5.3-4.1,7.2C27.6,35,24.8,36,22,36c-2.8,0-5.6-1-7.8-2.8c-2.2-1.8-3.6-4.4-4.1-7.2 M34,19c0-1.1-0.4-2.1-1.2-2.8C32.1,15.4,31.1,15,30,15c-1.1,0-2.1,0.4-2.8,1.2C26.4,16.9,26,17.9,26,19 M18,19 c0-1.1-0.4-2.1-1.2-2.8C16.1,15.4,15.1,15,14,15s-2.1,0.4-2.8,1.2C10.4,16.9,10,17.9,10,19 M22,43c11.6,0,21-9.4,21-21S33.6,1,22,1 S1,10.4,1,22S10.4,43,22,43z"
        />
      )
    case "survey":
      return (
        <path
          {...props}
          d="M18,6h23 M18,22h23 M18,38h23 M11,1H1v10h10V1z M11,33H1v10h10V33z M1,17l10,10 M11,17L1,27"
        />
      )
    case "contacts":
      return (
        <path
          {...props}
          d="M29,31H15c0-3.3,2.7-6,6-6h2C26.3,25,29,27.7,29,31z M22,22c2.2,0,4-1.8,4-4s-1.8-4-4-4s-4,1.8-4,4 S19.8,22,22,22z M41,9v6 M41,22v6 M1,45V1h30c3.3,0,6,2.7,6,6v32c0,3.3-2.7,6-6,6H1z M7,1v44"
        />
      )
    default:
      return <path />;
  }
};

const Icon = ({
  name = "",
  style = {},
  fill = "transparent",
  stroke = "#333",
  strokeWidth = "2",
  viewBox = "",
  width = "100%",
  className = "",
  height = "100%",
  strokeLinecap = "round",
  strokeLinejoin = "round",

}) => (
  <svg
    width={width}
    height={height}
    style={style}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox={viewBox || getViewBox(name)}
    xmlnsXlink="http://www.w3.org/1999/xlink"
  >
    {getPath(name, { width, height, fill, stroke, strokeWidth, strokeLinecap, strokeLinejoin })}
  </svg>
);

export default Icon;
