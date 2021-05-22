export interface GithubUser {
    id: number;
    login: string;
    name: string;
    avatar_url: string;
    html_url: string;
    followers: number;
    following: number;
    public_repos: number;
    public_gists: number;
    bio: string;
    location: string;
    company: string;
}