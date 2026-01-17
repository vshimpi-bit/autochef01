import { MessageSquare, ThumbsUp, ThumbsDown, Clock } from "lucide-react";

const feedbackItems = [
  {
    customer: "John D.",
    rating: 5,
    message: "Amazing service! The AI recommendations were spot on.",
    time: "10 mins ago",
    resolved: true,
  },
  {
    customer: "Sarah M.",
    rating: 4,
    message: "Great food, slightly long wait time for dessert.",
    time: "25 mins ago",
    resolved: true,
  },
  {
    customer: "Mike R.",
    rating: 3,
    message: "Good overall, but the pasta was a bit cold.",
    time: "1 hour ago",
    resolved: false,
  },
];

const Feedback = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">Customer Feedback</h1>
        <p className="text-muted-foreground mt-1">AI-powered sentiment analysis and response automation.</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsUp className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Positive</span>
          </div>
          <p className="text-3xl font-bold text-foreground">87%</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <ThumbsDown className="w-5 h-5 text-warning" />
            <span className="text-sm text-muted-foreground">Needs Attention</span>
          </div>
          <p className="text-3xl font-bold text-foreground">13%</p>
        </div>
        <div className="stat-card">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted-foreground">Avg Response Time</span>
          </div>
          <p className="text-3xl font-bold text-foreground">32s</p>
        </div>
      </div>

      {/* Feedback List */}
      <div className="space-y-4">
        {feedbackItems.map((item, index) => (
          <div key={index} className="glass-card p-6">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <h3 className="font-semibold text-foreground">{item.customer}</h3>
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={i < item.rating ? "text-warning" : "text-muted"}>★</span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground">{item.message}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-xs text-muted-foreground">{item.time}</span>
                <span className={`status-badge ${item.resolved ? "status-active" : "status-warning"}`}>
                  {item.resolved ? "RESOLVED" : "PENDING"}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feedback;
