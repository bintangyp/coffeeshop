import React from "react";

const Profile = () => {
  return (
    <div className="p-4">
      <div className="bg-myaccent w-full rounded-lg p-4">
        <div className="hero bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <img
              src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.jpg"
              className="max-w-sm rounded-lg shadow-2xl"
            />
            <div>
              <h1 className="text-5xl font-bold">Mari Ngopi </h1>
              <div className="w-1/4 grid grid-cols-2 my-4">
                <label htmlFor="">Alamat </label>
                <span>: Bukittinggi</span>
                <label htmlFor="">Alamat </label>
                <span>: Bukittinggi</span>
                <label htmlFor="">Alamat </label>
                <span>: Bukittinggi</span>
              </div>
              <p className="">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Consequuntur molestiae, commodi nesciunt
                ducimus minus sed eveniet, exercitationem numquam hic veritatis
                assumenda. Id nobis quasi assumenda. Asperiores velit unde animi
                quisquam.
              </p>
              <button className="btn btn-primary mt-4">Get Started</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
