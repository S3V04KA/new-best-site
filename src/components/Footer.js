import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-zinc-50 text-center text-surface dark:bg-neutral-700 dark:text-white">
      <div className="container pt-9">
        {/* Social media icons container */}
        <div className="mb-6 flex justify-center space-x-2">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@bestekaterinburgurfu2093"
            target="_blank"
            rel="noopener noreferrer"
            type="button"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="[&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="250"
                height="250"
                viewBox="0 0 50 50"
              >
                <path d="M 44.898438 14.5 C 44.5 12.300781 42.601563 10.699219 40.398438 10.199219 C 37.101563 9.5 31 9 24.398438 9 C 17.800781 9 11.601563 9.5 8.300781 10.199219 C 6.101563 10.699219 4.199219 12.199219 3.800781 14.5 C 3.398438 17 3 20.5 3 25 C 3 29.5 3.398438 33 3.898438 35.5 C 4.300781 37.699219 6.199219 39.300781 8.398438 39.800781 C 11.898438 40.5 17.898438 41 24.5 41 C 31.101563 41 37.101563 40.5 40.601563 39.800781 C 42.800781 39.300781 44.699219 37.800781 45.101563 35.5 C 45.5 33 46 29.398438 46.101563 25 C 45.898438 20.5 45.398438 17 44.898438 14.5 Z M 19 32 L 19 18 L 31.199219 25 Z"></path>
              </svg>
            </span>
          </a>

          {/* Vk */}
          <a
            href="https://vk.com/best_urfu"
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="250"
                height="250"
                viewBox="0 0 50 50"
              >
                <path d="M25,2C12.318,2,2,12.318,2,25s10.318,23,23,23c12.683,0,23-10.318,23-23S37.683,2,25,2z M34.973,29.535 c2.237,1.986,2.702,2.695,2.778,2.816C38.678,33.821,36.723,34,36.723,34h-4.12c0,0-1.003,0.011-1.86-0.557 c-1.397-0.915-2.86-2.689-3.888-2.381C25.992,31.32,26,32.486,26,33.483C26,33.84,25.693,34,25,34s-0.981,0-1.288,0 c-2.257,0-4.706-0.76-7.149-3.313c-3.456-3.609-6.487-10.879-6.487-10.879s-0.179-0.366,0.016-0.589 c0.221-0.25,0.822-0.218,0.822-0.218L14.909,19c0,0,0.376,0.071,0.646,0.261c0.223,0.156,0.347,0.454,0.347,0.454 s0.671,2.216,1.526,3.629c1.67,2.758,2.447,2.828,3.014,2.531C21.27,25.445,21,22.513,21,22.513s0.037-1.259-0.395-1.82 c-0.333-0.434-0.97-0.665-1.248-0.701c-0.225-0.029,0.151-0.423,0.63-0.648C20.627,19.059,21.498,18.986,23,19 c1.169,0.011,1.506,0.081,1.962,0.186C26.341,19.504,26,20.343,26,23.289c0,0.944-0.13,2.271,0.582,2.711 c0.307,0.19,1.359,0.422,3.231-2.618c0.889-1.442,1.596-3.834,1.596-3.834s0.146-0.263,0.373-0.393 c0.232-0.133,0.225-0.13,0.543-0.13S35.832,19,36.532,19c0.699,0,1.355-0.008,1.468,0.402c0.162,0.589-0.516,2.607-2.234,4.797 C32.943,27.793,32.63,27.457,34.973,29.535z"></path>
              </svg>
            </span>
          </a>

          {/* Telegram */}
          <a
            href="https://t.me/+c-2Jv_ESv-Y1MjQ6"
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="250"
                height="250"
                viewBox="0 0 50 50"
              >
                <path d="M25,2c12.703,0,23,10.297,23,23S37.703,48,25,48S2,37.703,2,25S12.297,2,25,2z M32.934,34.375	c0.423-1.298,2.405-14.234,2.65-16.783c0.074-0.772-0.17-1.285-0.648-1.514c-0.578-0.278-1.434-0.139-2.427,0.219	c-1.362,0.491-18.774,7.884-19.78,8.312c-0.954,0.405-1.856,0.847-1.856,1.487c0,0.45,0.267,0.703,1.003,0.966	c0.766,0.273,2.695,0.858,3.834,1.172c1.097,0.303,2.346,0.04,3.046-0.395c0.742-0.461,9.305-6.191,9.92-6.693	c0.614-0.502,1.104,0.141,0.602,0.644c-0.502,0.502-6.38,6.207-7.155,6.997c-0.941,0.959-0.273,1.953,0.358,2.351	c0.721,0.454,5.906,3.932,6.687,4.49c0.781,0.558,1.573,0.811,2.298,0.811C32.191,36.439,32.573,35.484,32.934,34.375z"></path>
              </svg>
            </span>
          </a>
          <a
            href="mailto:cr.urfubest@gmail.com"
            type="button"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-transparent p-3 font-medium uppercase leading-normal text-surface transition duration-150 ease-in-out hover:bg-neutral-100 focus:outline-none focus:ring-0 dark:text-white dark:hover:bg-secondary-900"
          >
            <span className="mx-auto [&>svg]:h-5 [&>svg]:w-5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="250"
                height="250"
                viewBox="0 0 256 256"
              >
                <g transform="translate(1.4065934065934016 1.4065934065934016) scale(2.81 2.81)">
                  <path
                    d="M 89.999 45 C 89.999 20.188 69.813 0.001 45 0.001 S 0.001 20.188 0.001 45 S 20.188 89.999 45 89.999 c 2.485 0 4.5 -2.015 4.5 -4.5 s -2.015 -4.5 -4.5 -4.5 C 25.15 80.999 9.001 64.85 9.001 45 C 9.001 25.15 25.15 9.001 45 9.001 c 19.85 0 35.999 16.149 35.999 36.054 c 0.059 4.718 -1.178 10.789 -4.069 13.716 c -1.269 1.284 -2.757 1.882 -4.686 1.882 c -4.443 0 -5.797 -1.516 -6.242 -2.013 c -1.81 -2.026 -2.411 -6.23 -1.741 -12.159 c 0.002 -0.014 -0.001 -0.027 0 -0.041 c 0.001 -0.013 0.006 -0.025 0.007 -0.038 l 0.08 -0.84 c 0.051 -0.482 0.106 -0.962 0.137 -1.445 l 1.792 -18.845 c 0.235 -2.474 -1.579 -4.67 -4.054 -4.906 c -2.259 -0.215 -4.269 1.288 -4.783 3.434 c -2.734 -2.239 -6.14 -3.475 -10.025 -3.454 c -8.045 0 -14.87 4.117 -19.225 11.602 c -5.494 9.44 -5.976 22.925 -1.122 31.366 c 3.074 5.346 7.96 8.29 13.757 8.29 c 6.671 0 12.66 -3.144 17.031 -8.885 c 0.43 0.682 0.904 1.324 1.432 1.916 c 2.975 3.329 7.333 5.018 12.954 5.018 c 4.31 0 8.144 -1.576 11.088 -4.557 C 89.669 58.682 90.037 48.05 89.999 45 z M 40.827 62.604 c -2.546 0 -4.494 -1.235 -5.955 -3.776 c -3.264 -5.677 -2.772 -15.704 1.098 -22.354 c 1.895 -3.256 5.417 -7.127 11.472 -7.127 c 0.024 0 0.049 0 0.073 0 c 7.669 0 8.058 10.348 8.058 12.422 c 0 0.511 -0.018 1.037 -0.053 1.574 l -0.148 1.555 C 54.384 52.944 49.694 62.604 40.827 62.604 z"
                    transform=" matrix(1 0 0 1 0 0) "
                    stroke-linecap="round"
                  />
                </g>
              </svg>
            </span>
          </a>
        </div>
      </div>

      {/*Copyright section*/}
      <div className="w-full bg-black/5 p-4 text-center">
        © 2025 Copyright: BEST Ekaterinburg UrFU
      </div>
    </footer>
  );
};

export default Footer;
