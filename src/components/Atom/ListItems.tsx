import React from 'react';
import './listItem.css';

interface MenuItem {
  title: string;
  submenu?: MenuItem[];
}

interface MenuItemsProps {
  menuItemsData: MenuItem[];
}

const singleTickSvgLogo = (
  <svg
    height="15"
    width="15"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M5 7.5l2 2 4-4"
      stroke="#0c9587"
      strokeWidth="0.8"
      fill="none"
    />
  </svg>
);

const doubleTickLogo = (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <polyline points="1,6 4,9 9,1" stroke="teal" fill="none" strokeWidth="2"/>
    <polyline points="6,6 10,10 15,2" stroke="teal" fill="none" strokeWidth="2"/>
  </svg>
);

const rightArrow = (
  <svg 
    width="15" 
    height="15" 
    viewBox="0 0 20 20" 
    xmlns="http://www.w3.org/2000/svg"
  >
    <line x1="2" y1="10" x2="18" y2="10" stroke="#0db1a0" strokeWidth="1" />
    <line x1="12" y1="4" x2="18" y2="10" stroke="#0db1a0" strokeWidth="1" />
    <line x1="12" y1="16" x2="18" y2="10" stroke="#0db1a0" strokeWidth="1" />
  </svg>
);

const MenuItems: React.FC<MenuItemsProps> = ({ menuItemsData }) => {
  const renderMenuItem = (item: MenuItem, index: number, level = 0): JSX.Element => (
    <li key={item.title} className='menu-item' style={{ paddingLeft: `${level * 15}px` }}>
      <div className='menu-item-content'>
        {level === 0 ? (
          <span>{index + 1}. </span>
        ) : (
          item.submenu ? singleTickSvgLogo : level === 1 ? doubleTickLogo : rightArrow
        )}
        <span className='menu-item-title'>{item.title}</span>
      </div>
      {item.submenu && (
        <ul>
          {item.submenu.map((subItem, subIndex) => renderMenuItem(subItem, subIndex, level + 1))}
        </ul>
      )}
    </li>
  );

  return (
    <div className='menu-container'>
      <ol className="column-list">
        {menuItemsData.map((item, index) => renderMenuItem(item, index))}
      </ol>
    </div>
  );
};

export default MenuItems;
