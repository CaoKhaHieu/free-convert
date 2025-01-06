import { AppConfig } from '@/utils/AppConfig';
import Image from 'next/image';
import Link from 'next/link';

export const BaseTemplate = (props: {
  leftNav: React.ReactNode;
  rightNav?: React.ReactNode;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full text-gray-700 antialiased">
      <header className="border-gray-300 bg-white">
        <div className="container mx-auto">
          <div className="py-4">
            <Link
              href="/"
            >
              <Image
                src="/assets/images/logo.svg"
                alt="FreeConvert"
                width={150}
                height={50}
              />
            </Link>
            <h1 className="text-2xl font-bold text-gray-900" hidden>
              {AppConfig.name}
            </h1>
          </div>
        </div>
      </header>

      <main>{props.children}</main>
    </div>
  );
};
