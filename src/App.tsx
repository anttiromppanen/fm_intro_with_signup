import SignupForm from "./components/Form/SignupForm";
import TextSection from "./components/TextSection";

function App() {
  return (
    <div className="flex h-full w-full items-center justify-center bg-userRed bg-[url(/bg-intro-mobile.png)] bg-contain md:h-screen md:bg-[url(/bg-intro-desktop.png)]">
      <div className="max-w-[1200px] px-6 md:px-16">
        <div className="flex flex-col items-center justify-center gap-y-16 pt-24 text-center md:mt-0 md:flex-row md:gap-x-4 md:text-left">
          <TextSection />
          <SignupForm />
        </div>
      </div>
    </div>
  );
}

export default App;
