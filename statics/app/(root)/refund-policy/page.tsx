import CookieNote from '@/components/shared/CookieNote';
import React from 'react';

export default function RefundPolicy(){
  return (
    <div className="mx-[50px] mt-[150px] pt-[10">
      <h2 className="text-2xl text-white mb-4 font-bold">Refund Policy</h2>
      
      <p className="text-white mb-4">
        At Veridaq, we are committed to providing a secure and efficient reference check platform. If for any reason you are not satisfied with our services, we offer a refund policy as outlined below:
      </p>

      <h4 className="text-lg text-white mb-2 font-bold">Eligibility</h4>
      <p className="text-white mb-4">
        a. Refunds are only applicable if a valid request with genuine information is left unattended to by the issuing organisation.
      </p>
      <p className="text-white mb-4">
        b. Refunds are limited to the issuing organisation's share of the amount paid.
      </p>

      <h4 className="text-lg text-white font-bold mb-2">Refund Process</h4>
      <p className="text-white mb-4">
        a. To request a refund, please contact our support team with your account details and a clear explanation of the reason for the refund request.
      </p>
      <p className="text-white mb-4">
        b. Our team will review your request and respond within a reasonable timeframe.
      </p>
      <p className="text-white mb-4">
        c. If approved, refunds will be processed and credited back to the original payment method.
      </p>

      <h4 className="text-lg text-white font-bold mb-2">Refund Amount</h4>
      <p className="text-white mb-4">
        a. The refund amount will be limited to the issuing organisation's share of the amount paid.
      </p>

      <h4 className="text-lg text-white font-bold mb-2">In Addition</h4>
      <p className="text-white mb-4">
        a. Refunds are not applicable if the issuing organisation has responded to the reference check request or if the request has been completed.
      </p>
      <p className="text-white mb-4">
        b. Refunds are not applicable if you violate any of our terms and conditions.
      </p>

      <p className="text-white">
        By using Veridaq's services, you agree to this refund policy and our terms of service. If you have any questions or concerns, please don't hesitate to contact our support team at <a href="mailto:admin@veridaq.com" className="underline text-blue-400">admin@veridaq.com</a>.
      </p>
      <CookieNote />
    </div>
  );
};

