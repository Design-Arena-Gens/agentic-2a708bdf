export default function Logo(props) {
  return (
    <svg
      viewBox="0 0 320 320"
      role="img"
      aria-labelledby="logoTitle logoDesc"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <title id="logoTitle">Modern Business Agent Logo</title>
      <desc id="logoDesc">
        Abstract human figure carrying a briefcase inside a shield shape in blue
        and silver colors.
      </desc>
      <defs>
        <linearGradient id="shieldGradient" x1="12%" y1="8%" x2="92%" y2="100%">
          <stop offset="0%" stopColor="#5CA7FF" />
          <stop offset="45%" stopColor="#2C66C5" />
          <stop offset="100%" stopColor="#132D5C" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#E6ECF4" />
          <stop offset="100%" stopColor="#A1ADBF" />
        </linearGradient>
      </defs>
      <g fill="none" fillRule="evenodd">
        <path
          d="M160 304c-57.4-25-98.9-46-123.6-83.7C18.8 189.5 16 150.3 16 97.8V52l144-36 144 36v45.8c0 52.5-2.8 91.7-20.4 122.5-24.7 37.7-66.2 58.7-123.6 83.7Z"
          fill="url(#shieldGradient)"
        />
        <path
          d="M232 142c0 39.8-32.2 72-72 72s-72-32.2-72-72 32.2-72 72-72 72 32.2 72 72Z"
          fill="#10264C"
          opacity="0.18"
        />
        <circle cx="160" cy="112" r="26" fill="url(#accentGradient)" />
        <path
          d="M189.7 192.4c-.7 1.6-1.9 3-3.5 3.9-21.7 12.3-41.8 12.3-63.5 0a8 8 0 0 1-3.5-10.7l22.6-43.6A16 16 0 0 1 156.7 132h6.6c6.2 0 11.8 3.5 14.6 9.1l11.8 23.6a16 16 0 0 1 0 14.2l-3.4 6.5-.6 1z"
          fill="#F0F3F8"
        />
        <path
          d="m226.5 172.5-31.7-9.6c-2.6-.8-5.4.4-6.7 2.9l-12.6 25.6c-1.9 3.8.1 8.5 4.2 9.4l34.4 7.5c2.8.6 5.5-1 6.6-3.7l11-27.8c1.3-3.3-.6-6.9-3.7-7.8Z"
          fill="url(#accentGradient)"
        />
        <path
          d="M118.7 164h25.6c3.3 0 5.9 3.4 5.1 7l-7.7 34.7c-.7 3.2-3.8 5.1-6.7 4.2l-32.3-9.6c-3.3-1-4.8-4.8-3.2-7.9l14.4-25.1c.9-1.5 2.6-2.4 4.4-2.4Z"
          fill="#0F2855"
          opacity="0.65"
        />
        <path
          d="M160 286c-49.6-22-85.7-40.7-105.6-71.3C38.7 191.7 36 158.7 36 113.1v-43L160 40l124 30.1v43c0 45.6-2.7 78.6-18.4 101.6C245.7 245.3 209.6 264 160 286Z"
          fill="url(#accentGradient)"
          opacity="0.18"
        />
      </g>
    </svg>
  );
}
