"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Search,
  TrendingUp,
  Users,
  Star,
  Globe,
  Share2,
  Target,
  Shield,
  Mail,
  Phone,
  MapPin,
  ChevronRight,
  Zap,
} from "lucide-react"

const businesses = ["Local HVAC Company", "San Jose Restaurant", "Tech Startup", "Your Business"]

export default function LeadRankedLanding() {
  const [currentBusiness, setCurrentBusiness] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true)
      setTimeout(() => {
        setCurrentBusiness((prev) => (prev + 1) % businesses.length)
        setIsAnimating(false)
      }, 500)
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-blue-600">Lead Ranked</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-700 hover:text-blue-600 transition-colors">
                Home
              </a>
              <a href="#services" className="text-gray-700 hover:text-blue-600 transition-colors">
                Services
              </a>
              <a href="#case-studies" className="text-gray-700 hover:text-blue-600 transition-colors">
                Case Studies
              </a>
              <a href="#testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">
                Testimonials
              </a>
              <a href="#contact" className="text-gray-700 hover:text-blue-600 transition-colors">
                Contact
              </a>
            </div>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white">Get Ranked #1 Now</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-24 pb-16 bg-gradient-to-br from-indigo-600 via-blue-600 to-teal-600 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column */}
            <div className="space-y-8 text-white">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white hover:bg-white/20 backdrop-blur-sm border-white/30">
                  San Jose's #1 Digital Marketing Experts
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                  Get Found on Google—
                  <span className="text-teal-300">Fast</span>
                </h1>
                <p className="text-xl text-blue-100 leading-relaxed">
                  Crush local SEO, grow your traffic, and leave your competitors behind.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
                  Start Your Free SEO Audit
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg bg-transparent backdrop-blur-sm"
                >
                  View Case Studies
                </Button>
              </div>
            </div>

            {/* Right Column - Google SERP Mockup */}
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-2xl p-6 border border-gray-100">
                {/* Search Bar */}
                <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-full mb-6 border">
                  <Search className="w-5 h-5 text-gray-400" />
                  <span className="text-gray-700 flex-1">Plumber in San Jose</span>
                  <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                    <Search className="w-4 h-4 text-white" />
                  </div>
                </div>

                {/* Search Results */}
                <div className="space-y-4">
                  {/* #1 Result - Highlighted */}
                  <div className="p-4 rounded-lg bg-gradient-to-r from-blue-50 to-teal-50 border-2 border-blue-200 shadow-md">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">#1</span>
                          <h3 className="font-semibold text-blue-900">Tech Startup</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm font-medium">4.9 (214 reviews)</span>
                        </div>
                        <div className="flex items-center gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>San Jose, CA</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>(408) 555-1234</span>
                          </div>
                        </div>
                        <div className="text-sm text-blue-600 mt-1">techstartup.com</div>
                      </div>
                      {/* Mini Map Widget */}
                      <div className="w-20 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border border-gray-200 flex items-center justify-center ml-4">
                        <div className="relative">
                          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                          <div className="absolute -top-1 -left-1 w-2 h-2 bg-red-600 rounded-full animate-ping"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Competitors */}
                  {[
                    { name: "Competitor 1", rating: "4.2", reviews: "89" },
                    { name: "Competitor 2", rating: "3.8", reviews: "156" },
                    { name: "Competitor 3", rating: "4.0", reviews: "67" },
                  ].map((competitor, index) => (
                    <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded">#{index + 2}</span>
                        <h3 className="font-medium text-gray-700">{competitor.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${
                                i < Math.floor(Number.parseFloat(competitor.rating))
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-600">
                          {competitor.rating} ({competitor.reviews} reviews)
                        </span>
                      </div>
                      <div className="text-sm text-gray-500">Standard listing</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-teal-500 text-white p-3 rounded-full shadow-lg animate-bounce">
                <Target className="w-6 h-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-white text-blue-600 p-3 rounded-full shadow-lg animate-pulse">
                <TrendingUp className="w-6 h-6" />
              </div>
            </div>
          </div>

          {/* Testimonials Below Hero */}
          <div className="mt-16 pt-8 border-t border-white/20">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sarah L.",
                  role: "Cafe Owner",
                  quote: "Our traffic 10x'd in 60 days!",
                  avatar: "SL",
                },
                {
                  name: "Mike R.",
                  role: "HVAC Business",
                  quote: "Best investment we ever made!",
                  avatar: "MR",
                },
                {
                  name: "Jennifer C.",
                  role: "Dental Practice",
                  quote: "Leads are pouring in daily now!",
                  avatar: "JC",
                },
              ].map((testimonial, index) => (
                <div key={index} className="flex items-center gap-4 text-white">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <span className="text-white font-semibold text-sm">{testimonial.avatar}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-blue-100 italic">"{testimonial.quote}"</p>
                    <p className="text-xs text-white/80 mt-1">
                      {testimonial.name}, {testimonial.role}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Website Builder Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Pitch Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Website Development</Badge>
                <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                  Launch a High-Performance Website in <span className="text-blue-600">Under 7 Days</span>
                </h2>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Get a lightning-fast, SEO-optimized website that ranks on Google from day one. Built specifically for
                  local businesses to dominate search results.
                </p>
              </div>

              {/* Benefits List */}
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { icon: Search, text: "SEO Optimized Structure", desc: "Built for Google rankings" },
                  { icon: Phone, text: "Mobile-First Design", desc: "Perfect on all devices" },
                  { icon: Zap, text: "Lightning Fast Loading", desc: "Under 2 second load times" },
                  { icon: MapPin, text: "GMB Compatible", desc: "Syncs with Google My Business" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-start gap-3 p-4 bg-white/60 backdrop-blur-sm rounded-xl border border-gray-200/50 hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <benefit.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 text-sm">{benefit.text}</div>
                      <div className="text-xs text-gray-600">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold">
                  Get My Website Now
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg bg-transparent"
                >
                  See Examples
                </Button>
              </div>
            </div>

            {/* Right Side - Interactive Website Preview */}
            <div className="relative">
              {/* Floating Google SERP Preview */}
              <div className="absolute -top-8 -left-4 z-20 bg-white rounded-lg shadow-xl p-4 border border-gray-200 max-w-sm animate-bounce">
                <div className="flex items-center gap-2 mb-2">
                  <Search className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-600">dentist near me</span>
                </div>
                <div className="space-y-1">
                  <div className="text-blue-600 text-sm font-medium">Smile Dental Care</div>
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    ))}
                    <span className="text-xs text-gray-500">4.9 (89 reviews)</span>
                  </div>
                  <div className="text-xs text-gray-500">San Jose, CA • (408) 555-0123</div>
                </div>
              </div>

              {/* Website Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden transform hover:scale-105 transition-transform duration-500">
                {/* Browser Header */}
                <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-md px-3 py-1 text-xs text-gray-600 ml-4">
                    https://smiledentalcare.com
                  </div>
                </div>

                {/* Website Content */}
                <div className="p-6 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold text-sm">SD</span>
                      </div>
                      <div>
                        <div className="font-bold text-gray-900 text-sm">Smile Dental Care</div>
                        <div className="text-xs text-gray-500">San Jose's Premier Dentist</div>
                      </div>
                    </div>
                    <Button size="sm" className="bg-blue-600 text-white text-xs px-3 py-1">
                      Book Now
                    </Button>
                  </div>

                  {/* Hero Section */}
                  <div className="text-center space-y-3">
                    <h1 className="text-lg font-bold text-gray-900">Your Perfect Smile Starts Here</h1>
                    <p className="text-xs text-gray-600">Professional dental care in the heart of San Jose</p>
                    <div className="flex items-center justify-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      ))}
                      <span className="text-xs text-gray-500 ml-1">4.9/5 (89 reviews)</span>
                    </div>
                  </div>

                  {/* Services Grid */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { name: "Cleanings", icon: "🦷" },
                      { name: "Whitening", icon: "✨" },
                      { name: "Implants", icon: "🔧" },
                    ].map((service, index) => (
                      <div
                        key={index}
                        className="group bg-gray-50 rounded-lg p-3 text-center hover:bg-blue-50 transition-colors cursor-pointer"
                        title={`SEO optimized for "${service.name} San Jose"`}
                      >
                        <div className="text-lg mb-1">{service.icon}</div>
                        <div className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                          {service.name}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Contact Section */}
                  <div className="bg-blue-50 rounded-lg p-4 space-y-2">
                    <div className="text-sm font-semibold text-blue-900">Contact Us Today</div>
                    <div className="flex items-center gap-2 text-xs text-blue-700">
                      <Phone className="w-3 h-3" />
                      <span>(408) 555-0123</span>
                    </div>
                    <div className="flex items-center gap-2 text-xs text-blue-700">
                      <MapPin className="w-3 h-3" />
                      <span>123 Main St, San Jose, CA</span>
                    </div>
                  </div>
                </div>

                {/* Hover Tooltips */}
                <div className="absolute top-20 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg">Mobile Optimized</div>
                </div>
              </div>

              {/* Builder Tag */}
              <div className="mt-6 text-center">
                <Badge variant="outline" className="text-gray-600 border-gray-300 bg-white/80 backdrop-blur-sm">
                  Generated with our custom website builder
                </Badge>
              </div>

              {/* Floating Elements */}
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white p-3 rounded-full shadow-lg animate-pulse">
                <Zap className="w-5 h-5" />
              </div>
              <div className="absolute top-1/2 -left-6 bg-blue-500 text-white p-2 rounded-full shadow-lg">
                <Search className="w-4 h-4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-64 h-64 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-violet-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Our Services</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Digital Marketing Solutions</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From blazing-fast websites to premium link building, we provide everything you need to dominate your
              market.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Globe,
                title: "Custom Web Design",
                hook: "Blazing-fast sites built to convert",
                metric: "+150% time on site",
                color: "from-blue-500 to-cyan-500",
                bgColor: "from-blue-50 to-cyan-50",
              },
              {
                icon: Share2,
                title: "Social Media Management",
                hook: "Build loyal fans on every platform",
                metric: "+12K followers in 90 days",
                color: "from-purple-500 to-pink-500",
                bgColor: "from-purple-50 to-pink-50",
              },
              {
                icon: Search,
                title: "Local SEO",
                hook: "Rank top 3 in your city",
                metric: "4.9 ⭐ avg GMB rating",
                color: "from-green-500 to-emerald-500",
                bgColor: "from-green-50 to-emerald-50",
              },
              {
                icon: Shield,
                title: "Reputation Management",
                hook: "5-star reviews made effortless",
                metric: "90% drop in negative feedback",
                color: "from-orange-500 to-red-500",
                bgColor: "from-orange-50 to-red-50",
              },
              {
                icon: Zap,
                title: "Backlink Campaigns",
                hook: "Boost authority with premium links",
                metric: "DA 70+ placements",
                color: "from-yellow-500 to-orange-500",
                bgColor: "from-yellow-50 to-orange-50",
              },
              {
                icon: Users,
                title: "Lead Generation",
                hook: "Turn clicks into real customers",
                metric: "$8 avg cost per lead",
                color: "from-teal-500 to-blue-500",
                bgColor: "from-teal-50 to-blue-50",
              },
              {
                icon: Mail,
                title: "Email Campaigns",
                hook: "Nurture. Convert. Repeat.",
                metric: "46% open rate",
                color: "from-indigo-500 to-purple-500",
                bgColor: "from-indigo-50 to-purple-50",
              },
              {
                icon: MapPin,
                title: "Google My Business",
                hook: "Show up when it matters most",
                metric: "+220% GMB calls",
                color: "from-rose-500 to-pink-500",
                bgColor: "from-rose-50 to-pink-50",
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group bg-white/80 backdrop-blur-sm border-gray-200/50 hover:bg-white hover:border-gray-300 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl group-hover:shadow-blue-500/20 transition-all duration-500 group-hover:scale-110`}
                    >
                      {service.icon && <service.icon className="w-8 h-8 text-white group-hover:animate-pulse" />}
                    </div>
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.bgColor} rounded-2xl opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-sm`}
                    ></div>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm mb-3 leading-relaxed">{service.hook}</p>

                  <div className="inline-flex items-center gap-1 bg-gradient-to-r from-blue-50 to-indigo-50 backdrop-blur-sm rounded-full px-3 py-1 border border-blue-200/50">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-xs font-semibold text-gray-700">{service.metric}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-xl max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Not sure where to start?</h3>
              <p className="text-gray-600 mb-6">
                Get a comprehensive audit of your digital presence and discover your biggest opportunities.
              </p>
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Get a Free Audit
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Interactive Google Spotlight */}
      <section
        id="case-studies"
        className="py-20 bg-gradient-to-br from-white via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-indigo-200/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100 mb-4">Success Spotlight</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">From Page 3 to #1 in 60 Days</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              See how we transformed Chicago Roofing Pros from invisible to unstoppable on Google.
            </p>
          </div>

          {/* Google SERP Preview */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-6 border border-gray-100 max-w-4xl mx-auto">
              {/* Search Bar */}
              <div className="flex items-center gap-3 p-4 bg-gray-50 rounded-full mb-6 border">
                <Search className="w-5 h-5 text-gray-400" />
                <span className="text-gray-700 flex-1">Roofing Company in Chicago</span>
                <div className="w-6 h-6 bg-blue-600 rounded-full flex items-center justify-center">
                  <Search className="w-4 h-4 text-white" />
                </div>
              </div>

              {/* Search Results */}
              <div className="space-y-4">
                {/* #1 Result - Chicago Roofing Pros */}
                <div className="p-5 rounded-lg bg-gradient-to-r from-green-50 to-blue-50 border-2 border-green-200 shadow-lg">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-green-600 text-white text-xs font-bold px-2 py-1 rounded">#1</span>
                        <h3 className="font-bold text-green-900 text-lg">Chicago Roofing Pros</h3>
                        <TrendingUp className="w-5 h-5 text-green-600" />
                      </div>
                      <div className="flex items-center gap-2 mb-3">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-sm font-semibold text-gray-900">4.9 (128 reviews)</span>
                      </div>
                      <div className="flex items-center gap-6 text-sm text-gray-700 mb-2">
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4 text-red-500" />
                          <span>Chicago, IL</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Phone className="w-4 h-4 text-blue-600" />
                          <span>(312) 555-ROOF</span>
                        </div>
                      </div>
                      <div className="text-sm text-blue-600 font-medium">chicagoroofpros.com</div>
                    </div>
                    {/* Mini Map */}
                    <div className="w-24 h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg border border-gray-200 flex items-center justify-center ml-4">
                      <div className="relative">
                        <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                        <div className="absolute -top-1 -left-1 w-3 h-3 bg-red-600 rounded-full animate-ping"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Competitors */}
                {[
                  { name: "Windy City Roofing", rating: "4.1", reviews: "67" },
                  { name: "Chicago Roof Masters", rating: "3.9", reviews: "94" },
                ].map((competitor, index) => (
                  <div key={index} className="p-4 rounded-lg bg-gray-50 border border-gray-200">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded">#{index + 2}</span>
                      <h3 className="font-medium text-gray-700">{competitor.name}</h3>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`w-4 h-4 ${
                              i < Math.floor(Number.parseFloat(competitor.rating))
                                ? "fill-yellow-400 text-yellow-400"
                                : "fill-gray-200 text-gray-200"
                            }`}
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-600">
                        {competitor.rating} ({competitor.reviews} reviews)
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* GMB-Style Profile Card */}
          <div className="mb-12">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8 items-start">
                {/* Left Side - Business Info */}
                <div>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl flex items-center justify-center">
                      <span className="text-white font-bold text-xl">CR</span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">Chicago Roofing Pros</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                          ))}
                        </div>
                        <span className="text-gray-600 font-medium">4.9 (128 reviews)</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-2 text-green-600">
                      <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                      <span className="font-medium">Open Now · 9AM–5PM</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <MapPin className="w-4 h-4" />
                      <span>Downtown Chicago, IL</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <Phone className="w-4 h-4" />
                      <span>(312) 555-ROOF</span>
                    </div>
                  </div>

                  <div className="flex gap-3">
                    <Button className="bg-blue-600 hover:bg-blue-700 text-white flex-1">
                      <Globe className="w-4 h-4 mr-2" />
                      Website
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <Phone className="w-4 h-4 mr-2" />
                      Call
                    </Button>
                    <Button variant="outline" className="flex-1 bg-transparent">
                      <MapPin className="w-4 h-4 mr-2" />
                      Directions
                    </Button>
                  </div>
                </div>

                {/* Right Side - Map Preview */}
                <div className="bg-gradient-to-br from-green-100 via-blue-100 to-indigo-100 rounded-xl h-64 flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <p className="text-gray-700 font-medium">Chicago Roofing Pros</p>
                    <p className="text-sm text-gray-500">Downtown Chicago</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Animated Stats */}
          <div className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: TrendingUp, stat: "+410%", label: "Website Traffic", color: "from-blue-500 to-cyan-500" },
                { icon: Target, stat: "#1", label: "Google Maps Ranking", color: "from-green-500 to-emerald-500" },
                { icon: Users, stat: "+320%", label: "Lead Form Submissions", color: "from-purple-500 to-pink-500" },
                { icon: Star, stat: "4.9⭐", label: "Average GMB Rating", color: "from-yellow-500 to-orange-500" },
              ].map((item, index) => (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm"
                >
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      {item.icon && <item.icon className="w-8 h-8 text-white" />}
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.stat}</div>
                    <div className="text-sm text-gray-600 font-medium">{item.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Customer Testimonial */}
          <div className="text-center">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200/50 shadow-xl max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-green-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">MR</span>
                </div>
                <div className="text-left">
                  <div className="font-bold text-gray-900">Mike Rodriguez</div>
                  <div className="text-sm text-gray-600">Owner, Chicago Roofing Pros</div>
                </div>
              </div>
              <blockquote className="text-xl text-gray-700 italic mb-4 leading-relaxed">
                "We were buried on page 3 before Lead Ranked stepped in. Now we're not just #1 on Google Maps – we're
                booked solid for months! Our phone hasn't stopped ringing."
              </blockquote>
              <div className="flex items-center justify-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <Badge className="bg-teal-100 text-teal-800 hover:bg-teal-100 mb-4">Client Testimonials</Badge>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Johnson",
                role: "CEO, TechFlow Solutions",
                quote:
                  "Lead Ranked transformed our online presence—our business traffic and revenue skyrocketed! We went from page 3 to #1 in just 2 months.",
                rating: 5,
              },
              {
                name: "Mike Rodriguez",
                role: "Owner, Rodriguez HVAC",
                quote:
                  "The ROI has been incredible. We're getting 5x more qualified leads than before working with Lead Ranked. Highly recommend!",
                rating: 5,
              },
              {
                name: "Jennifer Chen",
                role: "Marketing Director, Bay Area Dental",
                quote:
                  "Professional, results-driven, and transparent. Lead Ranked delivered exactly what they promised and more. Our practice is booming!",
                rating: 5,
              },
            ].map((testimonial, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <blockquote className="text-gray-700 mb-4 italic">"{testimonial.quote}"</blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-semibold text-lg">
                        {testimonial.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.role}</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Rank #1?</h2>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto mb-8">
              Get your free SEO audit and discover how we can help you dominate Google search results.
            </p>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-semibold">
              Schedule a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Call Us</h3>
              <p className="text-blue-100">(949) 385-2076</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Email Us</h3>
              <p className="text-blue-100">hello@leadranked.com</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white mb-2">Visit Us</h3>
              <p className="text-blue-100">San Jose, CA</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="col-span-2">
              <div className="text-2xl font-bold text-blue-400 mb-4">Lead Ranked</div>
              <p className="text-gray-400 mb-4">
                San Jose's premier digital marketing agency specializing in getting businesses ranked #1 on Google.
              </p>
              <div className="flex space-x-4">
                {/* Social media placeholder icons */}
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-colors cursor-pointer">
                  <span className="text-sm font-bold">in</span>
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#home" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#services" className="hover:text-white transition-colors">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#case-studies" className="hover:text-white transition-colors">
                    Case Studies
                  </a>
                </li>
                <li>
                  <a href="#testimonials" className="hover:text-white transition-colors">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Lead Ranked. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
