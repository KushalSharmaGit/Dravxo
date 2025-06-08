import { Button } from "@/components/ui/button"
import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <main className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Dravxo</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're a team of passionate digital creators building tomorrow's web experiences, mobile applications, and
              AI solutions.
            </p>
          </div>

          <div className="aspect-video rounded-lg overflow-hidden">
            <img
              src="/6.png?height=720&width=1280"
              alt="Dravxo team"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
              Dravxo was founded with a clear mission: to craft digital experiences that make a real impact. What began as a small team of three passionate developers has quickly grown into a full-service digital agency with a growing global presence.
              </p>
              <p className="text-gray-600 mb-4">
                We believe that exceptional digital products are born at the intersection of beautiful design,
                cutting-edge technology, and strategic thinking. This philosophy guides everything we do.
              </p>
              <p className="text-gray-600">
                Today, we're proud to have helped dozens of businesses transform their digital presence and achieve
                remarkable growth through our web, mobile, and AI solutions.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg overflow-hidden">
                <img
                  src="bill.png/?height=400&width=400"
                  alt="Office space"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/2.png?height=400&width=400"
                  alt="Team collaboration"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/3.png?height=400&width=400"
                  alt="Design process"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="rounded-lg overflow-hidden">
                <img
                  src="/5.png?height=400&width=400"
                  alt="Team meeting"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              These core principles guide our work and define our culture.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Excellence</h3>
              <p className="text-gray-600">
                We're committed to delivering work of the highest quality. We pay attention to every detail and never
                settle for "good enough."
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
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
              <h3 className="text-xl font-semibold mb-3">Innovation</h3>
              <p className="text-gray-600">
                We embrace new technologies and approaches. We're constantly learning and evolving to stay at the
                forefront of digital innovation.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-sm">
              <div className="h-12 w-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <svg
                  className="h-6 w-6 text-blue-600"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 8L22 12L18 16M6 16L2 12L6 8M12 2L14.5 20.5"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
              <p className="text-gray-600">
                We believe in the power of teamwork. We work closely with our clients and each other to achieve the best
                possible outcomes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20">
        <div className="container max-w-5xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We're a diverse group of designers, developers, and strategists passionate about creating exceptional
              digital experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 align-middle sm:grid-cols-2 md:grid-cols-3 gap-8">
            {/* Team Member 1 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQG5noYPqX-D7Q/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732938655612?e=1751500800&v=beta&t=V-HwNgzV5ej4HJOVNlGWKM-JicvQJnTA4HxebUOGf6E"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Manasvi Rajendra</h3>
              <p className="text-blue-600 mb-3">Co-Founder & CEO</p>
              <p className="text-gray-600 mb-4">
                Visionary leader with experience in digital product development.
              </p>
              <div className="flex justify-center space-x-3">
              <a href="https://www.linkedin.com/in/manasvi-rajendra-579831295/" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/manasvi_rajendra" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Instagram />
                </a>
              </div>
            </div>


            {/* Team Member 3 */}
            <div className="text-center">
              <div className="mb-4 rounded-full overflow-hidden w-48 h-48 mx-auto">
                <img
                  src="https://media.licdn.com/dms/image/v2/D5603AQHyDGGbmlGxng/profile-displayphoto-shrink_800_800/B56ZXa2J3pHoAc-/0/1743133385904?e=1751500800&v=beta&t=pnjfOYi3LocpfEb06U8d33KA9OPBm1g8rt3E5nLr9yg"
                  alt="Team member"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">Kushal Sharma</h3>
              <p className="text-blue-600 mb-3">Co-Founder & CTO</p>
              <p className="text-gray-600 mb-4">
                Tech visionary with expertise in AI, Web Developemnet, and App Development.
              </p>
              <div className="flex justify-center space-x-3">
                <a href="https://www.linkedin.com/in/kushal-sharma-351491311/" className="text-gray-400 hover:text-blue-600 transition-colors">
                  <Linkedin />
                </a>
                <a href="https://www.instagram.com/kushalsharma.06" className="text-gray-400 hover:text-blue-600 transition-colors">
                    <Instagram />
                </a>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button variant="outline" size="lg">
              Join Our Team
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Let's collaborate to create exceptional digital experiences that drive results for your business.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
              Get in Touch
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
