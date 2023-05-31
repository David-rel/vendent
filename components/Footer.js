import Link from "next/link";

const Footer = () => (
  <footer className="bg-gray-800 text-white p-4">
    <div className="container mx-auto text-center">
      <div className="text-center">
        <h4 className="text-xl font-bold pt-4 mb-10">Vendent</h4>
      </div>
      <div className="flex justify-around text-center items-center">
        <div className="text-center w-1/3">
          <h4 className="font-bold mb-2">Mission Statement</h4>
          <p className="font-sm">
            Our mission is to make online shopping more affordable by providing
            high-quality products at the most competitive prices with reliable
            consistency.{" "}
          </p>
        </div>
        <div className="text-center w-1/3">
          <h4 className="font-bold mb-2">Contact Us</h4>
          <p>Connor Wilson:</p>
          <p className="font-bold">
            <a href="mailto: cwilson@vendent.shop ">cwilson@vendent.shop</a>
          </p>
          <p>David Fales:</p>
          <p className="font-bold">
            <a href="mailto: davidrel@vendent.shop ">davidrel@vendent.shop</a>
          </p>
        </div>
        <div className="text-center w-1/3">
          <h4 className="font-bold mb-2">Quick Links</h4>
          <Link href="/hotDeals" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-md underline font-medium">
              Hot Deals
            </a>
          </Link>
          <br />
          <Link href="/forYou" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-md underline font-medium">
              For You
            </a>
          </Link>
          <br />
          <Link href="/newReleases" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-md underline font-medium">
              New Releases
            </a>
          </Link>
          <br />
          <Link href="/bestSellers" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-md underline font-medium">
              Best Sellers
            </a>
          </Link>
          <br />
          <Link href="/help" legacyBehavior>
            <a className="text-white px-3 py-2 rounded-md text-md underline font-medium">
              Help
            </a>
          </Link>
        </div>
      </div>
      <p className="text-center text-sm mt-4">
        &copy; {new Date().getFullYear()} Your Company Name. All Rights
        Reserved.
      </p>
    </div>
  </footer>
);

export default Footer;
