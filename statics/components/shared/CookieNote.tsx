"use client";

import { useEffect, useState } from 'react';
import getSession from '@/lib/session/getSession';
import { saveSession } from '@/lib/session/saveSession'; // Ensure this import is correct

const CookieNote: React.FC = () => {
  const [showCookieNote, setShowCookieNote] = useState(true);

  useEffect(() => {
    async function checkCookie() {
      const session = await getSession();
      if (session?.isCookieAccepted) {
        setShowCookieNote(false);
      }
    }
    checkCookie();
  }, []);

  const handleAccept = async () => {
    setShowCookieNote(false);
    const newSession = { isCookieAccepted: true, isLoggedIn: false };
    await saveSession(newSession);
  };

  if (!showCookieNote) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 bg-[#5c525f] text-white p-4 rounded-lg flex justify-between items-center z-50">
      <p>We use cookies to improve your experience on our site. By using our site, you accept our use of cookies.</p>
      <button onClick={handleAccept} className="veridaq-gradient from-green-400 to-blue-500 text-white py-2 px-4 rounded-md">
        Okay
      </button>
    </div>
  );
};

export default CookieNote;
