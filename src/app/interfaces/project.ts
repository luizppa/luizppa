interface Link {
    destination: string;
    url: string;
}

interface Repo {
    owner: string;
    name: string;
}

export interface Project {
    description: string;
    download: string;
    image: string;
    links: Link[];
    name: string;
    repo: Repo;
}