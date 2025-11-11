const Icon = (props) => {
  const {
    name,
    width = 25,
    height = 25,
    fill = "none",
    stroke = "currentColor",
  } = props;

  return (
    <svg
      width={width}
      height={height}
      fill={fill}
      stroke={stroke}
      aria-hidden="true"
    >
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
