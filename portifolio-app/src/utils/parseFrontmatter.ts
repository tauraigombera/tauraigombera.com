export interface ParsedMarkdown<T> {
  data: T
  content: string
}

export function parseFrontmatter<T>(
  file: string
): ParsedMarkdown<T> {
  const frontmatterRegex =
    /^---\s*[\r\n]+([\s\S]*?)[\r\n]+---\s*[\r\n]+([\s\S]*)/

  const match = file.match(frontmatterRegex)

  if (!match) {
    return {
      data: {} as T,
      content: file,
    }
  }

  const [, rawFrontmatter, content] = match

  const data = rawFrontmatter
    .split(/\r?\n/)
    .reduce<Record<string, string>>((acc, line) => {
      const separatorIndex = line.indexOf(":")
      if (separatorIndex === -1) return acc

      const key = line.slice(0, separatorIndex).trim()
      const value = line
        .slice(separatorIndex + 1)
        .trim()
        .replace(/^"|"$/g, "")

      acc[key] = value
      return acc
    }, {})

  return {
    data: data as T,
    content,
  }
}