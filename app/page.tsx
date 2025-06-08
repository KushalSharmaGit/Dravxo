"use client"
import Link from "next/link"
import { ArrowRight, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroAnimation from "@/components/hero-animation"
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter();
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-4 py-24 md:py-32 lg:py-40">
        <div className="container max-w-5xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row items-center gap-8 md:gap-12">
            <div className="w-full md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900">
                We Build Tomorrow's <span className="text-blue-600">Web, Apps & AI Agents</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-lg">
                Premium digital solutions crafted with precision, innovation, and a deep understanding of your business
                needs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/contact')}>
                  Let's Work Together
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" onClick={() => router.push('/work')}>
                  View Our Work
                </Button>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <HeroAnimation />
            </div>
          </div>
        </div>
        <div className="mt-24 flex justify-center">
          <Link
            href="#services"
            className="flex flex-col items-center text-gray-500 hover:text-blue-600 transition-colors"
          >
            <span className="text-sm mb-2">Discover Our Services</span>
            <ChevronDown className="animate-bounce" />
          </Link>
        </div>
      </section>

      {/* Services Preview */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Premium Services</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We specialize in creating digital experiences that elevate brands and drive business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16 18L22 12L16 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M8 6L2 12L8 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Web Development</h3>
              <p className="text-gray-600 mb-6">
                Responsive, fast, and beautiful websites that convert visitors into customers.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Responsive Design</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Performance Optimization</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">SEO Best Practices</span>
                </li>
              </ul>
              <Link href="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* App Development */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 18H12.01M8 21H16C17.1046 21 18 20.1046 18 19V5C18 3.89543 17.1046 3 16 3H8C6.89543 3 6 3.89543 6 5V19C6 20.1046 6.89543 21 8 21Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">App Development</h3>
              <p className="text-gray-600 mb-6">
                Native and cross-platform mobile applications that deliver exceptional user experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">iOS & Android</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Intuitive UX/UI</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Seamless Integration</span>
                </li>
              </ul>
              <Link href="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>

            {/* AI Agent Solutions */}
            <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 16V12M12 8H12.01M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">AI Agent Solutions</h3>
              <p className="text-gray-600 mb-6">
                Intelligent AI-powered solutions that automate processes and enhance customer experiences.
              </p>
              <ul className="space-y-2 mb-6">
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">GPT Integration</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Custom AI Agents</span>
                </li>
                <li className="flex items-center">
                  <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2"></div>
                  <span className="text-gray-700">Workflow Automation</span>
                </li>
              </ul>
              <Link href="/services" className="text-blue-600 font-medium flex items-center hover:text-blue-700">
                Learn more <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our recent work and see how we've helped businesses transform their digital presence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project 1 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/link-1.png"
                  alt="Project thumbnail"
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Webify AI</h3>
              <p className="text-gray-600 mb-3">
              AI-powered platform that instantly generates professional, customizable websites from simple text prompts.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Web Containers</span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group">
              <div className="relative overflow-hidden rounded-lg mb-4">
                <img
                  src="/60.jpg?height=600&width=800"
                  alt="Project thumbnail"
                  className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end">
                  <div className="p-6">
                    <Button variant="secondary" size="sm">
                      View Project
                    </Button>
                  </div>
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Driven Interview Assistant</h3>
              <p className="text-gray-600 mb-3">
              An AI-driven interview platform that automates candidate screening, evaluates responses, and delivers instant insights to streamline hiring.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">React js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node js</span>
                <span className="text-xs bg-gray-100 px-2 py-1 rounded">MongoDB</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg" onClick={() => router.push('/work')}>
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Digital Presence?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive results for your business.
          </p>
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700" onClick={() => router.push('/contact')}>
            Get a Free Proposal
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </section>
    </main>
  )
}
