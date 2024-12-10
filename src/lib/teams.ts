import { division1Teams, division2Teams } from "./teams-data"

export const getAllTeams = () => [...division1Teams, ...division2Teams]

export function getTeamBySlug(slug: string) {
    const allTeams = [...division1Teams, ...division2Teams];
    return allTeams.find((team) => team.slug === slug);
  }
