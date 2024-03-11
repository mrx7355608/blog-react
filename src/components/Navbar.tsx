import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="flex justify-around items-center p-4 shadow bg-gray-800">
            <h1 className="text-2xl font-black text-white">Mr.X</h1>
            <div className="flex items-center gap-4 text-gray-200">
                <Link to="" target="_blank">
                    <FaFacebook size={17} />
                </Link>
                <Link to="" target="_blank">
                    <FaInstagram size={17} />
                </Link>
                <Link to="" target="_blank">
                    <FaTwitter size={17} />
                </Link>
                <Link to="" target="_blank">
                    <FaLinkedin size={17} />
                </Link>
            </div>
        </div>
    );
}
