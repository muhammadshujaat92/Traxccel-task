import Hero from "@/components/Hero";
import MaxWidth from "@/components/MaxWidth";
import Section1 from "@/components/Section1";
import Section2 from "@/components/Section2";
import Section3 from "@/components/Section3";
import Section4 from "@/components/Section4";
import Section5 from "@/components/Section5";
import Section6 from "@/components/Section6";

export default function Home() {
  return (
    <>
      <Hero />
      <MaxWidth>
        <Section1 />
      </MaxWidth>
      <MaxWidth>
        <Section2 />
      </MaxWidth>
      <MaxWidth>
        <Section3 />
      </MaxWidth>
      <MaxWidth>
        <Section4 />
      </MaxWidth>
      <MaxWidth>
        <Section5 />
      </MaxWidth>
      <MaxWidth>
        <Section6 />
      </MaxWidth>
    </>
  );
}
