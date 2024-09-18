import { graphql } from "@octokit/graphql";

//graph for fetching data from github --------------

const graphqlWithAuth = graphql.defaults({
  headers: {
    authorization: `token ${process.env.NEXT_PUBLIC_GITHUB_AUTH_TOKEN}`,
  },
});

export async function BestStreak(username) {
  const fromYear = 2019;
  const toYear = new Date().getFullYear();
  let totalContributionDays = new Set();

  for (let year = fromYear; year <= toYear; year++) {
    const fromDate = new Date(`${year}-01-01`).toISOString();
    const toDate = new Date(`${year}-12-31T23:59:59`).toISOString();
    try {
      const result = await graphqlWithAuth(`
        query getUserContributions($username: String!, $from: DateTime!, $to: DateTime!) {
          user(login: $username) {
            contributionsCollection(from: $from, to: $to) {
              contributionCalendar {
                weeks {
                  contributionDays {
                    contributionCount
                    date
                  }
                }
              }
            }
          }
        }
      `, {
        username: username,
        from: fromDate,
        to: toDate,
      });

      const weeks = result.user.contributionsCollection.contributionCalendar.weeks;
      weeks.forEach(week => week.contributionDays.forEach(day => {
        if (day.contributionCount > 0) {
          totalContributionDays.add(day.date);
        }
      }));
    } catch (error) {
      console.error("Erreur lors de la requête GraphQL:", error);
      throw new Error("Erreur lors de la récupération des jours de contributions");
    }
  }

  return totalContributionDays.size;
}
