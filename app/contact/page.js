import React from "react";
import Hero2 from "../components/hero2/Hero2";
import { IconWithText, Form, Map } from "../pageComponents/contactPage";
import { GrMapLocation } from "react-icons/gr";
import { MdMailOutline } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import Icon from "../components/icon/Icon";
import { FaFacebookF } from "react-icons/fa";
import { RiTwitterXLine } from "react-icons/ri";
import { FaLinkedinIn } from "react-icons/fa";

const ContactPage = () => {
  return (
    <div>
      <Hero2
        title="Contact Us"
        imageUrl="https://images.pexels.com/photos/6480198/pexels-photo-6480198.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
      />
      <div className="max-w-screen flex justify-center w-full h-auto mt-2 px-5 pt-20">
        <div className="grid grid-cols-2 lg:grid-cols-3 max-w-[450px] sm:max-w-[500px] md:max-w-[700px] lg:max-w-[900px] xl:max-w-[1200px]  2xl:max-w-[1400px]  gap-10 w-full">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-5">
            <h4 className="text-3xl">Get In Touch</h4>
            <p>
              Got something on your mind? Reach out to us! Drop a message using
              the form or hit us up via email or phone. We&apos;re here to help!
            </p>
            <div className="flex flex-col gap-5">
              <IconWithText
                icon={<MdLocalPhone />}
                subtitle="Give us a call"
                contactInfo="(123) 456-7892"
              />
              <IconWithText
                icon={<MdMailOutline />}
                subtitle="Send us an email"
                contactInfo="info@hotel.com"
              />
              <IconWithText
                icon={<GrMapLocation />}
                subtitle="Stop by our office"
                contactInfo="123 Aurora Boulevard, Solaris, California "
              />
              <div className="flex gap-3">
                <Icon icon={<FaFacebookF />} />
                <Icon icon={<RiTwitterXLine />} />
                <Icon icon={<FaLinkedinIn />} />
              </div>
            </div>
          </div>
          <div className="col-span-2 flex flex-col gap-5">
            <h4 className="text-3xl">Send A Message</h4>
            <Form />
          </div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
