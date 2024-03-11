import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Offline",
};

export default function Page() {
  return (
    <>
      <h1>You are offline!</h1>
      <h2>We will try to get you back online!</h2>
    </>
  );
}
