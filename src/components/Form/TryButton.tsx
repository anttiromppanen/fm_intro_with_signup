function TryButton() {
  return (
    <button
      type="button"
      className="rounded-xl bg-userBlue px-14 py-5 shadow-[0px_5px_4px_1px_rgba(0,0,0,0.26)] hover:opacity-90 md:py-3"
    >
      <p className="text-white">
        <span className="text-lg font-bold">Try it free for 7</span> days then
        $20/mo. thereafter
      </p>
    </button>
  );
}

export default TryButton;
