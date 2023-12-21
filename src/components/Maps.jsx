import React from "react";

const Maps = () => {
  return (
    <div>
      <div className="container">
        <iframe className="w-9 sm:w-100rem xl:w-100rem shadow-2 block xl:block mx-auto border-round"
          src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d63700.012471082824!2d-74.87063628388536!3d3.7554925880675585!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses-419!2spe!4v1699751755419!5m2!1ses-419!2spe"
        ></iframe>
      </div>
    </div>
  );
};

export default Maps;
