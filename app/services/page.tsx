import { Button } from "@/components/ui/button"
import { ArrowRight, Check } from "lucide-react"
import Link from "next/link"

export default function ServicesPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We offer premium digital solutions tailored to your business needs, from web and app development to
              AI-powered solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Web Development */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h2 className="text-3xl font-bold mb-6">Web Development</h2>
              <p className="text-gray-600 mb-6">
                We create beautiful, responsive, and high-performing websites that deliver exceptional user experiences
                and drive business results.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Custom Website Development</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">E-commerce Solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Progressive Web Apps (PWAs)</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Web Portals & Dashboards</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Performance Optimization</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="Web Development"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* App Development */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="App Development"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h2 className="text-3xl font-bold mb-6">App Development</h2>
              <p className="text-gray-600 mb-6">
                We build native and cross-platform mobile applications that deliver exceptional user experiences and
                drive engagement.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">iOS & Android Development</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Cross-Platform Solutions</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">UI/UX Design</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">App Maintenance & Updates</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">App Store Optimization</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* AI Agent Solutions */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="h-16 w-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-8 w-8 text-blue-600"
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
              <h2 className="text-3xl font-bold mb-6">AI Agent Solutions</h2>
              <p className="text-gray-600 mb-6">
                We develop intelligent AI-powered solutions that automate processes, enhance customer experiences, and
                drive business growth.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Custom AI Assistants</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Natural Language Processing</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Intelligent Automation</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">Predictive Analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="mr-2 h-5 w-5 text-blue-600 mt-0.5" />
                  <span className="text-gray-700">AI Integration Services</span>
                </li>
              </ul>
              <Button className="bg-blue-600 hover:bg-blue-700">
                Learn More
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-lg overflow-hidden">
              <img
                src="/placeholder.svg?height=600&width=800"
                alt="AI Solutions"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We follow a proven methodology to deliver exceptional results for our clients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Discovery</h3>
              <p className="text-gray-600">
                We start by understanding your business, goals, and target audience to define project requirements.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Strategy</h3>
              <p className="text-gray-600">
                We develop a comprehensive strategy and roadmap to achieve your business objectives.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Design & Development</h3>
              <p className="text-gray-600">
                Our team designs and develops your solution with a focus on quality and user experience.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center">
              <div className="h-16 w-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-3">Launch & Support</h3>
              <p className="text-gray-600">
                We launch your solution and provide ongoing support and optimization to ensure success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-gray-300 mb-8">
                Let's discuss your project and how we can help you achieve your business goals.
              </p>
              <Link href="/contact">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                  Get a Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            </div>
            <div className="bg-gray-800 p-8 rounded-lg">
              <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
              <div className="space-y-4">
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-3 mt-0.5 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 8L10.89 13.26C11.2187 13.4793 11.6049 13.5963 12 13.5963C12.3951 13.5963 12.7813 13.4793 13.11 13.26L21 8M5 19H19C19.5304 19 20.0391 18.7893 20.4142 18.4142C20.7893 18.0391 21 17.5304 21 17V7C21 6.46957 20.7893 5.96086 20.4142 5.58579C20.0391 5.21071 19.5304 5 19 5H5C4.46957 5 3.96086 5.21071 3.58579 5.58579C3.21071 5.96086 3 6.46957 3 7V17C3 17.5304 3.21071 18.0391 3.58579 18.4142C3.96086 18.7893 4.46957 19 5 19Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-300">hello@sheenedge.com</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-3 mt-0.5 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 5C3 3.89543 3.89543 3 5 3H8.27924C8.70967 3 9.09181 3.27543 9.22792 3.68377L10.7257 8.56434C10.8854 9.03986 10.6699 9.5649 10.2458 9.80248L7.69687 11.3291C8.7597 13.5376 10.4624 15.2403 12.6709 16.3031L14.1975 13.7542C14.4351 13.3301 14.9601 13.1146 15.4357 13.2743L20.3162 14.7721C20.7246 14.9082 21 15.2903 21 15.7208V19C21 20.1046 20.1046 21 19 21H18C9.71573 21 3 14.2843 3 6V5Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-300">+1 (234) 567-8901</span>
                </div>
                <div className="flex items-start">
                  <svg
                    className="h-5 w-5 mr-3 mt-0.5 text-blue-400"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M17.6569 16.6569C16.7202 17.5935 14.7616 19.5521 13.4138 20.8999C12.6327 21.681 11.3677 21.6814 10.5866 20.9003C9.26234 19.576 7.34159 17.6553 6.34315 16.6569C3.21895 13.5327 3.21895 8.46734 6.34315 5.34315C9.46734 2.21895 14.5327 2.21895 17.6569 5.34315C20.781 8.46734 20.781 13.5327 17.6569 16.6569Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M15 11C15 12.6569 13.6569 14 12 14C10.3431 14 9 12.6569 9 11C9 9.34315 10.3431 8 12 8C13.6569 8 15 9.34315 15 11Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span className="text-gray-300">123 Innovation Street, Tech City, TC 10101</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
