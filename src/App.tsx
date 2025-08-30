import React from 'react';
import { Server, Users, Zap, Shield, Star, CheckCircle, ArrowRight, Play, Video, LogIn, UserPlus } from 'lucide-react';
import LoginModal from './components/LoginModal';

function App() {
  const [showLogin, setShowLogin] = React.useState(false);

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-md border-b border-green-800/30 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-green-600 rounded-lg flex items-center justify-center">
                <Server className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-green-600 to-lime-500 bg-clip-text text-transparent">
                VoxelHost
              </span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-300 hover:text-green-400 transition-colors">Features</a>
              <a href="#plans" className="text-gray-300 hover:text-green-400 transition-colors">Plans</a>
              <a href="#about" className="text-gray-300 hover:text-green-400 transition-colors">About</a>
              <button 
                onClick={() => setShowLogin(true)}
                className="flex items-center space-x-2 text-gray-300 hover:text-green-400 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span>Login</span>
              </button>
              <button className="bg-gradient-to-r from-green-500 to-lime-500 text-white px-6 py-2 rounded-full hover:from-green-600 hover:to-lime-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-green-900/20 to-gray-900">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-lime-600/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-green-400 via-lime-400 to-green-400 bg-clip-text text-transparent">
                Free Minecraft
              </span>
              <br />
              <span className="text-white">Server Hosting</span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto leading-relaxed">
              Host your Minecraft server completely free with VoxelHost. Servers located in Hungary 
              for optimal European connectivity.
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto">
              No hidden costs, no time limits, just pure gaming freedom for you and your friends.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="group bg-gradient-to-r from-green-500 to-lime-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center space-x-2">
                <span>Start Hosting Now</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors">
                <Play className="w-5 h-5" />
                <span className="font-semibold">Watch Demo</span>
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-900 to-transparent"></div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Why Choose <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">VoxelHost</span>?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Experience the best free Minecraft hosting with premium features and zero compromises.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "High-performance servers in Hungary with minimal latency for European players."
              },
              {
                icon: Shield,
                title: "100% Secure",
                description: "Advanced DDoS protection and secure infrastructure to keep your server safe 24/7."
              },
              {
                icon: Users,
                title: "Multiple Players",
                description: "Support for up to 20 players on free plan, 50 players on SMP plan."
              },
              {
                icon: Star,
                title: "24/7 Uptime",
                description: "Reliable hosting with exceptional uptime. Your server stays online when you need it."
              }
            ].map((feature, index) => (
              <div key={index} className="group p-6 rounded-2xl bg-gradient-to-br from-gray-800 to-green-900/30 hover:from-gray-700 hover:to-green-800/40 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-green-800/30">
                <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-lime-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans Section */}
      <section id="plans" className="py-20 bg-gradient-to-br from-gray-800 to-green-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
              Choose Your <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">Free Plan</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Both plans are completely free forever. Pick the one that fits your needs best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Free Plan */}
            <div className="relative p-8 rounded-3xl bg-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-green-700/30">
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">Free Hosting</h3>
                <div className="text-5xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent mb-2">
                  $0
                </div>
                <p className="text-gray-400">Forever free, no strings attached</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "24/7 server uptime",
                  "Up to 20 players",
                  "Full mod support", 
                  "Custom world uploads",
                  "Hungary server location",
                  "24/7 technical support",
                  "DDoS protection included"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="w-full bg-gradient-to-r from-green-500 to-lime-500 text-white py-4 rounded-2xl font-semibold hover:from-green-600 hover:to-lime-600 transition-all duration-300 shadow-lg hover:shadow-xl">
                Get Started Free
              </button>
            </div>

            {/* Free SMP Plan */}
            <div className="relative p-8 rounded-3xl bg-gradient-to-br from-green-500 to-lime-500 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 text-white">
              <div className="absolute top-4 right-4 bg-white/20 text-white px-3 py-1 rounded-full text-sm font-semibold">
                Popular
              </div>
              
              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold mb-2">Free SMP</h3>
                <div className="text-5xl font-bold mb-2">$0</div>
                <p className="text-green-100">Enhanced features for content creators</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  "Everything in Free plan",
                  "Up to 50 players",
                  "Advanced plugins included",
                  "Priority Hungary servers",
                  "Enhanced performance",
                  "Dedicated support channel"
                ].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-white flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="bg-white/10 rounded-xl p-4 mb-6 border border-white/20">
                <div className="flex items-start space-x-3">
                  <Video className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-yellow-100 text-sm">Video Requirement</p>
                    <p className="text-green-100 text-sm">Include "VoxelHost" in your server videos to qualify for this plan</p>
                  </div>
                </div>
              </div>
              
              <button className="w-full bg-white text-green-600 py-4 rounded-2xl font-semibold hover:bg-green-50 transition-all duration-300 shadow-lg hover:shadow-xl">
                Start SMP Hosting
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Built for the <span className="bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">Minecraft Community</span>
              </h2>
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                VoxelHost was created by Minecraft enthusiasts who understand the frustration of expensive hosting services. 
                We believe every player should have access to quality server hosting, regardless of budget.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our mission is simple: provide completely free, reliable Minecraft server hosting that rivals 
                premium services. All servers are hosted in Hungary for optimal European connectivity.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-lime-900/30 border border-green-700/30">
                  <div className="text-3xl font-bold text-green-400">99.9%</div>
                  <div className="text-gray-300">Uptime</div>
                </div>
                <div className="text-center p-4 rounded-xl bg-gradient-to-br from-green-900/30 to-lime-900/30 border border-green-700/30">
                  <div className="text-3xl font-bold text-green-400">10K+</div>
                  <div className="text-gray-300">Servers Hosted</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-lime-400 rounded-3xl blur-xl opacity-20"></div>
              <div className="relative bg-gradient-to-br from-green-500 to-lime-500 rounded-3xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Why We're Different</h3>
                <ul className="space-y-4">
                  {[
                    "Truly free - no credit card required",
                    "Instant server deployment in seconds", 
                    "Full control panel access",
                    "Custom domain support",
                    "Automated backups included"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-lime-200" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-green-600 via-lime-500 to-green-600">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Start Your Server?
          </h2>
          <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
            Join thousands of players who trust VoxelHost for their Minecraft hosting needs. 
            Setup takes less than 2 minutes.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="group bg-white text-green-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 flex items-center justify-center space-x-2">
              <span>Create Free Server</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-green-600 transition-all duration-300 flex items-center justify-center space-x-2">
              <span>View Documentation</span>
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-green-600 rounded-lg flex items-center justify-center">
                  <Server className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-green-400 to-lime-400 bg-clip-text text-transparent">
                  VoxelHost
                </span>
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                Free Minecraft server hosting for everyone. Built by gamers, for gamers.
              </p>
              <div className="flex space-x-4">
                {['Discord', 'Twitter', 'YouTube'].map((social) => (
                  <a key={social} href="#" className="text-gray-400 hover:text-green-400 transition-colors">
                    {social}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Support</h4>
              <ul className="space-y-2">
                {['Documentation', 'Community Forum', 'Discord Support', 'FAQ'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-green-400">Company</h4>
              <ul className="space-y-2">
                {['About Us', 'Terms of Service', 'Privacy Policy', 'Contact'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">{item}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 VoxelHost. All rights reserved. Made with ❤️ for the Minecraft community.
            </p>
          </div>
        </div>
      </footer>

      {/* Login Modal */}
      <LoginModal isOpen={showLogin} onClose={() => setShowLogin(false)} />
    </div>
  );
}

export default App;