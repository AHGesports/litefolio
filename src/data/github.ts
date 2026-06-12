export type GitHubPinnedRepo = {
  name: string;
  description: string | null;
  url: string;
};

type GitHubPinnedItemsResponse = {
  data?: {
    user?: {
      pinnedItems?: {
        nodes?: Array<GitHubPinnedRepo & { __typename?: string }>;
      };
    };
  };
  errors?: Array<{ message: string }>;
};

const GITHUB_GRAPHQL_ENDPOINT = "https://api.github.com/graphql";

const PINNED_REPOS_QUERY = `
  query PinnedRepos($login: String!, $first: Int!) {
    user(login: $login) {
      pinnedItems(first: $first, types: REPOSITORY) {
        nodes {
          ... on Repository {
            __typename
            name
            description
            url
          }
        }
      }
    }
  }
`;

function getGitHubToken() {
  const env = import.meta.env as ImportMetaEnv & Record<string, string | undefined>;
  return env.GITHUB_TOKEN ?? env.GH_TOKEN;
}

export async function getPinnedGitHubRepos(username: string, count = 6) {
  const token = getGitHubToken();

  if (!token) {
    return [];
  }

  try {
    const response = await fetch(GITHUB_GRAPHQL_ENDPOINT, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: PINNED_REPOS_QUERY,
        variables: {
          login: username,
          first: Math.min(Math.max(count, 1), 6),
        },
      }),
    });

    if (!response.ok) {
      return [];
    }

    const payload = (await response.json()) as GitHubPinnedItemsResponse;

    if (payload.errors?.length) {
      return [];
    }

    return (
      payload.data?.user?.pinnedItems?.nodes
        ?.filter((repo): repo is GitHubPinnedRepo => repo.__typename === "Repository")
        .map(({ name, description, url }) => ({
          name,
          description,
          url,
        })) ?? []
    );
  } catch {
    return [];
  }
}
