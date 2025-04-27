export default function handleEnterKeyDown(
  fn: () => void,
  options?: { ignoreAutocomplete?: boolean }
) {
  const handleKeyDown = (
    event: React.KeyboardEvent<HTMLInputElement>
  ): void => {
    const target = event.target as HTMLInputElement;
    const isAutocompleteOpen = target.getAttribute("aria-expanded") === "true";

    if (event.key === "Enter") {
      if (!options?.ignoreAutocomplete && isAutocompleteOpen) {
        // Let the browser handle selecting the autocomplete option
        return;
      }

      event.preventDefault();
      fn();
    }
  };

  return handleKeyDown;
}
