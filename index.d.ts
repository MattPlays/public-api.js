type ServiceFilters = {
    title: string,
    description: string,
    auth: any,
    https: boolean,
    cors: "yes" | "no" | "Unknown",
    category: string,
}
export async function GetEntries(filters?: ServiceFilters): Promise<{count: number,  entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]}>;
export async function GetRandom(filters?: ServiceFilters): Promise<{count: number,  entries: {API: string, Description: string, Auth: string, HTTPS: boolean, Cors: string, Link: string, Category: string}[]}>;
export async function GetCategories(): Promise<string[]>;
export async function CheckHealth(): Promise<{alive: boolean}>;