import React, { ReactElement } from 'react';

type MenuItem = {
  title: string,
  subItems?: Array<string>,
};

type MenuConfig = Array<MenuItem>;

// const menuConfig = [
//   {
//     title: 'Home',
//   },
//   {
//     title: 'Services',
//     subItems: ['Cooking', 'Cleaning'],
//   },
//   {
//     title: 'Contact',
//     subItems: ['Phone', 'Mail'],
//   },
// ];

function Solution({ menuConfig }: { menuConfig: MenuConfig }): ReactElement {
  const [expanded, setExpanded] = React.useState('');

  const handleClick = (item: MenuItem) => () => {
    setExpanded(expanded === item.title ? '' : item.title);
  };

  return (
    <div className="menu-wrapper">
      {menuConfig.map((item) => {
        const key = item.title.toLowerCase();
        const open = expanded === item.title;
        return (
          <div key={item.title} data-test-id={`first-level-${key}`}>
            {item.title + ' '}
            {!!item.subItems?.length && (
              <React.Fragment>
                <span>
                  <button data-test-id={`button-${key}`} onClick={handleClick(item)}>
                    {open ? 'Hide' : 'Expand'}
                  </button>
                </span>
                {open && (
                  <ul data-test-id={`ul-${key}`}>
                    {item.subItems.map((subItem) => {
                      return (
                        <li key={subItem} data-test-id={`li-${key}-${subItem.toLowerCase()}`}>
                          {subItem}
                        </li>
                      );
                    })}
                  </ul>
                )}
              </React.Fragment>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Solution;
