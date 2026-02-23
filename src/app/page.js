"use client";

console.log(process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID);

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1>The Coach Playbook</h1>
      <h2 className="text-5xl font-bold mb-6">
        Plan your sessions in just minutes. 
      </h2>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        The Coach Playbook helps grassroots coaches create professional,
        organised training sessions with built-in injury prevention.
      </p>
    </main>
  );
}