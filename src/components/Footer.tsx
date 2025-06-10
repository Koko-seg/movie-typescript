import { FilmIcon, Mail, Phone } from "lucide-react";

export const Footer = () => {
  return (
    <div className=" p-[20px] md:p-[80px] md:flex  md: justify-between max-w-screen bg-indigo-700 text-white pt-[25px]  ">
      <div className=" flex md:flex-col font-[400] text-[12px] p-2">
        <div className="flex gap-[5px]">
          <FilmIcon className="mb-[13px]" /> <p>MovieZ</p>
        </div>
        <p>© 2024 Movie Z. All Rights Reserved.</p>
      </div>
      <div className=" flex gap-[20px] ">
        <div className="font-[400] text-[12px]">
          <p>Contact Information</p>
          <div className="flex gap-[10px] py-[12px] items-center">
            <Mail className="" />
            <div>
              <p className="font-[500]">
                <b>Email:</b>
              </p>
              <p>support@movieZ.com</p>
            </div>
          </div>
          <div className="flex gap-[10px] py-[12px] items-center">
            <Phone className="" />
            <div>
              <p className="font-[500]">
                <b>Phone:</b>
              </p>
              <p>+976 (11) 123-4567</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col pl-[20px] text-[12px] font-[500] gap-[12px]">
          <p>Follow us</p>
          <div className="md:flex flex-row gap-[12px]">
            <p>Facebook</p>
            <p>Instagram</p>
            <p>Twitter</p>
            <p>Youtube</p>
          </div>
        </div>
      </div>
    </div>
  );
};
