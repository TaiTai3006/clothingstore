import React from "react";
import Link from "next/link";
import "./_navigation.scss";

const Navigation = () => {
  const list = [
    { name: "Home", href: "/" },
    { name: "All Products", href: "/collections/all" },
  ];
  return (
    <div className="nav-container">
      {list.slice(0, -1).map((data, index) => (
        <>
          <Link key={index} href={data.href}>
            {data.name}
          </Link>
          <div className="space">/</div>
        </>
      ))}
      <div className="current-situation">
       
          {list[list.length - 1].name}

      </div>
    </div>
  );
};

export default Navigation;
