// Rebuild trigger: verifying challenge card update

import React, { useState } from "react";
import { Card, CardContent } from "./components/ui/card";
import { Button } from "./components/ui/button";

export default function PoliPulseApp() {
  const [activeTab, setActiveTab] = useState("challenges");
  const [posts, setPosts] = useState([
    { id: 1, user: 12345, content: "Excited to join PoliPulse! 🎉", timestamp: "Just now" },
    { id: 2, user: 12346, content: "Don’t forget to vote next Tuesday! 🗳️", timestamp: "2h ago" }
  ]);
  const [newPost, setNewPost] = useState("");
  const [points, setPoints] = useState(70);
  const [toast, setToast] = useState(null);

  const handlePost = () => {
    if (!newPost.trim()) return;
    const nextUser = 12345 + posts.length;
    const newEntry = {
      id: Date.now(),
      user: nextUser,
      content: newPost,
      timestamp: new Date().toLocaleString()
    };
    setPosts([newEntry, ...posts]);
    setNewPost("");
    showToast("📝 Post submitted");
  };

  const showToast = (message) => {
    setToast(message);
    setTimeout(() => setToast(null), 3000);
  };

  const handleClaimPoints = (amount) => {
    setPoints(points + amount);
    showToast(`✅ +${amount} points added!`);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <header className="mb-8 text-center">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-blue-700">
            🗳️ PoliPulse — Civic Action Hub
          </h1>
          <p className="mt-2 text-base sm:text-lg text-gray-600">
            Engage with politics through daily actions and community involvement.
          </p>
        </header>

        {toast && (
          <div className="mb-6 text-center">
            <div className="inline-block bg-green-100 text-green-800 text-sm px-4 py-2 rounded shadow-sm animate-fade-in">
              {toast}
            </div>
          </div>
        )}

        <div className="mb-6 flex justify-between items-center bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
          <div>
            <div className="font-semibold text-gray-800">User #12345</div>
            <div className="text-sm text-gray-500">Active Citizen</div>
          </div>
          <div className="text-right">
            <div className="text-sm text-gray-500">Points</div>
            <div className="text-xl font-bold text-green-600">{points}</div>
          </div>
        </div>

        <div className="mb-6 flex flex-wrap justify-center gap-3 border-b border-gray-200 pb-4">
          <button
            onClick={() => setActiveTab("challenges")}
            disabled={activeTab === "challenges"}
            className={`px-4 py-2 rounded-md font-medium transition border text-sm sm:text-base ${
              activeTab === "challenges"
                ? "bg-blue-600 text-white border-blue-600 cursor-default"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-50"
            }`}
          >
            Challenges
          </button>
          <button
            onClick={() => setActiveTab("community")}
            disabled={activeTab === "community"}
            className={`px-4 py-2 rounded-md font-medium transition border text-sm sm:text-base ${
              activeTab === "community"
                ? "bg-blue-600 text-white border-blue-600 cursor-default"
                : "bg-white text-blue-600 border-gray-300 hover:bg-blue-50"
            }`}
          >
            Community
          </button>
        </div>

        {activeTab === "challenges" && (
          <div className="grid gap-6 sm:grid-cols-2">
            <Card>
              <CardContent className="flex flex-col items-center text-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-800">Sign a Petition</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">+50 pts</span>
                </div>
                <Button onClick={() => handleClaimPoints(50)}>Claim</Button>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="flex flex-col items-center text-center gap-3">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-800">Daily Quiz</span>
                  <span className="text-xs bg-green-100 text-green-800 px-2 py-0.5 rounded-full">+20 pts</span>
                </div>
                <Button onClick={() => handleClaimPoints(20)}>Claim</Button>
              </CardContent>
            </Card>
          </div>
        )}

        {activeTab === "community" && (
          <Card>
            <CardContent className="text-center space-y-4">
              <p className="text-lg text-gray-700 font-medium">
                🎉 Welcome to the PoliPulse community!
              </p>
              <div>
                <textarea
                  value={newPost}
                  onChange={(e) => setNewPost(e.target.value)}
                  placeholder="Share your thoughts..."
                  rows={3}
                  maxLength={200}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-400 break-words whitespace-pre-wrap overflow-hidden"
                />
                <div className="text-right text-sm text-gray-500 mt-1">
                  {newPost.length}/200 characters
                </div>
                <div className="mt-2 text-right">
                  <Button onClick={handlePost} disabled={!newPost.trim() || newPost.length > 200}>
                    Post
                  </Button>
                </div>
              </div>
              <div className="space-y-4 text-left">
                {posts.map((post, index) => (
                  <div key={post.id} className="border border-gray-200 p-4 rounded-md bg-white shadow-sm">
                    <div className="flex justify-between text-sm text-gray-500 mb-1">
                      <span>User #{post.user} — {post.timestamp}</span>
                      {index === 0 && <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-0.5 rounded-full">New</span>}
                    </div>
                    <div className="text-gray-800 whitespace-pre-wrap break-words">{post.content}</div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
}
