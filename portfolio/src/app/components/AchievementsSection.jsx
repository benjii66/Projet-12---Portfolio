"use client";
import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic';
import { getGitHubStats } from '../api/GithubStats';
import { BestStreak } from '../api/GraphMetrics';



const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);


const AchievementsSection = () => {

  const [publicReposCount, setPublicReposCount] = useState(0);
  const [totalCommits, setTotalCommits] = useState(0);
  const [mostUsedLanguage, setMostUsedLanguage] = useState("");
  const [longestStreak, setLongestStreak] = useState(0);


  useEffect(() => {
    async function fetchStats() {
      const { publicReposCount, totalCommits, mostUsedLanguage } = await getGitHubStats("benjii66");

      setPublicReposCount(publicReposCount);
      setTotalCommits(totalCommits);
      setMostUsedLanguage(mostUsedLanguage);
      
      try {
        const totalStreak = await BestStreak("benjii66");
        setLongestStreak(totalStreak);
      } catch(error) {
        console.error("Error fetching longest contribution days:", error.message);
      }
    }
    fetchStats();
  }, []);


  const achievementsList = [
    {
      metric: "Repositories",
      value: publicReposCount,
      postfix: "+",
    },
    {
      metric: "Commits",
      value: totalCommits,
      postfix: "+",
    },
    {
      metric: "Most Used",
      value: "JS",
    },
    {
      metric: "Days Streak",
      value: longestStreak,
    },
    {
      metric: "Years",
      value: 2,
    },
  ];


  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
    <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
      {achievementsList.map((achievement, index) => {
        const isNumericValue = !isNaN(achievement.value);
        return (
          
          <div
            key={index}
            className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
          >
            <h2 className="text-white text-4xl font-bold flex flex-row">
              {achievement.prefix}
              {isNumericValue ? 
              (
                <AnimatedNumbers
                key={`animated-${achievement.metric}-${achievement.value}`}
                includeComma
                animateToNumber={parseInt(achievement.value, 10)}
                locale="fr-FR"
                className="text-white text-4xl font-bold"
                configs={(_, index) => ({
                  mass: 1,
                  friction: 100,
                  tension: 140 * (index + 1),
                })}
                />
              ) :
             (
                <span className="text-white text-4xl font-bold">{achievement.value}</span>
              )}
             
              {achievement.postfix}
            </h2>
            <p className="text-[#ADB7BE] text-base">{achievement.metric}</p>
          </div>
        );
      })}
    </div>
  </div>
);
}

export default AchievementsSection