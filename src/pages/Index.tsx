
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";

const Index = () => {
  const handleShowToast = () => {
    toast("Preview is working!", {
      description: "If you can see this toast, your preview is functioning correctly.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl font-bold">Welcome to Your Project</CardTitle>
          <CardDescription>This is your project's landing page</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 mb-4">
            If you can see this content, your preview is working correctly!
          </p>
        </CardContent>
        <CardFooter>
          <Button onClick={handleShowToast} className="w-full">
            Test Preview
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Index;
