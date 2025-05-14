
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/sonner";
import { MessageCircle } from "lucide-react";

const Index = () => {
  const handleShowToast = () => {
    toast("Preview is working!", {
      description: "If you can see this toast, your preview is functioning correctly.",
    });
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/your-number-here", "_blank");
    toast("WhatsApp button clicked!", {
      description: "Opening WhatsApp chat...",
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
          <Button onClick={handleWhatsAppClick} className="w-full bg-green-500 hover:bg-green-600 mb-2">
            <MessageCircle className="mr-2" /> Contact on WhatsApp
          </Button>
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
