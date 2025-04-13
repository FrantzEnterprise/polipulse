import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function PoliPulseApp() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">
        PoliPulse - Civic Action Hub (Live)
      </h1>

      <Tabs defaultValue="challenges" className="w-full">
        <TabsList className="grid grid-cols-2 w-full mb-4">
          <TabsTrigger value="challenges">Challenges</TabsTrigger>
          <TabsTrigger value="community">Community</TabsTrigger>
        </TabsList>

        <TabsContent value="challenges">
          <div className="space-y-4">
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <span className="text-lg font-medium">Sign a Petition</span>
                <Button>+50 pts</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-4 flex items-center justify-between">
                <span className="text-lg font-medium">Daily Quiz</span>
                <Button>+20 pts</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="community">
          <Card>
            <CardContent className="p-4">
              <p className="text-gray-700">
                Welcome to the PoliPulse community! 🎉
              </p>
              <p className="text-sm text-gray-500 mt-2">
                More features coming soon.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}