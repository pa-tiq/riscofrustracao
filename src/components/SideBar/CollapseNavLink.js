import { useEffect, useState } from 'react';
import useComponentVisible from '../../../util/useComponentVisible';

const CollapseNavLink = ({ outerName, innerName, icon, children }) => {

  const { ref, isComponentVisible, setIsComponentVisible } =
    useComponentVisible(true);

  const [show, setShow] = useState(false);

  const handleClick = () => {
    const newValue = !show;
    if (newValue) {
      setIsComponentVisible(true);
    }
    setShow(newValue);
  };

  useEffect(() => {
    if (!isComponentVisible) {
      setShow(false);
    }
  }, [isComponentVisible]);

  return (
    <li ref={ref} className='nav-item' onClick={handleClick}>
      <a
        className={show ? 'nav-link' : 'nav-link collapsed'}
        href='#'
        data-toggle='collapse'
        data-target='#collapseTwo'
        aria-controls='collapseTwo'
        aria-expanded={show}
      >
        <i className={icon ? `fas fa-fw fa-${icon}` : `fas fa-fw fa-cog`}></i>
        <span>{outerName}</span>
      </a>
      <div
        id='collapseTwo'
        className={show ? 'collapse show' : 'collapse'}
        aria-labelledby='headingTwo'
        data-parent='#accordionSidebar'
      >
        <div className='bg-white py-2 collapse-inner rounded'>
          <h6 className='collapse-header'>{innerName}</h6>
          {children}
        </div>
      </div>
    </li>
  );
};

export default CollapseNavLink;
