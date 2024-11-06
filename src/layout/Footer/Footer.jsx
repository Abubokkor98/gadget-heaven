import Heading from "../../components/Heading/Heading";


const Footer = () => {
  return (
    <footer className="bg-gray-100 py-8 px-4">
      <div className="text-center mb-6">
      <Heading
        title={"Gadget Heaven"}
        p={"Leading the way in cutting-edge technology and innovation."}
      />
      </div>
      
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-lg font-semibold mb-4">Services</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Product Support</li>
            <li>Order Tracking</li>
            <li>Shipping & Delivery</li>
            <li>Returns</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>About Us</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Legal</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Terms of Service</li>
            <li>Privacy Policy</li>
            <li>Cookie Policy</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-300 mt-8 pt-4 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Gadget Heaven. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
