import React from 'react';
import Link from 'next/link';

const NavLink = ({ href, title }) => {

  const handleAnchorClick = (e) => {
    const hashIndex = href.indexOf('#');
    if (hashIndex !== -1 && href.slice(0, hashIndex) === window.location.pathname) {
      e.preventDefault(); 
      const hash = href.slice(hashIndex + 1);
      const element = document.getElementById(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <Link
      href={href}
      passHref
      onClick={handleAnchorClick}
      className='block py-2 pl-3 pr-4 text-[#ADB7BE] sm:text-xl rounded md:p-0 hover:text-white'
      aria-label={title}
      itemScope
      itemProp={title}>

      {title}

    </Link>
  );
};

export default NavLink;
