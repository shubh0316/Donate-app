"use client";
import CTASection from "../CTASection";
import LoginPage from "./LoginPage";


export default function page() {
  return (
    <>
      <LoginPage />
      <div className="mt-60">
      <CTASection/>
      </div>
    </>
  );
}
