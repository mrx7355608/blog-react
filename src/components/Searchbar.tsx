import { FaSearch } from "react-icons/fa";

export default function Searchbar() {
    return (
        <form className="w-full relative">
            <input
                type="text"
                className="input input-bordered w-full bg-transparent input-success"
            />
            <button
                type="submit"
                className="btn btn-md btn-ghost absolute top-0 right-0 text-gray-500"
            >
                <FaSearch size={14} color="#eee" />
            </button>
        </form>
    );
}
