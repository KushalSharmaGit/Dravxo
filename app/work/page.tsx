import { Button } from "@/components/ui/button"
import { ArrowRight, ExternalLink } from "lucide-react"
import Link from "next/link"

export default function WorkPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our portfolio of successful projects that have helped businesses transform their digital presence.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Project</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Our latest and most impactful work</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden">
              <img
                src="/link-1.png?height=600&width=800"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">Webify AI</h3>
              <p className="text-gray-600 mb-6">
              AI-powered platform that instantly generates professional, customizable websites from simple text prompts.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Web Container</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">MongoDB</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Gemini Api</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Projects</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Explore our portfolio of successful projects across various industries
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/link-1.png?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Webify AI</h3>
                <p className="text-gray-600 mb-4">
                AI-powered platform that instantly generates professional, customizable websites from simple text prompts.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Gemini API</span>
                </div>
              </div>
            </div>

            {/* Project 2 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">AI-Driven Interview Assistant</h3>
                <p className="text-gray-600 mb-4">
                An AI-driven interview platform that automates candidate screening, evaluates responses, and delivers instant insights to streamline hiring.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">GPT-4</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                </div>
                
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/portify.png?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-fit transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Portify</h3>
                <p className="text-gray-600 mb-4">Portify helps businesses launch stunning, AI-generated websites instantly with zero coding.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">MongoDB</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node JS</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

 
 


      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive results for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get a Free Proposal
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
