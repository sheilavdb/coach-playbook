"use client";

import { auth, db } from "@/lib/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState("");
    const [confirm, setConfirm] = useState("");
    const [clubName,setClubName] = useState("");
    const [teamAge, setTeamAge] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleRegister = async (e) => {
        e.preventDefault();
        setError(null);

        if(password !== confirm) {
            setError("Password does not match")
            return;
        }
        setLoading(true);

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await setDoc(doc(db, "coaches", user.uid), {
                name: name,
                email: email,
                clubName: clubName,
                teamAge: teamAge,
                subscription: "free",
                createdAt: new Date(),
            });
            router.push("/dashboard")
        } catch (err) {
            if(err.code === "auth/email-already-in-use") {
                setError("An account with this email already exists")
            } else if(err.code === "auth/invalid-password") {
                setError("Password must have at least 6 characters")
            } else {
                setError("Something went wrong. Please try again")
            }
        } finally {
            setLoading(false);
        }
    };

    return (
        <main>
            <div>
                <h1>Create Account</h1>

                {error && ( 
                    <p>{error}</p> 
                    )}

                <form onSubmit={handleRegister}>
                    <input
                        type="text"
                        placeholder="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    /><br />
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    /><br />
                    <input
                        type="text"
                        placeholder="Club Name"
                        value={clubName}
                        onChange={(e) => setClubName(e.target.value)}
                        required
                    /><br />
                    <select
                        placeholder="Age Group"
                        value={teamAge}
                        onChange={(e) => setTeamAge(e.target.value)}
                        required>
                            <option value="">Select age group</option>
                            <option value="U8">U8</option>
                            <option value="U10">U10</option>
                            <option value="U12">U12</option>
                            <option value="U14">U14</option>
                            <option value="U16">U16</option>
                            <option value="U18">U18</option>
                            <option value="Senior">Senior</option>
                    </select><br />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    /><br />
                    <input 
                        type="password" 
                        placeholder="Confirm Password" 
                        value={confirm} 
                        onChange={(e) => setConfirm(e.target.value)} 
                        required
                    /><br /><br />
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Creating Account.." : "Create Account"}
                    </button>
                </form>

                <p>
                    Already have an account?{" "}
                    <a href="/login">
                        Sign in here
                    </a>
                </p>
            </div>
        </main>
    );
}