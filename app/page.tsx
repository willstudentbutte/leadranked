"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

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
  Rocket,
} from "lucide-react"

// Helper function to generate realistic avatar URLs
const getImageUrl = (name: string) => {
  // Using UI Avatars as fallback with realistic styling
  const cleanName = encodeURIComponent(name)
  return `https://ui-avatars.com/api/?name=${cleanName}&size=128&background=random&color=fff&bold=true&format=png`
}

// Clean Modern SaaS Testimonials Data with Subtle Colors
const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    title: "CEO, TechFlow Solutions",
    quote: "Lead Ranked helped us go from invisible to unmissable on Google. We&apos;re now the top tech company in San Jose!",
    avatar: "https://ui-avatars.com/api/?name=Sarah+Johnson&size=128&background=3b82f6&color=fff&bold=true&format=png",
    bgColor: "bg-blue-50/50",
  },
  {
    id: 2,
    name: "Mike Herrera",
    title: "Owner, Chicago Roof Co.",
    quote: "Our phone hasn&apos;t stopped ringing since working with Lead Ranked. We went from struggling to fully booked!",
    avatar: "https://ui-avatars.com/api/?name=Mike+Herrera&size=128&background=10b981&color=fff&bold=true&format=png",
    bgColor: "bg-green-50/50",
  },
  {
    id: 3,
    name: "Jennifer Chen",
    title: "Bay Area Dental",
    quote: "We&apos;re booming with new patients! Lead Ranked made us the go-to dental practice in our area.",
    avatar: "https://ui-avatars.com/api/?name=Jennifer+Chen&size=128&background=8b5cf6&color=fff&bold=true&format=png",
    bgColor: "bg-purple-50/50",
  },
  {
    id: 4,
    name: "David Park",
    title: "Park&apos;s Auto Repair",
    quote: "From struggling to get noticed to being the #1 auto shop in town. These guys are absolute wizards!",
    avatar: "https://ui-avatars.com/api/?name=David+Park&size=128&background=f97316&color=fff&bold=true&format=png",
    bgColor: "bg-orange-50/50",
  },
  {
    id: 5,
    name: "Lisa Thompson",
    title: "Thompson Law Firm",
    quote: "The quality of clients we&apos;re attracting now is incredible. Our practice has completely transformed!",
    avatar: "https://ui-avatars.com/api/?name=Lisa+Thompson&size=128&background=ec4899&color=fff&bold=true&format=png",
    bgColor: "bg-pink-50/50",
  },
  {
    id: 6,
    name: "Carlos Martinez",
    title: "Martinez Restaurant",
    quote: "We&apos;re booked solid every weekend! Lead Ranked made us the most talked-about restaurant in town.",
    avatar: "https://ui-avatars.com/api/?name=Carlos+Martinez&size=128&background=14b8a6&color=fff&bold=true&format=png",
    bgColor: "bg-teal-50/50",
  },
]

