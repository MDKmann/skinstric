

export default function handleEnterKeyDown(
  fn: () => void,
  options?: { isLocation?: boolean }
) {
  return (event: React.KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value.trim();

    const pacContainer = document.querySelector(
      ".pac-container"
    ) as HTMLElement | null;
    const isAutocompleteOpen =
      pacContainer && pacContainer.style.display !== "none";
    const hasSelection = document.querySelector(".pac-item-selected") !== null;

    if (event.key === "Enter") {
      event.preventDefault(); // always prevent default

      if (options?.isLocation) {
        if (!inputValue) {
          alert("Please type or select a location first.");
          return;
        }

        if (isAutocompleteOpen && !hasSelection) {
          alert("Please select a suggestion first.");
          return;
        }

        if (isAutocompleteOpen && hasSelection) {
          // If selection exists but hasn't been applied yet
          return;
        }

        fn();
      } else {
        if (!inputValue) {
          alert("Please enter your name.");
          return;
        }
        fn();
      }
    }
  };
}
