import { NavLink } from "react-router-dom";

export const AdminSidebar = () => {
    const links = [
        {
            icon: "/home.png",
            title: "Home",
            url: "/admin/dashboard",
        },
        {
            icon: "/published.png",
            title: "Published blogs",
            url: "/admin/published",
        },
        {
            icon: "/draft.png",
            title: "Draft Blogs",
            url: "/admin/drafts",
        },
        {
            icon: "/create.png",
            title: "Create",
            url: "/admin/create-blog",
        },
    ];

    const activeClasses = "bg-gray-200 cursor-pointer w-full p-4 rounded-lg";
    const notActiveClass =
        "bg-transparent cursor-pointer w-full p-4 rounded-lg hover:bg-gray-200";

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
                        <img
                            src={link.icon}
                            className="object-cover inline"
                            width={25}
                            height={25}
                        />
                        <span className="text-lg ml-2 font-medium">
                            {link.title}
                        </span>
                    </NavLink>
                );
            })}
        </div>
    );
};