// Clean Modern SaaS Testimonials Component
function TestimonialCarousel() {
  return (
    <div className="relative">
      {/* Decorative background orbs */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-8 -left-8 w-40 h-40 rounded-full bg-blue-500/10 blur-3xl"></div>
        <div className="absolute -bottom-8 -right-12 w-56 h-56 rounded-full bg-purple-500/10 blur-3xl"></div>
      </div>

      {/* Section header */}
      <div className="text-center mb-10">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-teal-500 text-white px-5 py-2 rounded-full shadow-xl border border-white/30">
          <Star className="w-4 h-4 fill-yellow-300 text-yellow-300" />
          <span className="font-bold">What Clients Are Saying</span>
        </div>
        <h3 className="mt-4 font-black text-gray-900 leading-tight">
          Proof You Can Feel<br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Real Wins, Real Fast</span>
        </h3>
      </div>

      {/* Testimonials Grid - Masonry-like responsive with equal height */}
      <div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 120}ms`
            }}
          >
            {/* Card */}
            <div className={`relative h-full ${testimonial.bgColor} p-6 sm:p-7 rounded-2xl shadow-xl border border-white/50 backdrop-blur-md flex flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl`}>
              {/* Glow overlay */}
              <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute -inset-1 bg-gradient-to-br from-white/10 to-white/0 blur-lg"></div>
              </div>

              {/* Star Rating + Badge */}
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center gap-1.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                  ))}
                </div>
                <div className="inline-flex items-center gap-2 text-xs font-bold px-2.5 py-1 rounded-full bg-gradient-to-r from-emerald-100 to-green-100 text-emerald-700 border border-emerald-200">
                  <TrendingUp className="w-3 h-3" />
                  <span>RESULTS</span>
                </div>
              </div>

              {/* Quote Text - Center Aligned */}
              <div className="flex-1 flex items-center mb-8">
                <blockquote className="text-gray-700 text-lg leading-relaxed text-center relative">
                  <span className="text-4xl text-blue-200 absolute -top-2 -left-2 font-serif">&quot;</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                  <span className="text-4xl text-blue-200 absolute -bottom-6 -right-2 font-serif">&quot;</span>
                </blockquote>
              </div>

              {/* Footer: Avatar + Meta */}
              <div className="flex items-center gap-3 pt-5 border-t border-white/60">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shadow-lg ring-2 ring-white/80 flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = getImageUrl(testimonial.name);
                    }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-emerald-500 text-white text-[10px] font-black flex items-center justify-center ring-2 ring-white">✓</div>
                </div>
                <div className="min-w-0">
                  <div className="font-bold text-gray-900 text-sm sm:text-base leading-tight truncate">{testimonial.name}</div>
                  <div className="text-gray-600 text-xs sm:text-sm truncate">{testimonial.title}</div>
                </div>
                <div className="ml-auto text-xs text-gray-500 hidden sm:block">Verified</div>
              </div>

              {/* Corner accent */}
              <div className="pointer-events-none absolute -top-8 -right-8 w-20 h-20 rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 blur-2xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA inside carousel for conversion */}
      <div className="mt-10 flex justify-center">
        <Button className="group bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all">
          See More Success Stories
          <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-0.5 transition-transform" />
        </Button>
      </div>
    </div>
  )
}

export default function LeadRankedLanding() {

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

      {/* Premium Hero Section */}
      <section
        id="home"
        className="pt-32 pb-24 bg-gradient-to-br from-indigo-600 via-blue-600 to-teal-600 relative overflow-hidden min-h-screen flex items-center"
      >
        {/* Enhanced Background Effects with Google Colors */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-teal-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl"></div>

          {/* Floating Google-colored dots */}
          <div className="absolute top-32 left-1/4 w-4 h-4 bg-red-400/30 rounded-full animate-bounce"></div>
          <div className="absolute top-48 right-1/4 w-3 h-3 bg-yellow-400/30 rounded-full animate-bounce delay-500"></div>
          <div className="absolute bottom-32 left-1/3 w-5 h-5 bg-green-400/30 rounded-full animate-bounce delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Column - Enhanced */}
            <div className="space-y-8 lg:space-y-10 text-white">
              <div className="space-y-6 lg:space-y-8">
                <div className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 lg:px-8 py-3 lg:py-4 rounded-full border border-white/30 shadow-xl">
                  <span className="text-2xl lg:text-3xl">🏆</span>
                  <span className="text-white font-bold text-base lg:text-lg font-sans">Silicon Valley&apos;s #1 SEO Authority</span>
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[1.2] lg:leading-[1.3] tracking-tight pb-2">
                  <span className="block mb-2 lg:mb-4">Rank #1 on Google —</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-teal-300 to-pink-300 pb-1">
                    The Right Way
                  </span>
                </h1>

                <p className="text-base sm:text-lg lg:text-2xl text-blue-100 leading-relaxed font-medium max-w-xl font-sans">
                  Rise to the top of search results with SEO that actually works. Custom websites and local SEO that put you at #1—fast.
                </p>
              </div>

              {/* Premium CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 lg:gap-6">
                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-bold font-sans shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105">
                  🚀 Start Free SEO Audit
                  <ChevronRight className="ml-2 lg:ml-3 h-5 lg:h-6 w-5 lg:w-6" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-white/40 text-white hover:bg-white/15 px-8 lg:px-10 py-4 lg:py-5 text-lg lg:text-xl font-bold font-sans bg-transparent backdrop-blur-sm shadow-xl"
                >
                  📊 View Case Studies
                </Button>
              </div>

              {/* Mini Testimonials Under CTAs with Frosted Glass */}
              <div className="pt-6 lg:pt-8">
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-4 lg:p-6 border border-white/20 shadow-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
                    <div className="flex -space-x-2 lg:-space-x-3">
                      {[
                        "https://ui-avatars.com/api/?name=Sarah+J&size=64&background=3b82f6&color=fff&bold=true&format=png",
                        "https://ui-avatars.com/api/?name=Mike+H&size=64&background=10b981&color=fff&bold=true&format=png",
                        "https://ui-avatars.com/api/?name=Jennifer+C&size=64&background=8b5cf6&color=fff&bold=true&format=png",
                        "https://ui-avatars.com/api/?name=David+P&size=64&background=f97316&color=fff&bold=true&format=png"
                      ].map((avatar, index) => (
                        <div key={index} className="w-10 lg:w-12 h-10 lg:h-12 rounded-full border-2 lg:border-3 border-white shadow-lg overflow-hidden hover:scale-110 transition-transform duration-300">
                          <Image src={avatar} alt="Client" width={48} height={48} className="w-full h-full object-cover" />
                        </div>
                      ))}
                    </div>
                    <div className="flex items-center gap-1 lg:gap-2">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                      ))}
                    </div>
                  </div>
                  <p className="text-white text-base lg:text-lg font-medium font-sans">
                    ⭐ <span className="font-bold">&quot;Went from page 3 to #1 in 30 days&quot;</span> - Join 500+ businesses dominating Google
                  </p>
                </div>
              </div>
            </div>

            {/* Right Column - Premium Google SERP Mockup */}
            <div className="relative mt-8 lg:mt-0 w-full max-w-full">
              {/* Main SERP Container */}
              <div className="bg-white rounded-2xl lg:rounded-3xl shadow-2xl p-4 lg:p-8 border border-gray-100 backdrop-blur-sm w-full max-w-full overflow-hidden">
                {/* Realistic Google Search Bar */}
                <div className="flex items-center gap-2 lg:gap-4 p-3 lg:p-5 bg-gray-50 rounded-full mb-6 lg:mb-8 border-2 border-gray-200 shadow-inner">
                  <div className="flex items-center gap-2 lg:gap-3 min-w-0 flex-1">
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <Search className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-medium text-sm lg:text-lg truncate">roofing company in San Jose</span>
                  </div>
                  <div className="flex-shrink-0">
                    <div className="w-6 lg:w-8 h-6 lg:h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow">
                      <Search className="w-3 lg:w-4 h-3 lg:h-4 text-white" />
                    </div>
                  </div>
                </div>

                {/* Search Results */}
                <div className="space-y-3 lg:space-y-5">
                  {/* #1 Result - Your Client (Highlighted & Animated) */}
                  <div className="relative p-4 lg:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-r from-blue-50 via-green-50 to-teal-50 border-2 lg:border-3 border-blue-300 shadow-xl hover:shadow-2xl transition-all duration-500 group">
                    {/* Ranking Badge with Animation */}
                    <div className="absolute -top-2 lg:-top-3 -left-2 lg:-left-3 bg-gradient-to-r from-green-500 to-blue-600 text-white text-xs lg:text-sm font-black px-2 lg:px-4 py-1 lg:py-2 rounded-full shadow-lg animate-pulse">
                      🏆 #1
                    </div>

                    {/* "You" Indicator */}
                    <div className="absolute -top-2 lg:-top-3 -right-2 lg:-right-3 bg-yellow-400 text-black text-xs font-bold px-2 lg:px-3 py-1 rounded-full shadow-lg">
                      YOU ⬆️
                    </div>

                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-3 mb-2">
                          <h3 className="font-bold text-blue-900 text-lg lg:text-xl">San Jose Roofing Pros</h3>
                          <div className="flex items-center gap-1 bg-green-100 px-2 py-1 rounded-full w-fit">
                            <TrendingUp className="w-3 lg:w-4 h-3 lg:h-4 text-green-600" />
                            <span className="text-xs font-bold text-green-700">OPTIMIZED</span>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 lg:gap-3 mb-3">
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 lg:w-5 h-4 lg:h-5 fill-yellow-400 text-yellow-400" />
                            ))}
                          </div>
                          <span className="text-sm lg:text-base font-bold text-gray-800">4.9 (347 reviews)</span>
                        </div>

                        <div className="flex flex-col lg:flex-row lg:items-center gap-2 lg:gap-6 text-sm lg:text-base text-gray-700 mb-3">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 lg:w-5 h-4 lg:h-5 text-red-500" />
                            <span className="font-medium">San Jose, CA</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Phone className="w-4 lg:w-5 h-4 lg:h-5 text-green-600" />
                            <span className="font-medium">(408) 555-ROOF</span>
                          </div>
                        </div>

                        <div className="text-blue-600 font-semibold text-sm lg:text-base mb-2">sanjoseroofingpros.com</div>
                        <div className="text-gray-600 text-xs lg:text-sm">Professional roofing services • Licensed & Insured • 24/7 Emergency Repairs</div>
                      </div>

                      {/* Enhanced Mini Map */}
                      <div className="w-16 lg:w-24 h-14 lg:h-20 bg-gradient-to-br from-green-100 to-blue-100 rounded-lg lg:rounded-xl border-2 border-gray-200 flex items-center justify-center lg:ml-6 shadow-lg flex-shrink-0">
                        <div className="relative">
                          <div className="w-3 lg:w-4 h-3 lg:h-4 bg-red-500 rounded-full shadow-lg"></div>
                          <div className="absolute -top-1 -left-1 w-2 lg:w-3 h-2 lg:h-3 bg-red-600 rounded-full animate-ping"></div>
                          <div className="absolute top-3 lg:top-5 left-1 lg:left-2 text-xs font-bold text-gray-600">📍</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Competitors - Faded */}
                  {[
                    { name: "Budget Roofing Co", rating: "4.1", reviews: "89", position: 2 },
                    { name: "Quick Fix Roofing", rating: "3.8", reviews: "156", position: 3 },
                  ].map((competitor, index) => (
                    <div key={index} className="p-3 lg:p-4 rounded-lg lg:rounded-xl bg-gray-50 border border-gray-200 opacity-60">
                      <div className="flex items-center gap-2 lg:gap-3 mb-2">
                        <span className="bg-gray-400 text-white text-xs font-bold px-2 lg:px-3 py-1 rounded-full">#{competitor.position}</span>
                        <h3 className="font-medium text-gray-700 text-base lg:text-lg">{competitor.name}</h3>
                      </div>
                      <div className="flex items-center gap-2 lg:gap-3 mb-2">
                        <div className="flex items-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(Number.parseFloat(competitor.rating))
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
                      <div className="text-sm text-gray-500">Standard listing • Limited visibility</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Enhanced Floating Elements - Hidden on mobile to prevent overflow */}
              <div className="hidden lg:block absolute -top-6 -right-6 bg-gradient-to-r from-green-500 to-teal-500 text-white p-4 rounded-full shadow-2xl animate-bounce">
                <Target className="w-7 h-7" />
              </div>
              <div className="hidden lg:block absolute -bottom-6 -left-6 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-4 rounded-full shadow-2xl animate-pulse">
                <TrendingUp className="w-7 h-7" />
              </div>

              {/* Ranking Up Animation - Hidden on mobile */}
              <div className="hidden lg:block absolute top-1/2 -right-12 bg-yellow-400 text-black px-3 py-2 rounded-lg shadow-lg animate-bounce">
                <div className="text-xs font-bold">📈 RANKING UP!</div>
              </div>
            </div>
          </div>


        </div>
      </section>

      {/* Mobile-Responsive Website Builder Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Mobile-Responsive Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-10 sm:right-20 w-48 sm:w-72 h-48 sm:h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-10 sm:left-20 w-60 sm:w-80 h-60 sm:h-80 bg-gradient-to-r from-indigo-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 sm:w-96 h-64 sm:h-96 bg-gradient-to-r from-pink-100/10 to-yellow-100/10 rounded-full blur-3xl animate-pulse delay-2000"></div>

          {/* Mobile-Responsive Floating abstract shapes */}
          <div className="absolute top-32 left-1/4 w-8 sm:w-16 h-8 sm:h-16 bg-gradient-to-r from-blue-300/20 to-teal-300/20 rounded-2xl rotate-45 animate-float"></div>
          <div className="absolute bottom-32 right-1/4 w-6 sm:w-12 h-6 sm:h-12 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-4 sm:w-8 h-4 sm:h-8 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-lg rotate-12 animate-float delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
            {/* Left Side - Mobile-Responsive Pitch Content */}
            <div className="space-y-6 sm:space-y-8">
              <div className="space-y-4 sm:space-y-6">
                <div className="inline-flex items-center gap-2 sm:gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="text-lg sm:text-2xl">⚡</span>
                  <span className="font-bold text-sm sm:text-lg">Lightning-Fast Websites</span>
                </div>
                <h2 className="font-black text-gray-900 leading-tight">
                  Your Dream Website,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Ready in 7 Days</span>
                </h2>
                <p className="text-sm sm:text-base lg:text-xl text-gray-600 leading-relaxed">
                  Get a lightning-fast, SEO-optimized website that ranks on Google from day one. Built specifically for local businesses who want to dominate their competition!
                </p>
              </div>

              {/* Mobile-Responsive Enhanced Benefits List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {[
                  { icon: Search, text: "SEO Optimized Structure", desc: "Built for Google rankings", color: "from-blue-500 to-blue-600" },
                  { icon: Phone, text: "Mobile-First Design", desc: "Perfect on all devices", color: "from-green-500 to-green-600" },
                  { icon: Zap, text: "Lightning Fast Loading", desc: "Under 2 second load times", color: "from-yellow-500 to-orange-500" },
                  { icon: MapPin, text: "GMB Compatible", desc: "Syncs with Google My Business", color: "from-purple-500 to-purple-600" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-3 sm:gap-4 p-4 sm:p-6 bg-white/80 backdrop-blur-sm rounded-xl sm:rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/90"
                  >
                    <div className={`w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br ${benefit.color} rounded-xl sm:rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <benefit.icon className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0">
                      <div className="font-bold text-gray-900 text-sm sm:text-base mb-1">{benefit.text}</div>
                      <div className="text-xs sm:text-sm text-gray-600">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile-Responsive High-Conversion SaaS CTA Button */}
              <div className="space-y-3 sm:space-y-4">
                <div className="w-full">
                  <Button size="lg" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white w-full px-6 py-4 sm:px-12 sm:py-6 lg:px-16 lg:py-7 text-lg sm:text-xl lg:text-2xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl border-0 hover:saas-glow">
                    {/* Content */}
                    <div className="flex items-center justify-center gap-3 sm:gap-4">
                      <Rocket className="h-6 w-6 sm:h-7 sm:w-7 lg:h-8 lg:w-8 group-hover:animate-pulse transition-all duration-300" />
                      <span className="tracking-normal font-black">Get My Website Now</span>
                    </div>

                    {/* Subtle highlight overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-xl pointer-events-none"></div>
                  </Button>
                </div>

                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-xs sm:text-sm font-medium">Trusted by 500+ local businesses</span>
                </div>
              </div>
            </div>

            {/* Right Side - Mobile-Responsive Enhanced Website Preview */}
            <div className="relative max-w-lg mx-auto lg:max-w-none mt-8 lg:mt-0">
              {/* Mobile-Responsive Premium Realistic Website Mockup */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl ring-1 ring-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:ring-2 hover:ring-blue-200/50 group w-full">
                {/* Mobile-Responsive Enhanced Browser Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-3 py-2 sm:px-6 sm:py-4 flex items-center gap-2 sm:gap-4 border-b border-gray-200/50">
                  <div className="flex gap-1 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-2 py-1.5 sm:px-4 sm:py-2.5 text-xs sm:text-sm text-gray-700 border border-gray-200 shadow-inner font-mono min-w-0">
                    <span className="truncate block">🔒 https://eliteplumbingpros.com</span>
                  </div>
                </div>

                {/* Website Content - Professional Layout */}
                <div className="bg-white font-sans">
                  {/* Mobile-Responsive Professional Navigation Bar */}
                  <div className="bg-white px-4 py-3 sm:px-8 sm:py-5 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-2 sm:gap-4 min-w-0">
                      <div className="w-8 h-8 sm:w-11 sm:h-11 bg-gradient-to-br from-blue-600 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <span className="text-white font-bold text-sm sm:text-lg">🔧</span>
                      </div>
                      <span className="font-bold text-gray-900 text-sm sm:text-lg tracking-tight truncate">Elite Plumbing Pros</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-3 py-1.5 sm:px-5 sm:py-2.5 rounded-lg sm:rounded-xl text-xs sm:text-sm font-semibold shadow-lg transition-all duration-200 hover:shadow-xl flex-shrink-0">
                      Call Now
                    </div>
                  </div>

                  {/* Mobile-Responsive Hero Section with Background */}
                  <div className="px-4 py-6 sm:px-8 sm:py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-16 sm:w-32 h-16 sm:h-32 bg-white/5 rounded-full -translate-y-8 sm:-translate-y-16 translate-x-8 sm:translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-12 sm:w-24 h-12 sm:h-24 bg-white/5 rounded-full translate-y-6 sm:translate-y-12 -translate-x-6 sm:-translate-x-12"></div>

                    <div className="relative text-center space-y-3 sm:space-y-5">
                      <h1 className="text-lg sm:text-2xl font-bold leading-tight tracking-tight">San Jose&apos;s #1 Plumbing Service</h1>
                      <p className="text-blue-100 text-sm sm:text-base font-medium">24/7 Emergency Repairs • Licensed & Insured</p>
                      <div className="flex items-center justify-center gap-1 sm:gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-300 text-yellow-300 drop-shadow-sm" />
                        ))}
                        <span className="text-white font-semibold text-sm sm:text-base ml-1 sm:ml-2">4.9/5 (247 reviews)</span>
                      </div>
                      <div className="bg-white hover:bg-gray-50 text-blue-700 px-4 py-2 sm:px-8 sm:py-4 rounded-xl sm:rounded-2xl font-bold text-sm sm:text-base inline-block mt-4 sm:mt-6 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer">
                        📞 Get Free Quote Today
                      </div>
                    </div>
                  </div>

                  {/* Mobile-Responsive Services Grid with Background */}
                  <div className="px-4 py-4 sm:px-8 sm:py-8 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
                    {/* Background image placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
                    <div className="relative">
                      <h3 className="text-base sm:text-lg font-bold text-gray-900 text-center mb-4 sm:mb-6 tracking-tight">Our Expert Services</h3>
                      <div className="grid grid-cols-3 gap-2 sm:gap-4">
                        {[
                          { name: "Emergency Repairs", icon: "🔧", color: "from-red-500 to-red-600" },
                          { name: "New Installs", icon: "🚿", color: "from-blue-500 to-blue-600" },
                          { name: "Drain Cleaning", icon: "🌊", color: "from-teal-500 to-teal-600" },
                        ].map((service, index) => (
                          <div key={index} className="bg-white rounded-xl sm:rounded-2xl p-2 sm:p-4 text-center shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-200 hover:scale-105">
                            <div className={`w-6 h-6 sm:w-10 sm:h-10 bg-gradient-to-br ${service.color} rounded-lg sm:rounded-2xl flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg`}>
                              <span className="text-white text-xs sm:text-base">{service.icon}</span>
                            </div>
                            <div className="text-xs sm:text-sm font-semibold text-gray-800 leading-tight">{service.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Mobile-Responsive Professional Testimonial */}
                  <div className="px-4 py-4 sm:px-8 sm:py-6 bg-white border-t border-gray-100">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-green-100/50 shadow-sm">
                      <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white text-base sm:text-lg font-semibold">M</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-1 sm:mb-2">
                            <div className="text-sm sm:text-base font-bold text-gray-900">Mike Rodriguez</div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="text-xs sm:text-sm text-gray-600 font-medium">Verified Customer • San Jose</div>
                        </div>
                      </div>
                      <blockquote className="text-gray-800 font-medium leading-relaxed relative text-sm sm:text-base">
                        <span className="text-lg sm:text-2xl text-green-300 absolute -top-1 sm:-top-2 -left-1">&quot;</span>
                        <span className="relative">Fixed my emergency leak in 30 minutes! Professional, affordable, and they even cleaned up after. Highly recommend!</span>
                        <span className="text-lg sm:text-2xl text-green-300 absolute -bottom-2 sm:-bottom-4 -right-1">&quot;</span>
                      </blockquote>
                    </div>
                  </div>

                  {/* Mobile-Responsive Professional Contact Footer */}
                  <div className="px-4 py-3 sm:px-8 sm:py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold">(408) 555-PIPE</div>
                          <div className="text-xs text-gray-300">24/7 Emergency</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 sm:gap-3">
                        <div className="w-6 h-6 sm:w-8 sm:h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                          <MapPin className="w-3 h-3 sm:w-4 sm:h-4" />
                        </div>
                        <div>
                          <div className="text-xs sm:text-sm font-bold">San Jose, CA</div>
                          <div className="text-xs text-gray-300">Licensed & Insured</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Mobile-Responsive Hover Tooltip */}
                <div className="absolute top-12 sm:top-16 right-2 sm:right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black text-white text-xs px-2 py-1 rounded shadow-lg whitespace-nowrap">
                    Mobile-First & SEO Optimized
                  </div>
                </div>
              </div>

              {/* Floating Elements - Smaller and More Subtle */}
              <div className="hidden lg:block absolute -top-4 -right-4 bg-gradient-to-r from-green-500 to-teal-500 text-white p-2 rounded-full shadow-xl animate-bounce">
                <Target className="w-4 h-4" />
              </div>
              <div className="hidden lg:block absolute -bottom-4 -left-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white p-2 rounded-full shadow-xl animate-pulse">
                <TrendingUp className="w-4 h-4" />
              </div>

              {/* Success Badge */}
              <div className="hidden lg:block absolute top-1/3 -right-8 bg-yellow-400 text-black px-3 py-1 rounded-lg shadow-lg animate-bounce">
                <div className="text-xs font-bold">📈 #1 Ranked!</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Services Section - Redesigned */}
      <section
        id="services"
        className="py-20 bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 relative overflow-hidden"
      >
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 left-20 w-72 h-72 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-indigo-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/3 w-72 h-72 bg-violet-200/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Header Section - Matching Website Builder Style */}
          <div className="text-center mb-16">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <span className="text-2xl">⚡</span>
                <span className="font-bold text-lg">Everything You Need</span>
              </div>
              <h2 className="font-black text-gray-900 leading-tight">
                Complete Digital Domination,<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">All Under One Roof</span>
              </h2>
              <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
                From blazing-fast websites to premium link building—we&apos;ve got everything you need to crush your competition and dominate your market!
              </p>
            </div>
          </div>

          {/* 4-Column Premium Service Grid - All 8 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                icon: Globe,
                title: "Custom Web Design",
                description: "Blazing-fast sites built to convert visitors into customers",
                stats: ["+150% time on site", "4.9⭐ rating", "7-day delivery"],
                color: "from-blue-500 to-cyan-500",
                accentColor: "blue",
              },
              {
                icon: Search,
                title: "Local SEO",
                description: "Rank top 3 in your city and dominate local search results",
                stats: ["4.9⭐ avg GMB", "Top 3 ranking", "+300% visibility"],
                color: "from-green-500 to-emerald-500",
                accentColor: "green",
              },
              {
                icon: Share2,
                title: "Social Media",
                description: "Build loyal fans and engage customers on every platform",
                stats: ["+12K followers", "46% engagement", "Daily posting"],
                color: "from-purple-500 to-pink-500",
                accentColor: "purple",
              },
              {
                icon: Shield,
                title: "Reputation Management",
                description: "5-star reviews made effortless with automated systems",
                stats: ["90% drop negative", "24/7 monitoring", "Crisis response"],
                color: "from-orange-500 to-red-500",
                accentColor: "orange",
              },
              {
                icon: Zap,
                title: "Backlink Campaigns",
                description: "Boost domain authority with premium link placements",
                stats: ["DA 70+ placements", "White-hat only", "Monthly reports"],
                color: "from-yellow-500 to-orange-500",
                accentColor: "yellow",
              },
              {
                icon: Users,
                title: "Lead Generation",
                description: "Turn website clicks into real paying customers",
                stats: ["$8 avg cost/lead", "3x conversion rate", "Qualified leads"],
                color: "from-teal-500 to-blue-500",
                accentColor: "teal",
              },
              {
                icon: Mail,
                title: "Email Campaigns",
                description: "Nurture prospects and convert them into loyal customers",
                stats: ["46% open rate", "12% click rate", "Automated flows"],
                color: "from-indigo-500 to-purple-500",
                accentColor: "indigo",
              },
              {
                icon: MapPin,
                title: "Google My Business",
                description: "Show up when local customers search for your services",
                stats: ["+220% GMB calls", "Map pack ranking", "Review automation"],
                color: "from-rose-500 to-pink-500",
                accentColor: "rose",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/90 backdrop-blur-sm border border-gray-200/50 rounded-2xl p-5 hover:bg-white hover:border-gray-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-2 transition-all duration-500 cursor-pointer"
              >
                {/* Icon Corner Accent */}
                <div className={`absolute top-0 right-0 w-16 h-16 bg-gradient-to-br ${service.color} opacity-5 rounded-bl-2xl rounded-tr-2xl`}></div>

                {/* Icon Section */}
                <div className="relative mb-4">
                  <div
                    className={`w-14 h-14 bg-gradient-to-br ${service.color} rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}
                  >
                    <service.icon className="w-7 h-7 text-white group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Content Section */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-blue-700 transition-colors leading-tight">
                    {service.title}
                  </h3>

                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-2">
                    {service.description}
                  </p>
                </div>

                {/* Stats Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {service.stats.map((stat, statIndex) => (
                    <div
                      key={statIndex}
                      className={`inline-flex items-center gap-1 bg-gradient-to-r from-${service.accentColor}-50 to-${service.accentColor}-100 backdrop-blur-sm rounded-full px-2.5 py-1 border border-${service.accentColor}-200/50 group-hover:scale-105 transition-all duration-300`}
                    >
                      <div className={`w-1.5 h-1.5 bg-${service.accentColor}-500 rounded-full animate-pulse`}></div>
                      <span className="text-xs font-semibold text-gray-700">{stat}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              </div>
            ))}
          </div>

          {/* Premium CTA Card - Wider & Shorter */}
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 rounded-2xl p-6 shadow-2xl hover:shadow-3xl hover:scale-[1.02] transition-all duration-500 group overflow-hidden">
              {/* Background Pattern */}
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/5"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>

              <div className="relative flex flex-col lg:flex-row items-center justify-between gap-6">
                {/* Left Content */}
                <div className="flex items-center gap-4 text-white">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500">
                    <Rocket className="w-8 h-8 text-white group-hover:animate-pulse" />
                  </div>
                  <div>
                    <h3 className="text-xl lg:text-2xl font-bold mb-1">Ready to Dominate Your Market?</h3>
                    <p className="text-blue-100 text-sm lg:text-base">Get a comprehensive audit and discover your biggest opportunities</p>
                  </div>
                </div>

                {/* Right CTA */}
                <div className="flex-shrink-0">
                  <Button
                    size="lg"
                    className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-4 text-lg font-bold shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group-hover:animate-pulse"
                  >
                    Get Free Audit
                    <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies Section - Interactive Google Spotlight */}
      {/* Success Spotlight - Premium SaaS Dashboard Style */}
      <section
        id="case-studies"
        className="py-16 bg-gradient-to-br from-indigo-700 via-blue-700 to-slate-800 relative overflow-hidden"
      >
        {/* Premium Background Effects */}
        <div className="absolute inset-0">
          {/* Radial light spotlights */}
          <div className="absolute top-20 left-20 w-96 h-96 bg-gradient-radial from-blue-400/20 via-blue-500/10 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-radial from-teal-400/20 via-cyan-500/10 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-indigo-400/15 via-purple-500/8 to-transparent rounded-full blur-3xl"></div>

          {/* Floating SVG shapes and sparkles */}
          <div className="absolute top-32 left-1/4 w-2 h-2 bg-blue-400/40 rounded-full animate-float"></div>
          <div className="absolute top-48 right-1/3 w-3 h-3 bg-teal-400/40 rounded-full animate-float delay-1000"></div>
          <div className="absolute bottom-32 left-1/3 w-2 h-2 bg-purple-400/40 rounded-full animate-float delay-2000"></div>
          <div className="absolute bottom-48 right-1/4 w-4 h-4 bg-cyan-400/30 rounded-full animate-float delay-500"></div>

          {/* Subtle floating SVG sparkles */}
          <div className="absolute top-40 left-16 opacity-10 animate-float text-white">
            <Star className="w-6 h-6" />
          </div>
          <div className="absolute top-60 right-16 opacity-10 animate-float delay-1000 text-white">
            <TrendingUp className="w-5 h-5" />
          </div>
          <div className="absolute bottom-40 left-20 opacity-10 animate-float delay-2000 text-white">
            <Target className="w-6 h-6" />
          </div>
        </div>

        {/* Mobile-Responsive Floating Success Badge */}
        <div className="absolute top-6 sm:top-8 left-1/2 transform -translate-x-1/2 z-20 px-4">
          <div className="relative bg-gradient-to-r from-blue-500 via-blue-600 to-teal-500 text-white px-4 py-2 sm:px-8 sm:py-4 rounded-full shadow-2xl animate-bounce border border-blue-400/30 hover:scale-105 transition-transform duration-300">
            {/* Shine effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-full animate-pulse"></div>
            <div className="relative flex items-center gap-2 sm:gap-3">
              <Rocket className="w-4 h-4 sm:w-5 sm:h-5 animate-pulse" />
              <span className="font-black text-xs sm:text-sm tracking-wide">SUCCESS SPOTLIGHT</span>
              <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-400 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-8 sm:pt-12">
          {/* Mobile-Responsive Header */}
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="font-black text-white mb-4 sm:mb-6 leading-tight tracking-tight">
              From Invisible to
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-teal-300 to-cyan-300 animate-pulse">
                Unstoppable
              </span>
            </h2>
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-3 sm:mb-4">
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
              <p className="text-sm sm:text-xl text-blue-200 font-semibold px-3 py-1.5 sm:px-4 sm:py-2 bg-white/10 rounded-full backdrop-blur-sm border border-white/20">
                Ranked #1 in Just 60 Days
              </p>
              <div className="w-6 sm:w-12 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>
            <p className="text-blue-300/80 text-xs sm:text-sm font-medium">
              Real client • Real results • Real transformation
            </p>
          </div>

          {/* Mobile-Responsive 2-Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-start">

            {/* Left Column - Mobile-Responsive Google Listing Mockup */}
            <div className="space-y-4 sm:space-y-6">
              {/* Mobile-Responsive Google Search Interface */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 lg:p-8 border border-gray-100/50 transform hover:scale-[1.02] transition-all duration-500 animate-bounce-in backdrop-blur-sm">
                {/* Mobile-Responsive Google Search Bar */}
                <div className="flex items-center gap-2 sm:gap-4 p-3 sm:p-5 bg-gradient-to-r from-gray-50 to-gray-100 rounded-full mb-4 sm:mb-6 lg:mb-8 border border-gray-200/50 shadow-inner">
                  <div className="flex items-center gap-2 sm:gap-3 min-w-0 flex-1">
                    <div className="w-5 h-5 sm:w-7 sm:h-7 bg-gradient-to-r from-blue-500 via-red-500 via-yellow-500 to-green-500 rounded-full flex items-center justify-center shadow-lg">
                      <Search className="w-3 h-3 sm:w-4 sm:h-4 text-white" />
                    </div>
                    <span className="text-gray-800 font-semibold text-sm sm:text-base truncate">roofing company chicago</span>
                  </div>
                  <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition-all cursor-pointer group">
                    <Search className="w-4 h-4 sm:w-5 sm:h-5 text-white group-hover:animate-pulse" />
                  </div>
                </div>

                {/* Mobile-Responsive Search Results */}
                <div className="space-y-3 sm:space-y-4">
                  {/* #1 Result - Mobile-Responsive Design */}
                  <div className="relative p-4 sm:p-6 lg:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-r from-green-50/80 via-blue-50/80 to-teal-50/80 border-2 border-green-300/50 shadow-xl hover:shadow-2xl transition-all duration-500 group animate-slide-in-left backdrop-blur-sm">
                    {/* Mobile-Responsive Ranking Badge */}
                    <div className="absolute -top-2 -left-2 sm:-top-4 sm:-left-4 bg-gradient-to-r from-green-500 via-emerald-500 to-teal-500 text-white text-sm sm:text-base font-black px-3 py-1.5 sm:px-6 sm:py-3 rounded-full shadow-2xl animate-pulse border border-white sm:border-2">
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-base sm:text-xl">🏆</span>
                        <span>#1</span>
                      </div>
                    </div>

                    {/* Mobile-Responsive Ranking Up Indicator */}
                    <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-gradient-to-r from-yellow-400 to-orange-400 text-black text-xs sm:text-sm font-bold px-2 py-1 sm:px-4 sm:py-2 rounded-full shadow-2xl flex items-center gap-1 sm:gap-2 animate-bounce border border-white sm:border-2">
                      <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4" />
                      <span className="hidden sm:inline">RANKING UP!</span>
                      <span className="sm:hidden">UP!</span>
                    </div>

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-3 sm:mb-4">
                          <h3 className="font-black text-blue-900 text-lg sm:text-xl hover:text-blue-700 transition-colors cursor-pointer">Chicago Roofing Pros</h3>
                          <div className="flex items-center gap-1 sm:gap-2 bg-gradient-to-r from-green-100 to-emerald-100 px-2 py-1 sm:px-3 sm:py-2 rounded-full border border-green-200/50 w-fit">
                            <TrendingUp className="w-3 h-3 sm:w-4 sm:h-4 text-green-600 animate-pulse" />
                            <span className="text-xs font-black text-green-700 tracking-wide">OPTIMIZED</span>
                          </div>
                        </div>

                        <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                            ))}
                          </div>
                          <span className="text-sm sm:text-base font-bold text-gray-800">4.9 (347 reviews)</span>
                          <div className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full font-bold">
                            TOP RATED
                          </div>
                        </div>

                        {/* Premium divider */}
                        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent mb-3 sm:mb-4"></div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-8 text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">
                          <div className="flex items-center gap-2 hover:text-red-600 hover:bg-red-50 px-2 py-1 sm:px-3 sm:py-2 rounded-xl transition-all cursor-pointer group w-fit">
                            <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-red-500 group-hover:animate-bounce" />
                            <span className="font-semibold">Chicago, IL</span>
                          </div>
                          <div className="flex items-center gap-2 hover:text-green-600 hover:bg-green-50 px-2 py-1 sm:px-3 sm:py-2 rounded-xl transition-all cursor-pointer group w-fit">
                            <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 group-hover:animate-pulse" />
                            <span className="font-semibold">(312) 555-ROOF</span>
                          </div>
                        </div>

                        <div className="text-blue-600 font-bold text-sm sm:text-base mb-2 sm:mb-3 hover:underline cursor-pointer hover:text-blue-800 transition-colors">
                          chicagoroofingpros.com
                        </div>
                        <div className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-5">
                          Professional roofing services • Licensed & Insured • 24/7 Emergency Repairs
                        </div>

                        {/* Mobile-Responsive Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mt-3 sm:mt-5">
                          <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg shadow-blue-500/25 border border-blue-500/20">
                            📅 Book Now
                          </button>
                          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white text-xs sm:text-sm px-4 py-2 sm:px-5 sm:py-2.5 rounded-xl font-bold transition-all hover:scale-105 hover:shadow-lg shadow-green-500/25 border border-green-500/20">
                            📞 Call Now
                          </button>
                        </div>
                      </div>

                      {/* Mobile-Responsive Mini Map */}
                      <div className="w-20 h-16 sm:w-28 sm:h-24 bg-gradient-to-br from-green-100 via-blue-100 to-teal-100 rounded-xl sm:rounded-2xl border-2 border-gray-200/50 flex items-center justify-center shadow-xl hover:shadow-2xl transition-all cursor-pointer hover:scale-105 backdrop-blur-sm mx-auto sm:mx-0 flex-shrink-0">
                        <div className="relative">
                          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg border-2 border-white"></div>
                          <div className="absolute -top-1 -left-1 w-3 h-3 sm:w-4 sm:h-4 bg-red-600/50 rounded-full animate-ping"></div>
                          <div className="absolute top-4 left-1 sm:top-5 sm:left-2 text-xs sm:text-sm font-bold text-gray-600">📍</div>
                          <div className="absolute -top-1 -right-1 sm:-top-2 sm:-right-2 w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full animate-pulse"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Light gray dividers between results */}
                  <div className="w-full h-px bg-gray-100"></div>

                  {/* Mobile-Responsive Competitors */}
                  {[
                    { name: "Windy City Roofing", rating: "4.1", reviews: "67", position: 2 },
                    { name: "Chicago Roof Masters", rating: "3.9", reviews: "94", position: 3 },
                  ].map((competitor, index) => (
                    <div key={index}>
                      <div className="p-3 sm:p-4 rounded-xl bg-gray-50 border border-gray-200 opacity-60 hover:opacity-80 transition-opacity">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="bg-gray-400 text-white text-xs font-bold px-2 py-1 rounded">#{competitor.position}</span>
                          <h3 className="font-medium text-gray-700 text-xs sm:text-sm">{competitor.name}</h3>
                        </div>
                        <div className="flex items-center gap-2 mb-2">
                          <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`w-3 h-3 ${i < Math.floor(Number.parseFloat(competitor.rating))
                                  ? "fill-yellow-400 text-yellow-400"
                                  : "fill-gray-200 text-gray-200"
                                  }`}
                              />
                            ))}
                          </div>
                          <span className="text-xs text-gray-600">
                            {competitor.rating} ({competitor.reviews} reviews)
                          </span>
                        </div>
                        <div className="text-xs text-gray-500">Standard listing • Limited visibility</div>
                      </div>
                      {index < 1 && <div className="w-full h-px bg-gray-100 my-2 sm:my-3"></div>}
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Column - Mobile-Responsive Interactive Stats Dashboard */}
            <div className="space-y-4 sm:space-y-5">
              {/* Mobile-Responsive 2x2 Grid of Interactive Stat Cards */}
              <div className="grid grid-cols-2 gap-2 sm:gap-3">
                {[
                  {
                    icon: TrendingUp,
                    stat: "+410%",
                    label: "Website Traffic",
                    color: "from-blue-500 to-cyan-500",
                    glow: "hover:shadow-blue-500/30",
                    emoji: "📊",
                    description: "Organic visits"
                  },
                  {
                    icon: Target,
                    stat: "#1",
                    label: "Google Ranking",
                    color: "from-green-500 to-emerald-500",
                    glow: "hover:shadow-green-500/30",
                    emoji: "🥇",
                    description: "Maps position"
                  },
                  {
                    icon: Users,
                    stat: "+320%",
                    label: "Lead Forms",
                    color: "from-purple-500 to-pink-500",
                    glow: "hover:shadow-purple-500/30",
                    emoji: "📋",
                    description: "Submissions"
                  },
                  {
                    icon: Star,
                    stat: "4.9",
                    label: "GMB Rating",
                    color: "from-yellow-500 to-orange-500",
                    glow: "hover:shadow-yellow-500/30",
                    emoji: "⭐",
                    description: "Average score"
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`group bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-2xl p-3 sm:p-5 shadow-xl hover:shadow-2xl ${item.glow} transition-all duration-300 hover:scale-110 hover:-translate-y-2 cursor-pointer border border-white/50`}
                  >
                    <div className="text-center">
                      <div
                        className={`w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-br ${item.color} rounded-lg sm:rounded-xl flex items-center justify-center mx-auto mb-2 sm:mb-3 group-hover:scale-125 group-hover:rotate-12 transition-all duration-300 shadow-lg`}
                      >
                        <item.icon className="w-4 h-4 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="flex items-center justify-center gap-1 sm:gap-2 mb-1 sm:mb-2">
                        <span className="text-lg sm:text-2xl font-black text-gray-900 group-hover:text-blue-600 transition-colors count-up">
                          {item.stat}
                        </span>
                        <span className="text-sm sm:text-lg group-hover:animate-bounce">{item.emoji}</span>
                      </div>
                      <div className="text-xs text-gray-600 font-medium leading-tight mb-1">
                        {item.label}
                      </div>
                      <div className="text-xs text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                        {item.description}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile-Responsive 60-Day Transformation Dashboard */}
              <div className="bg-white/15 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/30 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="text-center mb-3 sm:mb-4">
                  <h3 className="text-white font-bold text-base sm:text-lg mb-1">60-Day Transformation</h3>
                  <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full mx-auto"></div>
                </div>
                <div className="space-y-3 sm:space-y-4">
                  {[
                    { label: "Monthly Revenue", value: "+285%", icon: "💰", arrow: "↗️" },
                    { label: "Phone Calls", value: "+450%", icon: "📞", arrow: "↗️" },
                    { label: "Booking Rate", value: "89%", icon: "📅", arrow: "↗️" }
                  ].map((metric, index) => (
                    <div key={index} className="flex items-center justify-between p-2 sm:p-3 bg-white/10 rounded-lg sm:rounded-xl hover:bg-white/20 transition-all cursor-pointer group">
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="text-base sm:text-lg">{metric.icon}</span>
                        <span className="text-blue-200 text-xs sm:text-sm font-medium">{metric.label}</span>
                      </div>
                      <div className="flex items-center gap-1 sm:gap-2">
                        <span className="text-white font-bold text-sm sm:text-lg group-hover:scale-110 transition-transform">
                          {metric.value}
                        </span>
                        <span className="text-green-400 text-xs sm:text-sm animate-bounce">{metric.arrow}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile-Responsive Premium Testimonial Card */}
              <div className="relative bg-gradient-to-r from-white/20 to-white/10 backdrop-blur-md rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/40 shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-[1.02]">
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="relative">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-xl border-2 border-white/30">
                      <span className="text-white font-black text-base sm:text-lg">MR</span>
                    </div>
                    {/* Premium verified badge */}
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center shadow-lg border-2 border-white">
                      <span className="text-white text-xs font-bold">✓</span>
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
                      <span className="font-black text-white text-sm sm:text-base">Mike Rodriguez</span>
                      <span className="text-blue-200 text-xs sm:text-sm">• Owner</span>
                    </div>
                    <div className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 text-xs px-2 py-1 sm:px-3 sm:py-1 rounded-full inline-block mb-2 sm:mb-3 font-bold border border-green-200/50">
                      ✅ Verified Customer
                    </div>
                    <blockquote className="text-blue-100 text-xs sm:text-sm italic leading-relaxed mb-2 sm:mb-3 font-medium">
                      &quot;From page 3 to #1 in 60 days. Our phone hasn&apos;t stopped ringing!&quot;
                    </blockquote>
                    <div className="flex items-center gap-2">
                      <div className="flex items-center gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-3 h-3 sm:w-4 sm:h-4 fill-yellow-400 text-yellow-400 drop-shadow-sm" />
                        ))}
                      </div>
                      <span className="text-blue-200 text-xs font-semibold">5.0</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clean Professional CTA Button */}
              <div className="text-center space-y-4">
                {/* Floating Success Badge - Positioned Above Button */}
                <div className="flex justify-center">
                  <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-black text-sm px-4 py-2 rounded-full font-bold shadow-lg border border-yellow-300/50 animate-pulse">
                    <div className="flex items-center gap-2">
                      <span className="text-base">🏆</span>
                      <span>500+ Success Stories</span>
                    </div>
                  </div>
                </div>

                {/* Mobile-Responsive Main CTA Button */}
                <div className="relative inline-block px-4">
                  <Button
                    size="lg"
                    className="group relative bg-gradient-to-r from-blue-600 to-teal-600 hover:from-blue-700 hover:to-teal-700 text-white font-bold px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-5 text-base sm:text-lg lg:text-xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 rounded-full border border-blue-400/30 overflow-hidden w-full max-w-[280px] sm:max-w-[320px] lg:max-w-[380px]"
                  >
                    {/* Subtle shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>

                    {/* Mobile-Responsive Button Content */}
                    <div className="relative flex items-center justify-center gap-2 sm:gap-3 lg:gap-4">
                      {/* Rocket Icon */}
                      <Rocket className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 group-hover:animate-bounce flex-shrink-0" />

                      {/* Button Text */}
                      <span className="font-bold tracking-wide text-center leading-tight">
                        <span className="hidden sm:inline">Let&apos;s Rank Your Business Next</span>
                        <span className="sm:hidden">Rank Your Business</span>
                      </span>

                      {/* Arrow Icon */}
                      <div className="flex items-center group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0">
                        <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                      </div>
                    </div>

                    {/* Subtle glow effect on hover */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400/0 to-teal-400/0 group-hover:from-blue-400/20 group-hover:to-teal-400/20 transition-all duration-300"></div>
                  </Button>
                </div>

                {/* Trust Indicator Below Button */}
                <div className="flex items-center justify-center gap-2 text-blue-200 text-sm">
                  <div className="flex items-center gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <span className="font-medium">Trusted by 500+ businesses</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Clean Modern SaaS Style */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/40 to-indigo-50/50 relative overflow-hidden">
        {/* Radial Background Effects with Bouncing Emojis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/10 rounded-full blur-3xl"></div>

          {/* Floating bouncing emojis */}
          <div className="absolute top-32 left-1/4 text-4xl opacity-20 animate-bounce">💬</div>
          <div className="absolute top-48 right-1/4 text-3xl opacity-20 animate-bounce delay-1000">⭐️</div>
          <div className="absolute bottom-32 left-1/3 text-3xl opacity-20 animate-bounce delay-500">📈</div>
          <div className="absolute bottom-48 right-1/3 text-4xl opacity-20 animate-bounce delay-1500">🚀</div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg mb-6">
              <span className="text-2xl">🌈</span>
              <span className="text-purple-800 font-bold">Loved by Local Businesses</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Real People, Real Results,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Real Happy</span>
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Don&apos;t just take our word for it—hear from the amazing businesses we&apos;ve helped dominate Google!
            </p>
          </div>

          <TestimonialCarousel />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-teal-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-bold text-white mb-4">Ready to Rank #1?</h2>
            <p className="text-base lg:text-xl text-blue-100 max-w-3xl mx-auto mb-8">
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
                San Jose&apos;s premier digital marketing agency specializing in getting businesses ranked #1 on Google.
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
