import propTypes from "prop-types";
import classnames from "classnames";

const Button = ({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) => {
  const classes = classnames(rest.className, "px-3 py-1.5 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-green-500 bg-green-500 text-white": success,
    "border-red-400 bg-red-400 text-white": warning,
    "border-yellow-400 bg-yellow-400 text-black": danger,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-red-400": outline && warning,
    "text-yellow-400": outline && danger,
  });
  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
};

export default Button;

Button.propTypes = {
  children: propTypes.any,
  primary: propTypes.bool,
  secondary: propTypes.any,
  success: propTypes.any,
  warning: propTypes.any,
  danger: propTypes.any,
  outline: propTypes.any,
  rounded: propTypes.any,
  checkValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);
    if (count > 1) {
      new Error("dont repeat");
    }
  },
};
