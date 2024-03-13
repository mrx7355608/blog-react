import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";
import { HiMenuAlt3 } from "react-icons/hi";
import Searchbar from "./Searchbar";
import MobMenu from "./MobMenu";

export default function Navbar() {
    return (
        <div className="flex justify-between lg:justify-around items-center p-6 px-12 shadow bg-black w-full">
            <Link to="/">
                <div className="flex items-center ml-5">
                    <h1 className="inline text-3xl font-black text-pink-700">
                        Mr.X
                    </h1>
                    <span className="ml-3 px-3 py-2 font-medium rounded-lg bg-pink-700 text-black">
                        BLOG
                    </span>
                </div>
            </Link>
            <MobMenu />
            <div className="hidden lg:flex items-center gap-6 text-white mr-4">
                <Link to="" target="_blank">
                    <FaFacebook size={20} />
                </Link>
                <Link to="" target="_blank">
                    <FaInstagram size={20} />
                </Link>
                <Link to="" target="_blank">
                    <FaTwitter size={20} />
                </Link>
                <Link to="" target="_blank">
                    <FaLinkedin size={20} />
                </Link>
                <Searchbar />
            </div>

            <label
                htmlFor="my-drawer-4"
                className="lg:hidden drawer-button btn btn-outline text-white bg-zinc-900 border-none"
            >
                <HiMenuAlt3 size={24} color="inherit" />
            </label>
        </div>
    );
}
