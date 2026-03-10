"use client"

import { useAuth } from "@/context/AuthContext";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";



export default function Sidebar() {

        const { user, logout } = useAuth();
        const router = useRouter();
    
        const handleLogout = async(e) => {
            await logout();
            router.push("/login")
        }

    return(
        <div className="h-screen w-64 bg-primary text-text-light flex flex-col p-6">
            <Link href="/dashboard" className="mb-10">
                <Image src="/text-logo.png" alt="Coach Playbook" width={180} height={80} />
            </Link>
            <nav>
                <ul className="flex flex-col gap-2">
                    <li>
                        <Link href="/dashboard" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary-hover hover:text-white transition-colors">
                            Dashboard
                        </Link>
                    </li>
                    <li>
                        <Link href="/drills" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary-hover hover:text-white transition-colors">
                            Drills
                        </Link>
                    </li>
                    <li>
                        <Link href="/sessions" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary-hover hover:text-white transition-colors">
                            Sessions
                        </Link>
                    </li>
                                        <li>
                        <Link href="/aboutf11" className="flex items-center py-2 px-4 rounded-lg hover:bg-primary-hover hover:text-white transition-colors">
                            About Fifa 11+
                        </Link>
                    </li>
                </ul>
            </nav>
            <button onClick={handleLogout} className="mt-auto mx-auto py-2 px-4 bg-soft-red text-white rounded-lg hover:bg-soft-red-hover"><span>Log Out</span></button>
        </div>
    )
}