const { GITHUB_API_TOKEN: githubApiToken = '' } = process.env;
const authHeaders =
  githubApiToken && githubApiToken.length > 0
    ? { headers: { Authorization: `token ${githubApiToken}` } }
    : {};

export const fetchCache = 'force-no-store';

export const getRepoReleaseData = async (name?: string) => {
  if (!name || !name.length) return null;
  const dataRequest = await fetch(
    `https://api.github.com/repos/abdorizak/${name}/releases/latest`,
    authHeaders,
  );
  const data = await dataRequest.json();
  const { assets = [] } = data;
  const extraRepoData = {
    success: false,
    url: `https://github.com/abdorizak/${name}`,
  };
  const defaultDownloadLink = `https://github.com/abdorizak/${name}/releases/latest/`;
  let downloadLink = defaultDownloadLink;
  if (assets) {
    const [apk] = assets;
    if (apk) {
      extraRepoData.success = true;
      downloadLink = apk.browser_download_url || defaultDownloadLink;
    }
  }
  return { ...extraRepoData, download: downloadLink };
};
