import React, { useState } from "react";
import { Link } from "react-router-dom";

const App = () => {
  const [MenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!MenuOpen);
  };

  return (
    <div className="m-0 p-0">
      <header className="bg-slate-400 h-[55px] ">
        <nav className="h-full">
          <ul className="hidden [@media(min-width:394px)]:flex flex-row justify-end items-center p-3 mr-5 gap-7">
            <li className="w-[51px] h-[22px]">
              <Link to="/profile">Home</Link>
            </li>
            <li className="w-[36px] h-[22px]">
              <Link to="/">Grid</Link>
            </li>
            <li className="w-[72px] h-[22px]">
              <a href="https://www.linkedin.com/in/shlok-agrahari-a93522310/">
                LinkedIN
              </a>
            </li>
          </ul>
          <button
            className="[@media(min-width:394px)]:hidden absolute right-4 top-2 text-4xl text-gray-600"
            onClick={toggleMenu}
          >
            {MenuOpen ? "×" : "≡"}
          </button>
        </nav>
      </header>
      <div
        className={`[@media(min-width:394px)]:hidden bg-slate-400  overflow-hidden ${
          MenuOpen ? "max-h-[200px]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col items-center py-4 gap-4">
          <li>
            <Link to="/profile" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/" onClick={toggleMenu}>
              Grid
            </Link>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/shlok-agrahari-a93522310/"
              onClick={toggleMenu}
            >
              LinkedIN
            </a>
          </li>
        </ul>
      </div>

      <div className="flex flex-col [@media(min-width:744px)]:flex-row gap-6 m-12 justify-center">
        <div
          className="w-[385px] h-[385px] bg-red-500 rounded-2xl"
          style={{
            background:
              "linear-gradient(135.38deg, #3300FF 0%, #FA00FF 98.32%)",
          }}
        >
          Box 1
        </div>
        <div className="flex flex-row [@media(min-width:744px)]:flex-row gap-6">
        <div
  className="w-[337px] h-[337px] [@media(min-width:744px)]:w-[385px] [@media(min-width:744px)]:h-[385px] rounded-2xl overflow-hidden"
  style={{ background: "#D9D9D9" }}
>
            <img
              src="https://s3-alpha-sig.figma.com/img/f451/3151/c543be76d658fa7cf401125e9cef6f94?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Umhrmf3ve5VwHjU9x-4lqn9VoteG~xmqFFAJ1NFlSAPT2F1K~eCqdTncMldvRuSwe7MGXpMkWCK9BVDlwoLxeKQ8MOk22FzwjwYl~dXpuh2U35tx1RvrkuHzRks0J7qpvRw~3LguA3Xi4mQjmUtCMqf9V7DbbaYO38HIqgj4iJ1JJ6u05G6GZZI5IqORNTSqkpUoRjfh1YuRICXgk79qz0718w~phQ2SE3Bmh1NCvyTjFecnU6ajWd6Bjj-mQ0gqKBCsaTsYA-X9YzyKyRkyCY6r8bDTCU43ejpA3U6bhERIx1CEgfUCQwTsnlKkwvdY0R56TLm38CkTc38cvbgyqQ__"
              alt="E-Cell"
              className="w-full h-full object-fill"
            />
          </div>
          <div
            className="w-[337px] h-[337px]  [@media(min-width:744px)]:w-[385px] [@media(min-width:744px)]:h-[385px] rounded-2xl flex items-center justify-center"
            style={{ background: "#D9D9D9" }}
          >
            <div className="w-[337px] h-[337px] grid grid-cols-3 gap-1 [@media(min-width:744px)]:gap-3">
              {/* Each smaller box */}
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
              <div
                className="w-[87px] h-[87px] [@media(min-width:744px)]:w-[100px] [@media(min-width:744px)]:h-[100px] bg-[#00407A] "
                style={{ borderRadius: "15px" }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
