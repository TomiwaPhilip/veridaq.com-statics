import React from 'react';

const ContactInfo: React.FC = () => {
  return (
    <div className="mx-[50px] mt-[150px] pt-[10]">
      <h1 className="text-3xl font-bold mb-6">Contact Information</h1>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Phone Number</h2>
        <p className="text-lg">+234 810 714 9957</p>
      </div>

      <div className="mb-4">
        <h2 className="text-2xl font-semibold mb-2">Email Address</h2>
        <p className="text-lg">
          <a href="mailto:admin@veridaq.com" className="underline text-blue-400">admin@veridaq.com</a>
        </p>
      </div>

      <div>
        <h2 className="text-2xl font-semibold mb-2">Business Address</h2>
        <p className="text-lg">
            Adsoft Online Limited <br />
            7A, Milverton Road, Ikoyi, Lagos Nigeria
        </p>
      </div>
    </div>
  );
};

export default ContactInfo;
