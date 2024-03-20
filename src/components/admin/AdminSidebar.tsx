import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
    const links = [
        {
            title: "Home",
            url: "/",
        },
        {
            title: "Published blogs",
            url: "/published",
        },
        {
            title: "Draft Blogs",
            url: "/drafts",
        },
        {
            title: "Create",
            url: "/create-blog",
        },
    ];

    const activeClasses = "bg-zinc-900 cursor-pointer w-full p-4 rounded-lg";
    const notActiveClass =
        "bg-transparent cursor-pointer w-full p-4 rounded-lg hover:bg-zinc-900";

    return (
        <div className="flex flex-col w-1/4 h-screen p-4 gap-2">
            {links.map((link) => {
                return (
                    <NavLink
                        className={(navData) => {
                            return navData.isActive
                                ? activeClasses
                                : notActiveClass;
                        }}
                        to={link.url}
                    >
                        <span className="text-lg ml-2 font-medium text-white">
                            {link.title}
                        </span>
                    </NavLink>
                );
            })}
        </div>
    );
};
