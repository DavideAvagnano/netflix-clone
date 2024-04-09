import React from "react";

interface NavbarItemProps {
  label: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ label }) => {
  return (
    <div className="text-white cursor-pointer hover:text-gray-300 transition-all">
      {label}
    </div>
  );
};

export default NavbarItem;
