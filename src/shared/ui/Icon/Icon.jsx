const Icon = (props) => {
  const { name, fill = "none", stroke = "currentColor" } = props;

  return (
    <svg width={25} height={25} fill={fill} stroke={stroke} aria-hidden="true">
      <use href={`#icon-${name}`} />
    </svg>
  );
};

export default Icon;
