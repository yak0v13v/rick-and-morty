export enum Category {
  character = "character",
  episode = "episode",
  location = "location",
}

export const CATEGORIES = [
  Category.character,
  Category.episode,
  Category.location,
] as const;
