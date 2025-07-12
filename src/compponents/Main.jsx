import { delay, motion, spring } from "motion/react";
import coffee1 from "../assets/coffee/coffee1.png";
import coffee3 from "../assets/coffee/coffee3.png";
import map from "../assets/world-map.png";
import CoffeeCover from "../assets/coffee-cover.jpg";
import appStore from "../assets/website/app_store.png";
import playStore from "../assets/website/play_store.png";

const coffeeCover = {
  backgroundImage: `url(${CoffeeCover})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  height: "100%",
  width: "100%",
};

const Main = () => {
  return (
    <div className="my-[4rem]">
      <motion.div
        className="space-y-3"
        whileInView={{
          y: [-100, 0],
          opacity: 1,
        }}
        transition={{
          delay : 0.2,
          type: "spring",
          damping: 10,
          stiffness: 100,
        }}
      >
        <h2 className="text-center text-3xl font-bold">
          Freash and <span className="text-amber-500">Tasty Coffee</span>
        </h2>

        <div className="flex justify-center">
          <p className="text-sm text-center w-180">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos ex
            neque soluta et labore laborum, aut est assumenda? Alias eos
            suscipit sit amet consectetur adipisicing.
          </p>
        </div>
      </motion.div>

      <div className="mt-[3rem] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[3rem]">
        <motion.div
          className="flex flex-col justify-center items-center"
          whileInView={{
            y: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.4,
            type: "spring",
            damping: 8,
            stiffness: 100,
          }}
        >
          <img src={coffee1} className="h-50 w-50" />
          <h2 className="text-center text-2xl font-bold text-amber-500">
            Black Coffee
          </h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur{" "}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center "
          whileInView={{
            y: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.4,
            type: "spring",
            damping: 8,
            stiffness: 100,
          }}
        >
          <img src={coffee3} className="h-50 w-50" />
          <h2 className="text-center text-2xl font-bold text-amber-500">
            Hot Coffee
          </h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur{" "}
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center"
          whileInView={{
            y: [200, 0],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.4,
            type: "spring",
            damping: 8,
            stiffness: 100,
          }}
        >
          <img src={coffee1} className="h-50 w-50" />
          <h2 className="text-center text-2xl font-bold text-amber-500">
            Cold Coffee
          </h2>
          <p className="text-center">
            Lorem ipsum, dolor sit amet consectetur{" "}
          </p>
        </motion.div>
      </div>

      <div className="mt-[5rem] grid grid-cols-1 md:grid-cols-3 gap-5">
        <motion.div
          className="md:col-span-2 flex justify-center items-center p-3"
          whileInView={{
            y: [-100, 0],
            opacity: [0, 1],
          }}
          transition={{
            delay: 0.5,
            type: "spring",
            damping: 20,
            stiffness: 100,
          }}
        >
          <img
            src={map}
            className="h-[200px] w-[360px] md:h-[300px] md:w-[540px]"
          />
        </motion.div>

        <div className="p-5 space-y-[3rem]">
          <motion.h2
            className="text-4xl font-bold text-darkGray font-serif"
            whileInView={{
              y: [100, 0],
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.4,
              type: "spring",
              damping: 15,
              stiffness: 100,
            }}
          >
            Buy our products from anywhere
          </motion.h2>

          <form className="grid grid-cols-3 gap-5">
            <motion.input
              whileInView={{
                y: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.4,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 h-10 w-full border-1 border-gray-600 rounded-[5px]"
            />
            <motion.input
              whileInView={{
                y: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.4,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              type="email"
              name="email"
              placeholder="Email"
              className="col-span-2 p-2 h-10 w-full border-1 border-gray-600 rounded-[5px]"
            />
            <motion.input
              whileInView={{
                y: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              type="text"
              name="country"
              placeholder="Country"
              className="col-span-2 p-2 h-10 w-full border-1 border-gray-600 rounded-[5px]"
            />
            <motion.input
              whileInView={{
                y: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.4,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              type="text"
              name="zipCode"
              placeholder="Zipcode"
              className="p-2 h-10 w-full border-1 border-gray-600 rounded-[5px]"
            />

            <motion.button
              whileInView={{
                y: [100, 0],
                opacity: [0, 1],
              }}
              transition={{
                delay: 0.5,
                type: "spring",
                damping: 15,
                stiffness: 100,
              }}
              type="submit"
              className="col-span-3 bg-amber-500 h-10 hover:bg-orange-400 hover:text-white w-full rounded-[5px] "
            >
              Submit
            </motion.button>
          </form>
        </div>
      </div>

      <motion.div
        className="container my-15 rounded-xl grid grid-cols-1 md:grid-cols-3"
        style={coffeeCover}
        whileInView={{
          x: [40, 0],
          opacity: [0, 1],
        }}
        transition={{
          delay: 0.5,
          type: "spring",
          damping: 15,
          stiffness: 100,
        }}
      >
        {/* Isolate-fake-div */}
        <div className="max-md:hidden col-span-2"></div>

        <div className="my-2 p-3 space-y-5">
          <h2 className="text-3xl text-center font-medium">Download the App</h2>
          <p className="text-sm text-center">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim aut
            laboriosam quos aperiam
          </p>

          <motion.div
            className="grid grid-cols-2 gap-4"
            whileInView={{
              y: [100, 0],
              opacity: [0, 1],
            }}
            transition={{
              delay: 0.6,
              type: "spring",
              damping: 15,
              stiffness: 100,
            }}
          >
            <div>
              <img src={appStore} />
            </div>

            <div>
              <img src={playStore} />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default Main;
