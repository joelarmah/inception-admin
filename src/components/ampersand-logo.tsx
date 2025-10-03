import Image from "next/image";

export function AmpersandLogo() {
  return (
    <div className="relative w-[160px] h-[40px]">
      <Image
        src="/ampersand-logo.svg"
        alt="Ampersand"
        fill
        priority
        className="object-contain"
      />
    </div>
  );

  // <Image src="/ampersand-logo.svg" alt="Ampersand" fill width={160} height={40} className="h-10 w-auto" />
}
