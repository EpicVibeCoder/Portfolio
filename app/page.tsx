export default function Page() {
  return (
    <div className="relative w-full h-full flex justify-end items-center">
      {/* Welcome Text Section */}
      <div className="absolute top-1/4 left-5 md:left-20 flex flex-col text-white max-w-3xl z-20 p-4 md:p-0 justify-center items-center">
        <span className="text-4xl md:text-8xl mb-4 text-center">Hello there, welcome to my site</span>
        <button className="primaryColor border-4 border-[#3B231D] text-white px-6 py-3 rounded-md flex items-center justify-between max-w-xs hover:bg-opacity-90 transition duration-300">
          Let's Explore
          <svg
            width="24"
            height="24"
            viewBox="0 0 56 56"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="ml-2"
          >
            <circle cx="27.7539" cy="27.7539" r="27.7539" fill="#D9D9D9" />
            <circle cx="27.7539" cy="27.7539" r="27.2539" stroke="#3B231D" strokeOpacity="0.912121" />
            <path
              d="M45.2653 28.6736L18.2151 39.4221L18.808 16.5387L45.2653 28.6736Z"
              fill="#3B231D"
              fillOpacity="0.912121"
            />
          </svg>
        </button>
      </div>

      {/* SVG Container */}
      <div className="w-full max-w-5xl z-10">
        <svg
          id="growing-svg"
          width="100%"
          height="100%"
          viewBox="0 0 1064 935"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path
            d="M1059.76 -7.57896C1065.21 -7.5784 1069.66 -3.2108 1069.76 2.2403L1086.43 924.414C1086.64 936.302 1068.5 938.983 1065.24 927.549C1025.62 788.649 945.905 543.457 922.02 724.536C890.265 965.287 754.096 505.901 750.227 492.777C750.106 492.365 750.071 492.327 749.894 491.936C744.463 479.928 651.427 280.112 604.102 575.524C555.42 879.412 358.587 335.657 208.835 225.462C208.348 225.103 207.924 224.728 207.507 224.29L2.91433 9.20659C-3.14356 2.83809 1.37138 -7.68645 10.1609 -7.68556L1059.76 -7.57896Z"
            fill="url(#flowingGradient)"
          />
          <defs>
            <linearGradient
              id="flowingGradient"
              x1="135.456"
              y1="-245.244"
              x2="1385.82"
              y2="1005.12"
              gradientUnits="userSpaceOnUse"
            >
              <stop offset="0.175253" stopColor="#3B231D" stopOpacity="1" />
              <stop offset="0.625954" stopColor="#3B231D" stopOpacity="1" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </div>
  );
}
