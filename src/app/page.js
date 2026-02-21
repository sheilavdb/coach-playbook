export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center px-6 text-center">
      <h1>The Coach Playbook</h1>
      <h2 className="text-5xl font-bold mb-6">
        Plan better, safer sessions in minutes.
      </h2>

      <p className="text-lg text-gray-600 max-w-xl mb-8">
        The Coach Playbook helps grassroots coaches create professional,
        organised training sessions with built-in injury prevention.
      </p>

      <div className="flex gap-4">
        <button className="bg-black text-white px-6 py-3 rounded-lg hover:opacity-80 transition">
          Start Free Trial
        </button>

        <button className="border border-black px-6 py-3 rounded-lg hover:bg-black hover:text-white transition">
          Learn More
        </button>
      </div>

    </main>
  );
}