import React, {useState} from 'react'
import {UserCircleIcon} from "@heroicons/react/24/outline";
import {useRouter} from "next/navigation";

function AccountIcon() {
    const router = useRouter()
    const [isOpened, setIsOpened] = useState(false);

    const toggleMenu = () => {
        setIsOpened(!isOpened);
    };

    const handleLogout = () => {
        router.push("/");
    }

    return (
        <div className="relative h-6 w-6 select-none">
            <UserCircleIcon onClick={() => toggleMenu()} className="h-6 w-6 cursor-pointer  text-accent2"/>
            {isOpened && (
                <div className="absolute bottom-0 translate-y-[100%] right-0 bg-primary p-3 ">
                   <button onClick={() => handleLogout()} className="text-body text-primary font-bold w-22 cursor-pointer bg-accent ">LOG OUT</button>
                </div>
            )}
        </div>
    )
}

export default AccountIcon
