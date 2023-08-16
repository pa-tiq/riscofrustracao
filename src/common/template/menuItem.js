import { Link } from "react-router-dom";

const MenuItem = ({path, icon, label}) => {
  // return (
  //   <li>
  //     <a href={path}>
  //       <i className={`fa fa-${icon}`}></i> <span>{label}</span>
  //     </a>
  //   </li>
  // );  
  return (
    <li>
      <Link to={path}>
        <i className={`fa fa-${icon}`}></i> <span>{label}</span>
      </Link>
    </li>
  );
};

export default MenuItem;
