function RepInfoModal({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: (open: boolean) => void;
}) {
  if (open) {
    return (
      <>
        <div
          onClick={() => setOpen(false)}
          className="bg-gray-300 h-screen opacity-65 fixed top-0 right-0 left-0"
        />

        <div className="bg-white h-98 max-w-3xl shadow-lg rounded-md fixed top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
          <span className="text-black">
            Lorem isput dolar Lorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolarLorem isput
            dolarLorem isput dolarLorem isput dolarLorem isput dolar
          </span>
        </div>
      </>
    );
  } else return <></>;
}

export default RepInfoModal;
