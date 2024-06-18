export function isButtonDisabled(
  isPending: boolean,
  ruc: string | undefined
): boolean {
  return isPending || !ruc;
}
