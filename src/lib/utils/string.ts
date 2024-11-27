/**
 *
 * @param text the text content
 * @param max the maximum amount of characters allowed before the string is being cutted
 * @returns the resulting string – _that may or not be cutted depending on the input parameters_
 */
export function tinyString(text: string | undefined, max: number = 10): string {
  return text ? (text.length > max ? `${text.substring(0, max)} ...` : text) : ''
}

/**
 * Get the initials of a name
 * @param name {string} - the name to get the initials from
 * @returns {string} - the initials of the name
 */
export function getNameInitials(name: string | undefined): string {
  if (!name || !name.trim()) return 'JD'

  const words = name.trim().split(/\s+/)

  let initials = ''
  for (let i = 0; i < Math.min(words.length, 2); i++) {
    initials += words[i].charAt(0).toUpperCase()
  }

  return initials
}
