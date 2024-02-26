export function OutlineButton({ name }: { name: string }) {
  return (
    <button className="text-white text-sm px-4 py-2 rounded-md border border-[#694C9F] hover:bg-transparent">
      {name}
    </button>
  );
}

export function NoOutlineButton({ name }: { name: string }) {
  return (
    <button className="veridaq-gradient text-white text-sm px-4 py-2 rounded-md border-transparent hover:bg-transparent hover:veridaq-gradient hover:border-gray-800">
      {name}
    </button>
  );
}
