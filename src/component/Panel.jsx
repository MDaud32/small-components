import classnames from "classnames";
import propTypes from "prop-types";

const Panel = ({ children, className, ...rest }) => {
  const finalClassNames = classnames(className);
  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
};

export default Panel;

Panel.propTypes = {
  children: propTypes.any,
  className: propTypes.any,
};
