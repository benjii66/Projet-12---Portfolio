"use client";
import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import useTranslation from "next-translate/useTranslation";


const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const fetcher = (url) => fetch(url).then((res) => res.json());

const AchievementsSection = () => {
  const { data, error } = useSWR('/api/stats', fetcher);
  const {t} = useTranslation("metrics");

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data || error) {
      setIsLoading(false);
    }
  }, [data, error]);

  const initialData = {
    publicReposCount: 0,
    totalCommits: 0,
    mostUsedLanguage: "", 
    longestStreak: 0,
  };

  const achievementsList = [
    {
      metric: t("repositories"),
      value: data ? data.githubStats.publicReposCount : initialData.publicReposCount,
      postfix: "+",
    },
    {
      metric: t("commits"),
      value: data ? data.githubStats.totalCommits : initialData.totalCommits,
      postfix: "+",
    },
    {
      metric: t("mostUsed"),
      value: "JS",
    },
    {
      metric: t("dayStreak"),
      value: data ? data.bestStreak : initialData.longestStreak,
    },
    {
      metric: t("years"),
      value: 2,
    },
  ];

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {isLoading ? (
          <div>Loading Stats...</div>
        ) : (
          achievementsList.map((achievement, index) => {
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
          }))}
      </div>
    </div>
  );
};

export default AchievementsSection;
