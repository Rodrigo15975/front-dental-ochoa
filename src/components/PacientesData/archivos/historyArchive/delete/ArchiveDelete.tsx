export default function ArchiveDelete() {
  return (
    <div className="flex gap-4 items-center w-full justify-center">
      <button className="transition hover:bg-bg_seven/50 bg-bg_seven flex-[0_1_10rem] h-[3rem] rounded-md shadow-md text-default font-robotoSlab font-robotoSlab_500">
        Eliminar
      </button>
      <button className="transition hover:bg-bg_six bg-bg_six/50 flex-[0_1_10rem] h-[3rem] rounded-md shadow-md text-default font-robotoSlab font-robotoSlab_500">
        Cancelar
      </button>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS172K2m3psHh7-YKyXZqab0SElM8hZLQzBX7Etxc2CJQ&s"
        alt=""
        className="h-[5rem] rounded-md w-[5rem]"
      />
    </div>
  );
}
