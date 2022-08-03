import React, { useState, useRef, useEffect } from 'react';
import { useGlobalContext } from './context';

const Submenu = () => {
  const {
    isSubmenuOpen,
    location,
    page: { page, links },
  } = useGlobalContext();
  const container = useRef(null);
  useEffect(() => {
    const submenu = container.current;
    const { center, bottom } = location;
    submenu.style.left = `${center}px`;
    submenu.style.top = `${bottom}px`;
  }, [location]);
  return (
    <aside className={`submenu ${isSubmenuOpen && 'show'}`} ref={container}>
      <section>
        <h4>{page}</h4>
        <div className="submenu-center col-3">
          {links.map((link, index) => {
            const { label, icon, url } = link;
            return (
              <a href="/products" key={`desktop-link-${url}`}>
                {icon}
                {label}
              </a>
            );
          })}
        </div>
      </section>
    </aside>
  );
};

export default Submenu;
