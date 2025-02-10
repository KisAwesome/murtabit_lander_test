"use client";

import { useState, useTransition } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { joinWaitlist } from "@/app/actions";
import Link from 'next/link'

export default function Waitlist() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    startTransition( async () => {
        await joinWaitlist({ name, email });
      setSubmitted(true);
    });
  };

  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-14 items-center">
                  <Link href="/">

          <div className="mr-4 hidden md:flex">
            <Image src="/logo_murta.png" alt="Murtabit Logo" width={32} height={32} />
            <span className="ml-2 text-xl font-bold">Murtabit</span>
          </div>
        </Link>
        </div>
      </header>

      <main className="flex-1 flex items-center justify-center py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6 text-center">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Join the Murtabit Waitlist
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400 mt-4">
            Be among the first to experience Murtabit. Sign up now to get early access and exclusive updates!
          </p>

          <Card className="max-w-md mx-auto mt-8 p-6">
            <CardHeader>
              <CardTitle>Get Early Access</CardTitle>
            </CardHeader>
            <CardContent>
              {submitted ? (
                <p className="text-green-500 font-semibold">Thank you! You&apos;ve been added to the waitlist.</p>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <Input
                    type="text"
                    placeholder="Your Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                  <Input
                    type="email"
                    placeholder="Your Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Joining..." : "Join the Waitlist"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6 text-center text-gray-600 dark:text-gray-400">
          © 2025 Murtabit. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
