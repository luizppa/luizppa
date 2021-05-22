interface Link {
    destination: string;
    url: string;
}

export interface Project {
    description: string;
    download: string;
    image: string;
    links: Link[];
    name: string;
}