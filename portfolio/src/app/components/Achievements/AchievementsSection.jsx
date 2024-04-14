"use client";

import React, { useState, useEffect } from 'react';
import dynamic from 'next/dynamic';
import useSWR from 'swr';
import useTranslation from "next-translate/useTranslation";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), { ssr: false });

const fetcher = (url) => fetch(url).then((res) => res.json());

const AchievementsSection = () => {
  const { data, error } = useSWR('/api/stats', fetcher);
  const { t } = useTranslation("metrics");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (data || error) {
      setIsLoading(false);
    }
  }, [data, error]);

  const initialData = {
    publicReposCount: 0,
    totalCommits: 0,
    mostUsedLanguage: "JS",
    longestStreak: 0,
    years: 2,
  };

  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#33353F] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between h-full w-full">
        {isLoading ? (
          <div className="flex-grow flex justify-center items-center">
            <div className="mt-4 animate-spin rounded-full h-24 w-24 border-b-2 border-blue-600"></div>
          </div>
        ) : (
          <>
            {[
              { metric: t("repositories"), value: data?.githubStats?.publicReposCount ?? initialData.publicReposCount, postfix: "+" },
              { metric: t("commits"), value: data?.githubStats?.totalCommits ?? initialData.totalCommits, postfix: "+" },
              { metric: t("mostUsed"), value: initialData.mostUsedLanguage },
              { metric: t("dayStreak"), value: data?.bestStreak ?? initialData.longestStreak, postfix: "+" },
              { metric: t("years"), value: initialData.years, postfix: "+" },
            ].map((achievement, index) => (
              <div
                key={index}
                className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
                aria-label="Achievement section"
                itemScope
              >
                <h2 className="text-white text-4xl font-bold flex flex-row" itemProp="headline">
                  {!isNaN(Number(achievement.value)) ? (
                    <AnimatedNumbers
                      animateToNumber={Number(achievement.value)}
                      includeComma
                      locale="fr-FR"
                      className="text-white text-4xl font-bold"
                      configs={(index) => ({
                        mass: 1,
                        tension: 130 * (index + 1),
                        friction: 40,
                      })}
                    />
                  ) : (
                    <span className="text-white text-4xl font-bold">{achievement.value} </span>
                  )}
                  {achievement.postfix}
                </h2>
                <p className="text-[#ADB7BE] text-base" itemProp="description">{achievement.metric}</p>
              </div>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default AchievementsSection;
