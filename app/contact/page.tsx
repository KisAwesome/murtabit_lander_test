import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function ContactUs() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <Link href="/">
          <div className="hidden md:flex">
            <Image src="/logo_murta.png" alt="Murtabit Logo" width={32} height={32} />
            <span className="ml-2 text-xl font-bold">Murtabit</span>
          </div>
          </Link>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          </nav>
          {/* <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div> */}
        </div>
      </header>
      
      <main className="flex-1 flex items-center justify-center py-24">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-4xl font-bold">Get in Touch</h1>
          <p className="text-gray-500 dark:text-gray-400 max-w-xl mx-auto mt-4">
            Have questions or need assistance? Reach out to us via email.
          </p>
          
          <div className="flex justify-center mt-12">
            <Card className="w-96">
              <CardHeader>
                <CardTitle>Email Us</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 dark:text-gray-400">support@murtabit.com</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      
      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 text-center">
          <p className="text-gray-600 dark:text-gray-400">© 2025 Murtabit. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
