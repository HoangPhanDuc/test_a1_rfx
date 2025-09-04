import {
  FaCcApplePay,
  FaCcMastercard,
  FaCcPaypal,
  FaCcVisa,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import { IoLocationOutline, IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { PiPaperPlaneTiltFill } from "react-icons/pi";
import ThailandImg from "../assets/images/destination-1-1jpg@2x.png";
import logo from "../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="w-full h-[782.28px] flex flex-col items-center pt-28 relative">
        <div className="w-[1320px] h-[181.16px] flex justify-between border-b border-[#E1E4E6]">
          <div className="w-[536px] pt-6">
            <span className="font-manrope font-semibold text-[#113D48] text-[40px] capitalize">
              get updated the latest newsletter
            </span>
          </div>
          <div className="w-[660px] flex justify-between pt-[45.08px]">
            <input
              className="border border-[#6E7070] rounded-4xl w-[415px] h-[62px] px-6"
              type="text"
              placeholder="Enter your Email"
            />
            <button className="w-[227px] h-[64px] gap-1 bg-[#113D48] rounded-[48px] flex justify-center items-center">
              <span className="text-white">Subscribe Now</span>
              <PiPaperPlaneTiltFill
                color="#FFFFFF"
                className="w-[24px] h-[25px]"
              />
            </button>
          </div>
        </div>

        <div className="w-[1320px] py-12 grid grid-cols-4 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img src={logo} alt="logo" className="w-[90px] h-[56px] mr-2" />
              <h3 className="text-[#113D48] font-extrabold text-[32px]">
                Tours
              </h3>
            </div>
            <p className="text-[#666666] text-base mb-5">
              Rapidiously mycoardinate cross-platform intellectual capital
              model. Appropriately create interactive infrastructures.
            </p>
            <div className="flex space-x-4 text-[#113D48]">
              <span className="w-8 h-8 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                <FaFacebookF size={16} color="#1CA8CB" />
              </span>
              <span className="w-8 h-8 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                <FaTwitter size={16} color="#1CA8CB" />
              </span>
              <span className="w-8 h-8 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                <FaLinkedinIn size={16} color="#1CA8CB" />
              </span>
              <span className="w-8 h-8 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                <FaInstagram size={16} color="#1CA8CB" />
              </span>
              <span className="w-8 h-8 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                <FaWhatsapp size={16} color="#1CA8CB" />
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-[#113D48] font-manrope font-semibold text-2xl mb-6">
              Quick Links
            </h4>
            <ul className="space-y-4 text-[#888C97]">
              <li className="flex items-center">
                <IoIosArrowForward color="#888C97" />
                <span className="text-base">Home</span>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward color="#888C97" />
                <span className="text-base">About Us</span>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward color="#888C97" />
                <span className="text-base">Services</span>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward color="#888C97" />
                <span className="text-base">Tour Guide</span>
              </li>
              <li className="flex items-center">
                <IoIosArrowForward color="#888C97" />
                <span className="text-base">Contact Us</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#113D48] font-manrope font-semibold text-2xl mb-6">
              Get In Touch
            </h4>
            <ul className="w-[260px] h-[189.61px] space-y-4 text-[#6E7070] text-sm">
              <li className="flex items-center">
                <div className="w-10 h-10 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                  <MdOutlinePhoneInTalk size={18} color="#1CA8CB" />
                </div>
                <div className="ms-4 leading-relaxed">
                  <div>+01 234 567 890</div>
                  <div>+09 999 999 999</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="w-10 h-10 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                  <IoMailOutline size={18} color="#1CA8CB" />
                </div>
                <div className="ms-4 leading-relaxed">
                  <div className="text-base font-inter">mailinfo00@tours.com</div>
                  <div className="text-base font-inter">support24@tours.com</div>
                </div>
              </li>
              <li className="flex items-center">
                <div className="!w-10 h-10 bg-[#E9F6F9] rounded-full flex justify-center items-center">
                  <IoLocationOutline size={18} color="#1CA8CB" />
                </div>
                <div className="ms-4 w-[199.85px] leading-relaxed text-base font-inter">
                  789 Inner Lane, Holy park, California, USA
                </div>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[#113D48] font-manrope font-semibold text-2xl mb-6">
              Instagram Post
            </h4>
            <div className="grid grid-cols-3 gap-2">
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
              <img
                src={ThailandImg}
                alt="insta"
                className="w-24 h-24 object-cover rounded"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[68px] mt-auto flex justify-around items-center bg-[#5ab5c9]">
        <div className="text-sm text-white font-inter">
          Copyright 2025 <span>Tours</span> . All Rights Reserved.
        </div>
        <div className="flex items-center gap-2">
          <span className="text-base text-white font-inter">We Accept</span>
          <div className="w-[224px] h-8 flex justify-between items-center">
            <span>
              <FaCcMastercard className="w-12 h-8" />
            </span>
            <span>
              <FaCcVisa className="w-12 h-8" />
            </span>
            <span>
              <FaCcPaypal className="w-12 h-8" />
            </span>
            <span>
              <FaCcApplePay className="w-12 h-8" />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
