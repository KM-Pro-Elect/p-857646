import React from "react";
import { Header } from "@/components/layout/Header";
import { SearchBar } from "@/components/home/SearchBar";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { FAQSection } from "@/components/home/FAQSection";

const Index = () => {
  return (
    <div className="bg-[rgba(233,233,233,1)] shadow-[0px_4px_4px_rgba(0,0,0,0.25)] flex flex-col overflow-hidden items-stretch pt-[30px]">
      <div className="self-center flex w-full max-w-[1374px] items-stretch gap-[40px_100px] flex-wrap max-md:max-w-full">
        <Header />
      </div>

      <main className="bg-white flex w-full flex-col items-center mt-[29px] px-20 py-[52px] rounded-[40px_40px_0px_0px] max-md:max-w-full max-md:px-5">
        <section className="text-center">
          <h1 className="text-black text-3xl font-bold ml-5">
            Welcome to NEUPoliSeek!
          </h1>
          <p className="text-black text-[28px] font-semibold ml-[31px] mt-2 max-md:max-w-full">
            Find, Understand, and Navigate School Policies with Ease.
          </p>
        </section>

        <SearchBar />
        <CategoryGrid />
        <FAQSection />

        <footer className="mt-[68px] max-md:mt-10">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/e3c6b0ec50df45b58e99e24af78e19b0/1fc493e366e44b1b4ab1c4a3070d02f0bdbf31da0b81a8e83c4cc1d41e0bd2ac?placeholderIfAbsent=true"
            alt="Footer Logo"
            className="aspect-[1] object-contain w-[100px] max-w-full"
          />
        </footer>
      </main>
    </div>
  );
};

export default Index;
