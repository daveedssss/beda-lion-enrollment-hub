
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { GraduationCap, Users, Award, BookOpen } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-red-50">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/e8bac684-4f31-4311-bbb9-aab37e24eaa6.png" 
                alt="San Beda College Alabang" 
                className="h-16 w-auto"
              />
            </div>
            <Link to="/login">
              <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-2">
                Student Portal
              </Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Excellence in
              <span className="text-red-600 block">Education</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              San Beda College Alabang continues the Benedictine tradition of academic excellence, 
              character formation, and service to society.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/login">
                <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 text-lg font-semibold">
                  Access Student Portal
                </Button>
              </Link>
              <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3 text-lg font-semibold">
                Learn More
              </Button>
            </div>
          </div>
          <div className="flex justify-center">
            <img 
              src="/lovable-uploads/e45082fd-7242-437a-b022-82ecf62b8932.png" 
              alt="San Beda Lion" 
              className="w-80 h-80 object-contain animate-pulse"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose San Beda College Alabang?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <GraduationCap className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Academic Excellence</h3>
              <p className="text-gray-600">Rigorous academic programs that prepare students for success.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Users className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Community</h3>
              <p className="text-gray-600">A close-knit community that fosters growth and collaboration.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <Award className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Recognition</h3>
              <p className="text-gray-600">Award-winning programs and nationally recognized achievements.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Innovation</h3>
              <p className="text-gray-600">Modern facilities and cutting-edge learning technologies.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center mb-4">
            <img 
              src="/lovable-uploads/ceb95f6e-17ae-42e4-a019-6a3e53a316b6.png" 
              alt="San Beda College Alabang Seal" 
              className="h-16 w-16"
            />
          </div>
          <p className="text-gray-400">
            © 2024 San Beda College Alabang. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
