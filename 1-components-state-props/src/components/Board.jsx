import Square from "./Square";

export default function Board() {
  return (
    <div className="h-screen w-full bg-purple-300 flex justify-center items-center">
      <div className="flex gap-1 flex-col border-white border-2">
        <div className="board-row flex gap-1">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row flex gap-1">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row flex gap-1">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </div>
  );
}
