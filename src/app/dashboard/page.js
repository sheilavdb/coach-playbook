"use client";

import ProtectedRoute from "@/components/ProtectedRoute";
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
        <main>
            <h1>Hi {coachName}, welcome to your dashboard!</h1>
        </main>
    </ProtectedRoute>
  );
}