
import React from "react";

export interface ContactInfo {
  hod: string;
  designation: string;
  address: string;
  phone: string;
  email: string;
  mapEmbedUrl?: string;
  officeHours?: string;
}

export interface DeptContactProps {
  contact: ContactInfo;
}

const DeptContact: React.FC<DeptContactProps> = ({ contact }) => {
  if (!contact) return null;
  const { hod, designation, address, phone, email, mapEmbedUrl, officeHours } = contact;
  return (
    <section
      id="contact"
      className="py-10 px-4 md:px-8 lg:px-16 max-w-4xl mx-auto"
      aria-labelledby="contact-heading"
    >
      <h2
        id="contact-heading"
        className="text-2xl md:text-3xl font-bold text-[#7B1C1C] mb-6 tracking-tight"
      >
        Contact Information
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        <div className="bg-[#f8f6f6] rounded-xl shadow border-l-4 border-[#7B1C1C] p-6 flex flex-col gap-3">
          <div className="font-bold text-[#1a1a1a] text-base md:text-lg">{hod}</div>
          <div className="text-[#555] text-sm mb-2">{designation}</div>
          <div className="text-[#555] text-sm mb-2">{address}</div>
          <div className="flex items-center gap-2 text-[#555]">
            <a href={`tel:${phone}`} className="hover:text-[#C0392B] transition-colors duration-200">{phone}</a>
          </div>
          <div className="flex items-center gap-2 text-[#555]">
            <a href={`mailto:${email}`} className="hover:text-[#C0392B] transition-colors duration-200">{email}</a>
          </div>
          {officeHours && (
            <div className="text-xs text-[#888] mt-2">Office Hours: {officeHours}</div>
          )}
        </div>
        <div className="bg-[#f8f6f6] rounded-xl shadow border-l-4 border-[#7B1C1C] p-6 flex flex-col items-center justify-center">
          <h3 className="text-lg font-semibold text-[#7B1C1C] mb-2">Location</h3>
          {mapEmbedUrl ? (
            <iframe
              src={mapEmbedUrl}
              title="Department Location"
              className="w-full h-48 rounded border border-[#e8d0d0]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-48 bg-[#fef0f0] flex items-center justify-center text-[#7B1C1C] font-bold rounded">
              Map Unavailable
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DeptContact;
