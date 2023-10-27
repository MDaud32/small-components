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
    "border-blue-500 text-white bg-blue-500": primary,
    "border-gray-900 text-white bg-gray-900": secondary,
    "border-green-500 text-white bg-green-500": success,
    "border-red-400 text-white bg-red-400": warning,
    "border-yellow-400 text-black bg-white": danger,
    "rounded-full": rounded,
    "bg-white ": outline,
    "text-blue-600": outline && primary,
    "text-gray-700": outline && secondary,
    "text-green-600": outline && success,
    "text-red-500": outline && warning,
    "text-yellow-500 bg-white": outline && danger,
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
