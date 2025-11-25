import { useState, useEffect } from "react";

export const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!username) {
        setError("Username is required");
        setLoading(false);
        return;
      }

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=10`
        );

        if (!response.ok) {
          throw new Error(`Failed to fetch repositories: ${response.statusText}`);
        }

        const data = await response.json();
        
        const filteredRepos = data
          .filter((repo) => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count);

        setRepos(filteredRepos);
      } catch (err) {
        setError(err.message);
        console.error("Error fetching GitHub repos:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading, error };
};


