
import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LogOut, User, BookOpen, Calendar } from "lucide-react";

const Dashboard = () => {
  const [studentId, setStudentId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    const storedStudentId = localStorage.getItem("studentId");
    
    if (!isLoggedIn || !storedStudentId) {
      navigate("/login");
    } else {
      setStudentId(storedStudentId);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("studentId");
    navigate("/");
  };

  // Sample grades data
  const grades = [
    { subject: "Mathematics", code: "MATH101", units: 3, grade: "A", gpa: 4.0, semester: "1st Sem" },
    { subject: "English Literature", code: "ENG102", units: 3, grade: "A-", gpa: 3.7, semester: "1st Sem" },
    { subject: "Computer Science", code: "CS201", units: 4, grade: "B+", gpa: 3.3, semester: "1st Sem" },
    { subject: "Physics", code: "PHYS101", units: 3, grade: "B", gpa: 3.0, semester: "1st Sem" },
    { subject: "Philosophy", code: "PHIL101", units: 2, grade: "A", gpa: 4.0, semester: "1st Sem" },
    { subject: "History", code: "HIST102", units: 3, grade: "B+", gpa: 3.3, semester: "2nd Sem" },
  ];

  const currentSemesterGrades = grades.filter(g => g.semester === "1st Sem");
  const overallGPA = (grades.reduce((sum, grade) => sum + (grade.gpa * grade.units), 0) / grades.reduce((sum, grade) => sum + grade.units, 0)).toFixed(2);

  const getGradeColor = (grade: string) => {
    if (grade.startsWith("A")) return "bg-green-100 text-green-800";
    if (grade.startsWith("B")) return "bg-blue-100 text-blue-800";
    if (grade.startsWith("C")) return "bg-yellow-100 text-yellow-800";
    return "bg-red-100 text-red-800";
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b-4 border-red-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <img 
                src="/lovable-uploads/e8bac684-4f31-4311-bbb9-aab37e24eaa6.png" 
                alt="San Beda College Alabang" 
                className="h-12 w-auto"
              />
              <div>
                <h1 className="text-xl font-bold text-gray-900">Student Dashboard</h1>
                <p className="text-sm text-gray-600">Student ID: {studentId}</p>
              </div>
            </div>
            <Button onClick={handleLogout} variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <User className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Student ID</p>
                  <p className="text-2xl font-bold text-gray-900">{studentId}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <BookOpen className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Overall GPA</p>
                  <p className="text-2xl font-bold text-gray-900">{overallGPA}</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <Calendar className="w-8 h-8 text-red-600" />
                <div>
                  <p className="text-sm font-medium text-gray-600">Current Semester</p>
                  <p className="text-2xl font-bold text-gray-900">1st Sem</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 flex items-center justify-center">
                  <img 
                    src="/lovable-uploads/e45082fd-7242-437a-b022-82ecf62b8932.png" 
                    alt="Lion" 
                    className="w-8 h-8"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Units</p>
                  <p className="text-2xl font-bold text-gray-900">{grades.reduce((sum, grade) => sum + grade.units, 0)}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Grades Table */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-gray-900">Academic Performance</CardTitle>
            <CardDescription>
              Your grades for the current academic year
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-semibold">Subject</TableHead>
                  <TableHead className="font-semibold">Code</TableHead>
                  <TableHead className="font-semibold">Units</TableHead>
                  <TableHead className="font-semibold">Grade</TableHead>
                  <TableHead className="font-semibold">GPA</TableHead>
                  <TableHead className="font-semibold">Semester</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {grades.map((grade, index) => (
                  <TableRow key={index} className="hover:bg-gray-50">
                    <TableCell className="font-medium">{grade.subject}</TableCell>
                    <TableCell className="text-gray-600">{grade.code}</TableCell>
                    <TableCell>{grade.units}</TableCell>
                    <TableCell>
                      <Badge className={getGradeColor(grade.grade)}>
                        {grade.grade}
                      </Badge>
                    </TableCell>
                    <TableCell className="font-medium">{grade.gpa}</TableCell>
                    <TableCell className="text-gray-600">{grade.semester}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        {/* Enroll Now Button */}
        <div className="fixed bottom-6 left-6">
          <Link to="/enrollment">
            <Button className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
              Enroll Now
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
