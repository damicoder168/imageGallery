import React from 'react';

import { Link } from 'react-router-dom';

const ClosingSection = () => {
  return (
    <>
      <div className="w-full font-tide text-center text-lg max-sm:text-sm max-sm:px-[10px] my-5">
        &copy; 2023
        <Link target="_blank" to={""}>
          <span className="hover:underline text-[#ef5350]">
            {" "}
            Designed & Photographed by DaMi{" "}
          </span>
        </Link>
        | All Rights Reserved.
      </div>
    </>
  );
}

export default ClosingSection