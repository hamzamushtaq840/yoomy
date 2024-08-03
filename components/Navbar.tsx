import Image from 'next/image';
import Link from 'next/link';
import { SignedIn, UserButton } from '@clerk/nextjs';

import MobileNav from './MobileNav';

const Navbar = () => {
  return (
    <nav className="flex-between fixed z-50 outline outline-[#ffffff26] w-full bg-dark-1 px-6 py-4 lg:px-10">
      <Link href="/" className="flex items-center gap-2">
        <p className="text-xl reveal-text font-extrabold tracking-widest text-white max-sm:hidden">
          YOOMY
        </p>
        <Image
          src="/icons/logo.svg"
          width={32}
          height={32}
          alt="yoomy logo"
          className="max-sm:size-10"
        />
      </Link>
      <div className="flex-between gap-5">
        <SignedIn>
          <UserButton afterSignOutUrl="/sign-in" />
        </SignedIn>

        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
