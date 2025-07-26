"use client"

import React from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
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
      {/* Testimonials Grid - Equal Height Cards */}
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className="group opacity-0 animate-fade-in-up"
            style={{
              animationDelay: `${index * 150}ms`
            }}
          >
            {/* Consistent Card Design with Subtle Color */}
            <div className={`h-full ${testimonial.bgColor} backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] border border-white/50 flex flex-col`}>

              {/* Star Rating - Top */}
              <div className="flex items-center justify-center gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Quote Text - Center Aligned */}
              <div className="flex-1 flex items-center mb-8">
                <blockquote className="text-gray-700 text-lg leading-relaxed text-center relative">
                  <span className="text-4xl text-blue-200 absolute -top-2 -left-2 font-serif">&quot;</span>
                  <span className="relative z-10">{testimonial.quote}</span>
                  <span className="text-4xl text-blue-200 absolute -bottom-6 -right-2 font-serif">&quot;</span>
                </blockquote>
              </div>

              {/* Profile - Bottom */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                <div className="w-14 h-14 rounded-full overflow-hidden shadow-md border-2 border-white flex-shrink-0">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to generated avatar if image fails
                      const target = e.target as HTMLImageElement;
                      target.src = getImageUrl(testimonial.name);
                    }}
                  />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900 text-base">{testimonial.name}</div>
                  <div className="text-gray-600 text-sm">{testimonial.title}</div>
                </div>
              </div>
            </div>
          </div>
        ))}
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

      {/* Website Builder Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-blue-50 relative overflow-hidden">
        {/* Enhanced Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-10 right-20 w-72 h-72 bg-gradient-to-r from-blue-200/20 to-purple-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-indigo-200/20 to-teal-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-pink-100/10 to-yellow-100/10 rounded-full blur-3xl animate-pulse delay-2000"></div>
          
          {/* Floating abstract shapes */}
          <div className="absolute top-32 left-1/4 w-16 h-16 bg-gradient-to-r from-blue-300/20 to-teal-300/20 rounded-2xl rotate-45 animate-float"></div>
          <div className="absolute bottom-32 right-1/4 w-12 h-12 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full animate-float delay-1000"></div>
          <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-gradient-to-r from-yellow-300/20 to-orange-300/20 rounded-lg rotate-12 animate-float delay-2000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Side - Pitch Content */}
            <div className="space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-500 to-teal-500 text-white px-8 py-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105">
                  <span className="text-2xl">⚡</span>
                  <span className="font-bold text-lg">Lightning-Fast Websites</span>
                </div>
                <h2 className="text-3xl lg:text-5xl font-black text-gray-900 leading-tight">
                  Your Dream Website,<br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600">Ready in 7 Days</span>
                </h2>
                <p className="text-base lg:text-xl text-gray-600 leading-relaxed">
                  Get a lightning-fast, SEO-optimized website that ranks on Google from day one. Built specifically for local businesses who want to dominate their competition!
                </p>
              </div>

              {/* Enhanced Benefits List */}
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { icon: Search, text: "SEO Optimized Structure", desc: "Built for Google rankings", color: "from-blue-500 to-blue-600" },
                  { icon: Phone, text: "Mobile-First Design", desc: "Perfect on all devices", color: "from-green-500 to-green-600" },
                  { icon: Zap, text: "Lightning Fast Loading", desc: "Under 2 second load times", color: "from-yellow-500 to-orange-500" },
                  { icon: MapPin, text: "GMB Compatible", desc: "Syncs with Google My Business", color: "from-purple-500 to-purple-600" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="group flex items-start gap-4 p-6 bg-white/80 backdrop-blur-sm rounded-2xl border border-gray-200/50 hover:shadow-xl hover:scale-105 transition-all duration-300 hover:bg-white/90"
                  >
                    <div className={`w-14 h-14 bg-gradient-to-br ${benefit.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900 text-base mb-1">{benefit.text}</div>
                      <div className="text-sm text-gray-600">{benefit.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* High-Conversion SaaS CTA Button */}
              <div className="space-y-4">
                <Button size="lg" className="group relative bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-16 py-7 text-2xl font-black shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 rounded-xl border-0 hover:saas-glow">
                  {/* Content */}
                  <div className="flex items-center justify-center gap-4">
                    <Rocket className="h-8 w-8 group-hover:animate-pulse transition-all duration-300" />
                    <span className="tracking-normal font-black">Get My Website Now</span>
                  </div>
                  
                  {/* Subtle highlight overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/5 to-white/10 rounded-xl pointer-events-none"></div>
                </Button>
                
                {/* Trust Badge */}
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">Trusted by 500+ local businesses</span>
                </div>
              </div>
            </div>

            {/* Right Side - Enhanced Website Preview */}
            <div className="relative max-w-xl mx-auto lg:max-w-none">
              {/* Premium Realistic Website Mockup */}
              <div className="bg-white rounded-3xl shadow-2xl ring-1 ring-gray-200/50 overflow-hidden transition-all duration-500 hover:shadow-3xl hover:ring-2 hover:ring-blue-200/50 group w-full max-w-xl">
                {/* Enhanced Browser Header */}
                <div className="bg-gradient-to-r from-gray-50 to-gray-100 px-6 py-4 flex items-center gap-4 border-b border-gray-200/50">
                  <div className="flex gap-2">
                    <div className="w-3.5 h-3.5 bg-red-500 rounded-full shadow-sm"></div>
                    <div className="w-3.5 h-3.5 bg-yellow-500 rounded-full shadow-sm"></div>
                    <div className="w-3.5 h-3.5 bg-green-500 rounded-full shadow-sm"></div>
                  </div>
                  <div className="flex-1 bg-white rounded-lg px-4 py-2.5 text-sm text-gray-700 border border-gray-200 shadow-inner font-mono">
                    🔒 https://eliteplumbingpros.com
                  </div>
                </div>

                {/* Website Content - Professional Layout */}
                <div className="bg-white font-sans">
                  {/* Professional Navigation Bar */}
                  <div className="bg-white px-8 py-5 border-b border-gray-100 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-gradient-to-br from-blue-600 to-teal-600 rounded-xl flex items-center justify-center shadow-lg">
                        <span className="text-white font-bold text-lg">🔧</span>
                      </div>
                      <span className="font-bold text-gray-900 text-lg tracking-tight">Elite Plumbing Pros</span>
                    </div>
                    <div className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200 hover:shadow-xl">
                      Call Now
                    </div>
                  </div>

                  {/* Hero Section with Background */}
                  <div className="px-8 py-10 bg-gradient-to-br from-blue-600 via-blue-700 to-teal-600 text-white relative overflow-hidden">
                    {/* Subtle background pattern */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-transparent"></div>
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-16 translate-x-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full translate-y-12 -translate-x-12"></div>
                    
                    <div className="relative text-center space-y-5">
                      <h1 className="text-2xl font-bold leading-tight tracking-tight">San Jose&apos;s #1 Plumbing Service</h1>
                      <p className="text-blue-100 text-base font-medium">24/7 Emergency Repairs • Licensed & Insured</p>
                      <div className="flex items-center justify-center gap-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300 drop-shadow-sm" />
                        ))}
                        <span className="text-white font-semibold text-base ml-2">4.9/5 (247 reviews)</span>
                      </div>
                      <div className="bg-white hover:bg-gray-50 text-blue-700 px-8 py-4 rounded-2xl font-bold text-base inline-block mt-6 shadow-xl hover:shadow-2xl transition-all duration-200 hover:scale-105 cursor-pointer">
                        📞 Get Free Quote Today
                      </div>
                    </div>
                  </div>

                  {/* Services Grid with Background */}
                  <div className="px-8 py-8 bg-gradient-to-br from-gray-50 to-blue-50/30 relative">
                    {/* Background image placeholder */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-transparent"></div>
                    <div className="relative">
                      <h3 className="text-lg font-bold text-gray-900 text-center mb-6 tracking-tight">Our Expert Services</h3>
                      <div className="grid grid-cols-3 gap-4">
                        {[
                          { name: "Emergency Repairs", icon: "🔧", color: "from-red-500 to-red-600" },
                          { name: "New Installs", icon: "🚿", color: "from-blue-500 to-blue-600" },
                          { name: "Drain Cleaning", icon: "🌊", color: "from-teal-500 to-teal-600" },
                        ].map((service, index) => (
                          <div key={index} className="bg-white rounded-2xl p-4 text-center shadow-lg border border-gray-100/50 hover:shadow-xl transition-all duration-200 hover:scale-105">
                            <div className={`w-10 h-10 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-lg`}>
                              <span className="text-white text-base">{service.icon}</span>
                            </div>
                            <div className="text-sm font-semibold text-gray-800 leading-tight">{service.name}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Professional Testimonial */}
                  <div className="px-8 py-6 bg-white border-t border-gray-100">
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border border-green-100/50 shadow-sm">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-full flex items-center justify-center shadow-lg flex-shrink-0">
                          <span className="text-white text-lg font-semibold">M</span>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <div className="text-base font-bold text-gray-900">Mike Rodriguez</div>
                            <div className="flex items-center gap-1">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                              ))}
                            </div>
                          </div>
                          <div className="text-sm text-gray-600 font-medium">Verified Customer • San Jose</div>
                        </div>
                      </div>
                      <blockquote className="text-gray-800 font-medium leading-relaxed relative">
                        <span className="text-2xl text-green-300 absolute -top-2 -left-1">&quot;</span>
                        <span className="relative">Fixed my emergency leak in 30 minutes! Professional, affordable, and they even cleaned up after. Highly recommend!</span>
                        <span className="text-2xl text-green-300 absolute -bottom-4 -right-1">&quot;</span>
                      </blockquote>
                    </div>
                  </div>

                  {/* Professional Contact Footer */}
                  <div className="px-8 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                          <Phone className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">(408) 555-PIPE</div>
                          <div className="text-xs text-gray-300">24/7 Emergency</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-teal-600 rounded-lg flex items-center justify-center">
                          <MapPin className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="text-sm font-bold">San Jose, CA</div>
                          <div className="text-xs text-gray-300">Licensed & Insured</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Hover Tooltip */}
                <div className="absolute top-16 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
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
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg mb-6">
              <span className="text-2xl">⚡️</span>
              <span className="text-indigo-800 font-bold">Everything You Need</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              Complete Digital Domination,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">All Under One Roof</span>
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From blazing-fast websites to premium link building—we&apos;ve got everything you need to crush your competition and dominate your market!
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
            <div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-3 rounded-full border border-white/50 shadow-lg mb-6">
              <span className="text-2xl">🏆</span>
              <span className="text-green-800 font-bold">Success Spotlight</span>
            </div>
            <h2 className="text-3xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight">
              From Invisible to Unstoppable,<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600">Page 3 to #1 in 60 Days!</span>
            </h2>
            <p className="text-base lg:text-xl text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              Watch how we transformed Chicago Roofing Pros from Google&apos;s graveyard to the top spot—and how we can do the same for you!
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
                &quot;We were buried on page 3 before Lead Ranked stepped in. Now we&apos;re not just #1 on Google Maps – we&apos;re
                booked solid for months! Our phone hasn&apos;t stopped ringing.&quot;
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

      {/* Testimonials Section - Clean Modern SaaS Style */}
      <section id="testimonials" className="py-20 bg-gradient-to-br from-gray-50 via-blue-50/30 to-indigo-50/40 relative overflow-hidden">
        {/* Radial Background Effects with Bouncing Emojis */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-400/5 rounded-full blur-3xl"></div>

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
            <h2 className="text-2xl lg:text-4xl font-bold text-white mb-4">Ready to Rank #1?</h2>
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
