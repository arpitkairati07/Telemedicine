import React from "react";
import { assets } from "../../assets/assets_admin/assets";

const AddDoctor = () => {
  return (
      <form className="m-5 w-full">
        <p className="mb-3 text-lg font-medium">Add Doctor</p>
        <div className="bg-white px-8 py-8 border rounded w-full max-w-4xl max-h-[80vh] overflow-y-scroll">
          <div className="flex items-center gap-4 mb-8 text-gray-500">
            <label htmlFor="doc-img">
              <img className="w-16 bg-gray-100 rounded-full cursor-pointer" src={assets.upload_area} alt="" />
            </label>
            <input type="file" id="doc-img" hidden />
            <p>
              Upload Doctor <br /> picture
            </p>
          </div>

          <div className="flex flex-col lg:flex-row items-start gap-10 text-gray-600">
            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex1 flex flex-col gap-1">
                <p>Doctor's name</p>
                <input className="border rounded px-3 py-2" type="text" id="" placeholder="Name" required />
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Doctor's Email</p>
                <input className="border rounded px-3 py-2" type="email" placeholder="Email" id="" required />
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Doctor Password</p>
                <input className="border rounded px-3 py-2" type="password" id="" placeholder="Password" required />
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Doctor's Experience</p>
                <select className="border rounded px-3 py-2" name="" id="">
                  <option value="0 Year">0 Year</option>
                  <option value="1 Year">1 Year</option>
                  <option value="2 Year">2 Year</option>
                  <option value="3 Year">3 Year</option>
                  <option value="4 Year">4 Year</option>
                  <option value="5 Year">5 Year</option>
                  <option value="6 Year">6 Year</option>
                  <option value="7 Year">7 Year</option>
                  <option value="8 Year">8 Year</option>
                  <option value="9 Year">9 Year</option>
                  <option value="10 Year">10 Year</option>
                </select>
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Fees</p>
                <input className="border rounded px-3 py-2" type="number" id="" placeholder="Fees" required />
              </div>
            </div>

            <div className="w-full lg:flex-1 flex flex-col gap-4">
              <div className="flex1 flex flex-col gap-1">
                <p>Speciality</p>
                <select className="border rounded px-3 py-2" name="" id="">
                  <option value="General-Physician">General-Physician</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Pediatricians">Pediatricians</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Gastroenterologist">Gastroenterologist</option>
                </select>
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Education</p>
                <input className="border rounded px-3 py-2" type="text" placeholder="Education" id="" required />
              </div>

              <div className="flex1 flex flex-col gap-1">
                <p>Address</p>
                <input className="border rounded px-3 py-2" type="text" placeholder="address line 1" required />
                <input className="border rounded px-3 py-2" type="text" placeholder="City Name" required />
              </div>
            </div>
          </div>

          <div>
            <p className="mt-4 mb-2">About Doctor</p>
            <textarea
            className="w-full px-4 pt-2 border rounded"
              id=""
              placeholder="Write about doctor"
              rows={5}
            ></textarea>
          </div>

          <button className="bg-[#5F6FFF] px-10 py-3 mt-4 text-white rounded-full" >Add Doctor</button>
        </div>
      </form>
  );
};

export default AddDoctor;
