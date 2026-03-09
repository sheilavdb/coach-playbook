import "./globals.css";
import { AuthProvider } from "../context/AuthContext";

export const metadata = {
  title: "Coach Playbook",
  description: "Plan better, safer sessions in minutes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-50 text-gray-900">
        <AuthProvider>
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}