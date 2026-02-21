export const metadata = {
  title: "Coach Playbook",
  description: "Plan better, safer sessions in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        {children}
      </body>
    </html>
  );
}