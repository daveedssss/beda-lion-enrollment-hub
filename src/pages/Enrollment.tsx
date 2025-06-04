
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Send } from "lucide-react";

const Enrollment = () => {
  const [formData, setFormData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    phoneNumber: "",
    program: "",
    yearLevel: "",
    semester: "",
    subjects: "",
    reason: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Enrollment Request Submitted",
        description: "Your enrollment request has been successfully submitted. You will receive a confirmation email shortly.",
      });
      
      // Reset form
      setFormData({
        studentName: "",
        studentId: "",
        email: "",
        phoneNumber: "",
        program: "",
        yearLevel: "",
        semester: "",
        subjects: "",
        reason: ""
      });
      
      setIsSubmitting(false);
      
      // Redirect back to dashboard after 2 seconds
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center space-x-4">
            <Link to="/dashboard" className="inline-flex items-center text-red-600 hover:text-red-700 transition-colors">
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
            <img 
              src="/lovable-uploads/e8bac684-4f31-4311-bbb9-aab37e24eaa6.png" 
              alt="San Beda College Alabang" 
              className="h-12 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-2xl mx-auto">
          <Card className="shadow-lg">
            <CardHeader className="text-center pb-6">
              <div className="flex justify-center mb-4">
                <img 
                  src="/lovable-uploads/e45082fd-7242-437a-b022-82ecf62b8932.png" 
                  alt="San Beda Lion" 
                  className="w-16 h-16"
                />
              </div>
              <CardTitle className="text-3xl font-bold text-gray-900">Enrollment Request</CardTitle>
              <CardDescription className="text-gray-600">
                Fill out the form below to submit your enrollment request
              </CardDescription>
            </CardHeader>
            
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="studentName" className="text-sm font-medium text-gray-700">
                      Full Name *
                    </Label>
                    <Input
                      id="studentName"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.studentName}
                      onChange={(e) => handleInputChange("studentName", e.target.value)}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="studentId" className="text-sm font-medium text-gray-700">
                      Student ID *
                    </Label>
                    <Input
                      id="studentId"
                      type="text"
                      placeholder="Enter your Student ID"
                      value={formData.studentId}
                      onChange={(e) => handleInputChange("studentId", e.target.value)}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber" className="text-sm font-medium text-gray-700">
                      Phone Number *
                    </Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Enter your phone number"
                      value={formData.phoneNumber}
                      onChange={(e) => handleInputChange("phoneNumber", e.target.value)}
                      className="border-gray-300 focus:border-red-500 focus:ring-red-500"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="program" className="text-sm font-medium text-gray-700">
                      Program *
                    </Label>
                    <Select value={formData.program} onValueChange={(value) => handleInputChange("program", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Select program" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="computer-science">Computer Science</SelectItem>
                        <SelectItem value="business-admin">Business Administration</SelectItem>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="education">Education</SelectItem>
                        <SelectItem value="psychology">Psychology</SelectItem>
                        <SelectItem value="nursing">Nursing</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="yearLevel" className="text-sm font-medium text-gray-700">
                      Year Level *
                    </Label>
                    <Select value={formData.yearLevel} onValueChange={(value) => handleInputChange("yearLevel", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Select year" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st-year">1st Year</SelectItem>
                        <SelectItem value="2nd-year">2nd Year</SelectItem>
                        <SelectItem value="3rd-year">3rd Year</SelectItem>
                        <SelectItem value="4th-year">4th Year</SelectItem>
                        <SelectItem value="graduate">Graduate</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="semester" className="text-sm font-medium text-gray-700">
                      Semester *
                    </Label>
                    <Select value={formData.semester} onValueChange={(value) => handleInputChange("semester", value)}>
                      <SelectTrigger className="border-gray-300 focus:border-red-500 focus:ring-red-500">
                        <SelectValue placeholder="Select semester" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1st-semester">1st Semester</SelectItem>
                        <SelectItem value="2nd-semester">2nd Semester</SelectItem>
                        <SelectItem value="summer">Summer</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="subjects" className="text-sm font-medium text-gray-700">
                    Subjects to Enroll
                  </Label>
                  <Textarea
                    id="subjects"
                    placeholder="List the subjects you want to enroll in (optional)"
                    value={formData.subjects}
                    onChange={(e) => handleInputChange("subjects", e.target.value)}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-24 resize-none"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reason" className="text-sm font-medium text-gray-700">
                    Reason for Enrollment Request
                  </Label>
                  <Textarea
                    id="reason"
                    placeholder="Please explain the reason for your enrollment request..."
                    value={formData.reason}
                    onChange={(e) => handleInputChange("reason", e.target.value)}
                    className="border-gray-300 focus:border-red-500 focus:ring-red-500 h-32 resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-4 rounded-md transition-colors"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting Request..."
                  ) : (
                    <>
                      <Send className="w-4 h-4 mr-2" />
                      Submit Enrollment Request
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Enrollment;
