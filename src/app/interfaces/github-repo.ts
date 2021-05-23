interface License {
    key: string;
    name: string;
    spdx_id: string;
}

interface Owner {
    login: string;
    avatar_url: string;
    html_url: string;
}

export interface GithubRepo {
    name: string;
    full_name: string;
    owner: Owner;
    html_url: string;
    description: string;
    stargazers_count: number;
    language: string;
    forks: number;
    forks_count: number;
    open_issues: number;
    open_issues_count: number;
    license: License;
    watchers: number;
    network_count: number;
    subscribers_count: number;
}