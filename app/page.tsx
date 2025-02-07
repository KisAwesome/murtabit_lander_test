import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  CreditCard,
  BarChart3,
  BookOpen,
  Package,
  Users,
  Building2,
  Smartphone,
  PieChart,
  Megaphone,
} from "lucide-react"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 hidden md:flex">
            <Image src="/logo_murta.png" alt="Murtabit Logo" width={32} height={32} />
            <span className="ml-2 text-xl font-bold">Murtabit</span>
          </div>
          <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
            <a href="#features" className="text-sm font-medium transition-colors hover:text-primary">
              Features
            </a>
            <a href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
              Pricing
            </a>
          </nav>
          <div className="ml-auto flex items-center space-x-4">
            <Button variant="outline">Log in</Button>
            <Button>Sign up</Button>
          </div>
        </div>
      </header>

      <main className="flex-1">
     <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 xl:py-48">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-6 text-center">
        <div className="space-y-4">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
            Transform Your Business with Murtabit
          </h1>
          <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
            The all-in-one POS solution for modern businesses. Accept payments, manage inventory, and grow your
            customer base – all from your iPhone.
          </p>
        </div>
        <div className="flex space-x-4">
          <Button size="lg">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </div>
      </div>
    </div>
  </section>

        <section id="features" className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800 flex items-center justify-center">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<CreditCard className="h-6 w-6" />}
                title="Apple Tap to Pay"
                description="Accept card payments directly on your iPhone - no additional hardware required."
              />
              <FeatureCard
                icon={<BarChart3 className="h-6 w-6" />}
                title="Financial Forecasting"
                description="Get insights into your business's financial future with our advanced forecasting tools."
              />
              <FeatureCard
                icon={<BookOpen className="h-6 w-6" />}
                title="QuickBooks Integration"
                description="Seamlessly integrate with QuickBooks for effortless accounting and bookkeeping."
              />
              <FeatureCard
                icon={<Package className="h-6 w-6" />}
                title="Product Portfolio"
                description="Manage your entire product catalog with ease, including variants and pricing."
              />
              <FeatureCard
                icon={<Users className="h-6 w-6" />}
                title="Employee Management"
                description="Track employee performance, manage schedules, and handle payroll all in one place."
              />
              <FeatureCard
                icon={<Building2 className="h-6 w-6" />}
                title="Multi-Branch Support"
                description="Manage multiple locations with separate employee rosters and inventory tracking."
              />
              <FeatureCard
                icon={<Smartphone className="h-6 w-6" />}
                title="Mobile-First"
                description="Run your entire business from your smartphone - perfect for on-the-go entrepreneurs."
              />
              <FeatureCard
                icon={<PieChart className="h-6 w-6" />}
                title="Customer Insights"
                description="Gain valuable insights into your customer base with detailed analytics and reporting."
              />
              <FeatureCard
                icon={<Megaphone className="h-6 w-6" />}
                title="In-App Advertising"
                description="Reach your customers directly with targeted SMS and email campaigns."
              />
            </div>
          </div>
        </section>

        <section id="pricing" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-12">
              Pricing Plans
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:ml-20">
              <PricingCard
                title="Starter"
                price="AED0"
                description="Perfect for new and small businesses"
                features={["Apple Tap to Pay", "Basic inventory management", "Up to 2 employees", "Customer database",   "Issue exchanges",]}
                subtext="No monthly fees"
                processingRates={["2.6% + AED0.5 (in person)",]}
                buttonText= "Get started"
              />
              <PricingCard
                title="Growth"
                price="AED100"
                description="Ideal for growing businesses"
                features={[
                  "All Starter features",
                  "Advanced inventory management",
                  "Up to 10 employees",
                  "Financial forecasting",
                  "QuickBooks integration",
                ]}
            subtext="Per month, per location"
                processingRates={["2.4% + AED0.5 (in person)",]}
                buttonText= "Get started"
              />
              <PricingCard
                title="Enterprise"
                price="Custom pricing"
                description="For established multi-location businesses"
                features={[
                  "All Growth features",
                  "Unlimited employees",
                  "Multi-branch support",
                  "Advanced analytics",
                  "Priority support",
                  "Custom integrations",
                ]}

                subtext="Must meet eligibility requirements"
                processingRates={["Custom processing rates available",]}
                buttonText= "Contact us"
              />
            </div>
          </div>
        </section>

       <section className="w-full min-h-screen flex items-center justify-center py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
  <div className="container px-4 md:px-6">
    <div className="flex flex-col items-center justify-center space-y-6 text-center">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
          Join thousands of businesses already using Murtabit to streamline their operations and boost growth.
        </p>
      </div>
      <div className="flex space-x-4">
        <Button size="lg">Get Started Now</Button>
        <Button variant="outline" size="lg">Contact Sales</Button>
      </div>
    </div>
  </div>
</section>

      </main>

      <footer className="w-full py-6 bg-gray-100 dark:bg-gray-800">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
              <Image src="/logo_murta.png" alt="Murtabit Logo" width={32} height={32} />
              <p className="text-center text-sm leading-loose text-gray-600 dark:text-gray-400 md:text-left">
                © 2025 Murtabit. All rights reserved.
              </p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Terms
              </a>
              <a href="#" className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50">
                Privacy
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

interface FeatureCardProps {//+
  icon: React.ReactNode;//+
  title: string;//+
  description: string;//+
}//+
//+
function FeatureCard({ icon, title, description }: FeatureCardProps) {//+
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center gap-2">
          {icon}
          <CardTitle>{title}</CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  subtext: string;
  buttonText: string;
  processingRates: string[];
}

function PricingCard({ title, price, description, features, subtext, buttonText, processingRates }: PricingCardProps) {
  return (
    <Card className="flex flex-col h-full">
      <div className="flex-grow">
        <CardHeader>
          <CardTitle className="text-xl font-bold">{title}</CardTitle>
          <p className="text-gray-500">{description}</p>
        </CardHeader>
        <CardContent>
          <p className="text-3xl font-bold">{price}</p>
          <p className="text-gray-500 mb-4">{subtext}</p>
          <p className="font-semibold">Standout features:</p>
          <ul className="mb-4 space-y-2 text-sm text-gray-700">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-center gap-2">✓ {feature}</li>
            ))}
          </ul>
        </CardContent>
      </div>
      <div>
        <CardContent>
          <p className="font-semibold">Processing rates per transaction:</p>
          <ul className="mb-4 space-y-1 text-sm text-gray-700 min-h-[100px]">
            {processingRates.map((rate, idx) => (
              <li key={idx}>- {rate}</li>
            ))}
          </ul>
        </CardContent>
        <CardContent className="mt-auto">
          <Button className="w-full mt-auto border-gray-200 bg-blue-500 hover:bg-blue-400">{buttonText}</Button>
        </CardContent>
      </div>
    </Card>
  )
}

