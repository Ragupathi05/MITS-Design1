export function slugifyFaculty(name: string): string {
  return name
    .toLowerCase()
    .replace(/dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
