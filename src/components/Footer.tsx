import Image from "next/image";
import Link from "next/link";

const navigation = {
  legal: [
    {name: 'Privacy Policy', href: '/privacy-policy'},
    {name: 'Terms & Conditions', href: '/terms-of-service'},
  ],
}

export default function Footer({
                                 locale = ''
                               }) {
  return (
    <footer className="bg-[#020d24]" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-4">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <a href={`/${locale}`}>
            <Image
              className="h-10"
              src="/appicon.svg"
              width={32}
              height={32}
              alt="Sorawebui.com"
            />
          </a>
          <div className="mt-2 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white"></h3>
                <ul role="list" className="mt-6 space-y-4">

                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white"></h3>
                <ul role="list" className="mt-6 space-y-4">
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white"></h3>
                <ul role="list" className="mt-6 space-y-4">
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white"></h3>
                <ul role="list" className="mt-6 space-y-4">
                  {/*{navigation.legal.map((item) => {*/}
                  {/*    let hrefTo = `/${locale}${item.href}`;*/}
                  {/*    if (locale == 'en') {*/}
                  {/*      hrefTo = `${item.href}`;*/}
                  {/*    }*/}
                  {/*    return (*/}
                  {/*      <li key={item.name}>*/}
                  {/*        <Link href={`${hrefTo}`}*/}
                  {/*              className="text-sm leading-6 text-gray-300 hover:text-[#2d6ae0]">*/}
                  {/*          {item.name}*/}
                  {/*        </Link>*/}
                  {/*      </li>*/}
                  {/*    )*/}
                  {/*  }*/}
                  {/*)}*/}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
