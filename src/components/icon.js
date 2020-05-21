import React from "react";

const getViewBox = name => {
  switch (name) {
    case "time":
      return "0 0 24 24";
    case "arrow-medium":
      return "0 0 48 16";
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
