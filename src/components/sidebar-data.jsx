import { IoPersonCircle } from "react-icons/io5";
import { RiArticleFill } from "react-icons/ri";
import { GrRadialSelected } from "react-icons/gr";
import { select } from "framer-motion/client";

export const sidebarData = [
    {
        name: "Profile",
        icon: <IoPersonCircle/>,
        path: "/"
    },
    {
        name: "Articles",
        icon: <RiArticleFill/>,
        path: "/articales"
    }
]