import TranslateButton from "./TranslateButton";

const Header = () => {
  return (
    <>
      <header className="bg-[#1F2640] px-2">
        <div className="container mx-auto py-4 flex items-center justify-between">
          <img alt="logo" src="/assets/images/logo.png" srcSet="/assets/images/logo-2x.png 2x" />
          <TranslateButton />
        </div>
      </header>
    </>
  );
};

export default Header;