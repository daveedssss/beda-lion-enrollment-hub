
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";

const Login = () => {
  const [studentId, setStudentId] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate login process
    setTimeout(() => {
      if (studentId && password) {
        // Store student info in localStorage
        localStorage.setItem("studentId", studentId);
        localStorage.setItem("isLoggedIn", "true");
        
        toast({
          title: "Login Successful",
          description: "Welcome to your student portal!",
        });
        
        navigate("/dashboard");
      } else {
        toast({
          title: "Login Failed",
          description: "Please enter both Student ID and password.",
          variant: "destructive",
        });
      }
      setIsLoading(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Link to="/" className="inline-flex items-center text-white mb-6 hover:text-red-200 transition-colors">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Home
        </Link>
        
        <Card className="shadow-2xl border-0">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              <img 
                src="/lovable-uploads/e45082fd-7242-437a-b022-82ecf62b8932.png" 
                alt="San Beda Lion" 
                className="w-20 h-20"
              />
            </div>
            <CardTitle className="text-2xl font-bold text-gray-900">Student Portal</CardTitle>
            <CardDescription className="text-gray-600">
              Sign in to access your academic information
            </CardDescription>
          </CardHeader>
          
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">
                  Student ID
                </Label>
                <Input
                  id="studentId"
                  type="text"
                  placeholder="Enter your Student ID"
                  value={studentId}
                  onChange={(e) => setStudentId(e.target.value)}
                  className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 pr-10"
                    required
                  />
                  <Button
                    type="button"
                    variant="ghost"
                    size="sm"
                    className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-4 w-4 text-gray-400" />
                    ) : (
                      <Eye className="h-4 w-4 text-gray-400" />
                    )}
                  </Button>
                </div>
              </div>
              
              <Button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded-md transition-colors"
                disabled={isLoading}
              >
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
            
            <div className="mt-6 text-center">
              <a href="#" className="text-red-600 hover:text-red-700 text-sm font-medium">
                Forgot your password?
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Login;
