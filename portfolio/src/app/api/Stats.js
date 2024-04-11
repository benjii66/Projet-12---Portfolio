import { getGitHubStats } from "./GithubStats";
import { BestStreak } from "./GraphMetrics";


export async function handler(req, res) {
  try {
    const [githubStats, bestStreak] = await Promise.all([
      getGitHubStats("benjii66"),
      BestStreak("benjii66"),
    ]);

    res.status(200).json({
      githubStats,
      bestStreak
    });
  } catch (error) {
    console.error("API stats error:", error);
    res.status(500).json({ message: "Failed to fetch GitHub stats" });
  }
}