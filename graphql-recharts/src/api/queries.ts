export const GET_CONTRIBUTION_COLLECTION_QUERY = `contributionsCollection(
  from: "2021-04-28T00:00:00Z"
  to: "2022-04-28T00:00:00Z"
) {
  contributionCalendar {
    totalContributions
    weeks {
      contributionDays {
        weekday
        date
        contributionCount
        color
      }
    }
    months {
      name
      year
      firstDay
      totalWeeks
    }
  }
}`;

export const GET_USER_QUERY = `user(login: $nickname) {
  id
  login
  name
  email
  avatarUrl
  location
  bio
  createdAt
  ${GET_CONTRIBUTION_COLLECTION_QUERY}
}`;
