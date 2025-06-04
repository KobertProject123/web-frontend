import type { utterances } from "~/data/api";

export default function Utterances({
  utterances,
  onSelect,
}: {
  utterances: utterances;
  onSelect: (idx: number) => void;
}) {
  return (
    <div>
      {utterances.map((utternace, index) => (
        <div
          key={index}
          className="min-h-10 p-3 my-menu-item hover:bg-gray-200 rounded-lg focus:bg-sky-100"
          role="menuitem"
          tabIndex={-1}
          onClick={() => onSelect(index)}
        >
          {utternace.text}
        </div>
      ))}
    </div>
  );
}
