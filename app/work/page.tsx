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
                src="/placeholder.svg?height=600&width=800"
                alt="Featured project"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-3">FinTech Dashboard</h3>
              <p className="text-gray-600 mb-6">
                A comprehensive financial analytics platform with real-time data visualization, AI-powered insights, and
                intuitive user interface.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">D3.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">GraphQL</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-sm">AWS</span>
                </div>
              </div>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2">Results:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 mt-2"></div>
                    <span className="text-gray-700">40% increase in user engagement</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 mt-2"></div>
                    <span className="text-gray-700">25% reduction in decision-making time</span>
                  </li>
                  <li className="flex items-start">
                    <div className="h-1.5 w-1.5 rounded-full bg-blue-600 mr-2 mt-2"></div>
                    <span className="text-gray-700">Seamless integration with existing systems</span>
                  </li>
                </ul>
              </div>
              <Button className="bg-blue-600 hover:bg-blue-700">
                View Case Study
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
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
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">E-commerce Mobile App</h3>
                <p className="text-gray-600 mb-4">
                  A feature-rich shopping application with personalized recommendations.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React Native</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Firebase</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Stripe</span>
                </div>
                <Link
                  href="/work/ecommerce-app"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
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
                <h3 className="text-xl font-semibold mb-2">AI Customer Service</h3>
                <p className="text-gray-600 mb-4">
                  An intelligent virtual assistant that handles customer inquiries 24/7.
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">GPT-4</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                </div>
                <Link
                  href="/work/ai-customer-service"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 3 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Healthcare Portal</h3>
                <p className="text-gray-600 mb-4">A secure patient management system with telemedicine capabilities.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PostgreSQL</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">WebRTC</span>
                </div>
                <Link
                  href="/work/healthcare-portal"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 4 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Real Estate Platform</h3>
                <p className="text-gray-600 mb-4">A comprehensive property listing and management system.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Vue.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Node.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">MongoDB</span>
                </div>
                <Link
                  href="/work/real-estate"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 5 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Educational Platform</h3>
                <p className="text-gray-600 mb-4">An interactive learning platform with personalized curriculum.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">React</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Django</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">PostgreSQL</span>
                </div>
                <Link
                  href="/work/educational-platform"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>

            {/* Project 6 */}
            <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=400&width=600"
                  alt="Project thumbnail"
                  className="w-full h-48 object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Corporate Website</h3>
                <p className="text-gray-600 mb-4">A modern, responsive website for a Fortune 500 company.</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Next.js</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Tailwind CSS</span>
                  <span className="text-xs bg-gray-100 px-2 py-1 rounded">Sanity CMS</span>
                </div>
                <Link
                  href="/work/corporate-website"
                  className="text-blue-600 font-medium flex items-center hover:text-blue-700"
                >
                  View Project <ArrowRight className="ml-1 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Load More Projects
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">What our clients say about working with us</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Sarah Johnson</h3>
                  <p className="text-gray-600">CEO, TechFin Solutions</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "Sheenedge transformed our digital presence with a stunning website and intuitive mobile app. Their team
                was professional, responsive, and delivered beyond our expectations."
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden mr-4">
                  <img
                    src="/placeholder.svg?height=100&width=100"
                    alt="Client"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Michael Chen</h3>
                  <p className="text-gray-600">CTO, HealthTech Innovations</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                "The AI solution developed by Sheenedge has revolutionized our customer service operations. Their team's
                expertise in AI and machine learning is unmatched. Highly recommended!"
              </p>
              <div className="flex text-yellow-400">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                </svg>
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
