import type { utterances } from "~/data/api";

export default function Utterances({
  utterances,
  onSelect,
  selectedIdx,
}: {
  utterances: utterances;
  onSelect: (idx: number) => void;
  selectedIdx: number;
}) {
  return (
    <div>
      {utterances.map((utternace, index) => (
        <div
          key={index}
          className={
            "min-h-10 p-3 my-menu-item hover:bg-gray-200 rounded-lg " +
            (index == selectedIdx || index == selectedIdx + 1
              ? "selected-utterance"
              : "")
          }
          role="menuitem"
          tabIndex={-1}
          onClick={() => {
            if (utterances.length - 1 == index) onSelect(index - 1);
            else onSelect(index);
          }}
        >
          {utternace.text}
        </div>
      ))}
    </div>
  );
}
