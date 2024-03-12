import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Navbar() {
    return (
        <div className="flex justify-around items-center p-6 shadow bg-black">
            <div className="flex items-center">
                <h1 className="inline text-3xl font-black text-purple-500">
                    Mr.X
                </h1>
                <span className="ml-3 px-3 py-2 font-medium rounded-lg bg-purple-500 text-white">
                    BLOG
                </span>
            </div>
            <div className="flex items-center gap-4 text-white">
                <Link to="" target="_blank">
                    <FaFacebook size={19} />
                </Link>
                <Link to="" target="_blank">
                    <FaInstagram size={19} />
                </Link>
                <Link to="" target="_blank">
                    <FaTwitter size={19} />
                </Link>
                <Link to="" target="_blank">
                    <FaLinkedin size={19} />
                </Link>
            </div>
        </div>
    );
}
