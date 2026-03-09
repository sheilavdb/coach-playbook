"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
import Sidebar from "@/components/Sidebar";
import StatCard from "@/components/StatCards";
import { useAuth } from "@/context/AuthContext";
import { db } from "@/lib/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";

export default function Dashboard() {

    const [coachName, setCoachName] = useState("");
    const { user } = useAuth();

    useEffect(() => {
        if(!user) return;

        const fetchCoach = async () => {
            const docRef = doc(db, "coaches", user.uid);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()){
                setCoachName(docSnap.data().name);
            }
        };
        fetchCoach();
    }, [user]);

  return (
    <ProtectedRoute>
        <div className="flex min-h-screen bg-background">
            <Sidebar />
            <main className="flex-1 p-8">
                <h1 className="text-2xl font-bold text-text-dark mb-8">Hi {coachName}, welcome to your dashboard!</h1>
                <div className="grid grid-cols-3 gap-6">
                    <StatCard title="Sessions Created" value={0} />
                    <StatCard title="Drills available" value={0} />
                    <StatCard title="Fifa 11+ sessions" value={0} />
                </div>

            </main>
        </div>
    </ProtectedRoute>
  );
}