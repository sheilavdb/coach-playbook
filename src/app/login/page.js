"use client";

import { auth } from "@/lib/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/navigation";
import { useState } from "react";


export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            router.push("/dashboard");
        } catch (err) {
            setError("Invalid email or password. Try again.")
        } finally {
            setLoading(false);
        }
    };
    
    return (
        <main>
            <div>
                <h1>Sign In</h1>

                {error && ( 
                    <p>{error}</p> 
                    )}

                <form onSubmit={handleLogin}>
                    <input 
                        type="email" 
                        placeholder="Email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                        required 
                    />
                    <input 
                        type="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required
                    />
                    <button
                        type="submit"
                        disabled={loading}
                    >
                        {loading ? "Signing in.." : "Sign In"}
                    </button>
                </form>

                <p>
                    Don't have an account?{" "}
                    <a href="/register">
                        Register here
                    </a>
                </p>
            </div>
        </main>
    );
}