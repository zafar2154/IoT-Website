import './Bg.css';

function Bg() {
  return (
    <div className="absolute h-full w-full flex flex-col items-center justify-evenly overflow-hidden z-[-2]">
      <img
        src="src/public/BgKepengurusan.webp"
        alt="bg"
        className="w-full h-auto animate-bgKepengurusan"
      ></img>
      <img
        src="src/public/BgKepengurusan.webp"
        alt="bg"
        className="w-full h-auto mix-blend-multiply animate-bgKepengurusan"
      ></img>
    </div>
  );
}

export default Bg;
