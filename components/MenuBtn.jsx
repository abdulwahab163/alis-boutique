import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const MenuBtn = ({ name, categories }) => {
  const [check, setCheck] = useState("");
  const [show, setShow] = useState(false);

  return (
    <div className="menu-container">
      <div>
        <a className="px-1 px-md-3 d-flex" onMouseEnter={() => setShow(true)}>
          <span className="text-uppercase fw-500">{name}</span>
          {/* <span>
            <i className='mdi mdi-chevron-down' />
          </span> */}
        </a>
      </div>
      {/* menu-view */}
      {show && (
        <div className="menu-view position-absolute min-vh-100 w-100 top-100 start-0 flex-column bg-white bg-opacity-25 d-flex overflow-hidden">
          <div
            className="bg-white border-bottom border-dark p-3 overflow-auto scrollbar-small"
            style={{ maxHeight: "30rem" }}
            onMouseLeave={() => setShow(false)}
          >
            <div className="row gy-4">
              <div className="col-6 col-md">
                <div>
                  <ul className="nav row row-cols-1 row-cols-sm-2 row-cols-lg-4 row-cols-xl-6 gy-3">
                    {categories?.map((item, catIndex) => (
                      <li
                        key={catIndex}
                        onMouseEnter={() => setCheck(item.typeImage)}
                      >
                        <h6 className="d-inline-block mb-2 pb-1 text-uppercase fw-normal border-bottom border-primary">
                          {item.type}
                        </h6>
                        <div>
                          <ul className="nav flex-column gap-1">
                            {item?.subCategories?.map(
                              (subItem, subItemIndex) => (
                                <li
                                  key={subItemIndex}
                                  onClick={() => setShow(false)}
                                >
                                  <Link
                                    href={{
                                      pathname: "/products",
                                      query: {
                                        category: subItem.name,
                                        id: subItem.id,
                                      },
                                    }}
                                  >
                                    <a className="text-capitalize">
                                      {subItem.name}
                                    </a>
                                  </Link>
                                </li>
                              )
                            )}
                          </ul>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="col-6 col-md-4 col-xl-3">
                <div className="sticky-top">
                  <div className="height-size-2 position-relative">
                    {categories?.map((item, index) => (
                      <Image
                        key={index}
                        className={`d-block h-100 w-100 ${
                          check === item.typeImage ? "d-block" : "d-none"
                        } `}
                        src={`${item.typeImage}`}
                        alt=".."
                        layout="fill"
                        objectFit="contain"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* /menu-view */}
    </div>
  );
};

export default MenuBtn;
