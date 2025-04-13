import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./components/ui/tabs";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function PoliPulseApp() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight text-blue-700">
            🗳️ PoliPulse — Civic Action Hub
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Engage with politics through daily actions and community involvement.
          </p>
        </header>

        <Tabs defaultValue="challenges" className="w-full">
          <TabsList className="flex justify-center gap-6 border-b pb-2 mb-6">
            <TabsTrigger value="challenges" className="text-lg font-medium text-gray-700 hover:text-blue-600">Challenges</TabsTrigger>
            <TabsTrigger value="community" className="text-lg font-medium text-gray-700 hover:text-blue-600">Community</TabsTrigger>
          </TabsList>

          <TabsContent value="challenges">
            <div className="grid gap-6 sm:grid-cols-2">
              <Card>
                <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
                  <span className="text-xl font-semibold text-gray-800">Sign a Petition</span>
                  <Button>+50 pts</Button>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex flex-col gap-4 items-center text-center">
                  <span className="text-xl font-semibold text-gray-800">Daily Quiz</span>
                  <Button>+20 pts</Button>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="community">
            <Card>
              <CardContent className="p-6 text-center">
                <p className="text-lg text-gray-700 mb-2">
                  🎉 Welcome to the PoliPulse community!
                </p>
                <p className="text-sm text-gray-500">
                  Connect with others, share events, and help shape your community.
                </p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
