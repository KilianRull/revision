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
    default:
      return "0 0 24 24";
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
