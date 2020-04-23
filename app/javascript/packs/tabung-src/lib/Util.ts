export function stringDefinedAndNotBlank(str: string) {
  return (typeof(str) !== "undefined" && str.length > 0)
}