import { Octokit } from "octokit";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

interface GitHubApiResponseInterface {
  data: {
    updated_at: string | null;
  };
}

export const useGitHubApi = () => {
  const [response, setResponse] = useState<GitHubApiResponseInterface>({
    data: { updated_at: null },
  });

  useEffect(() => {
    const octokit = new Octokit({
      auth: process.env.GITHUB_PERSONAL_ACCESS_TOKEN,
    });

    const getGitHubProfileData = async () => {
      try {
        const fetchRequestResponse = await octokit.request(
          "GET /repos/{owner}/{repo}",
          {
            owner: "reginaldsc02",
            repo: "rsc-dev-portfolio",
          }
        );

        if (typeof fetchRequestResponse.data === "object") {
          setResponse(fetchRequestResponse);
        }
      } catch (error) {
        toast.error("No last website update info 😕");
        console.log(error);
      }
    };

    getGitHubProfileData();
  }, []);

  return response;
};
