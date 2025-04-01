import ThemeToggle from "@/components/theme-toggle";

export default function Home() {
  const data = [
    {
      title: "Best of the day",
      category: "Shots featured",
    },
    {
      title: "Featured streams",
      category: "Watch livestreams",
    },
    {
      title: "Subscriptions",
      category: "Premium content",
    },
    {
      title: "Creative feed",
      category: "Premium feed",
    },
  ];
  return (
    <main className="h-full py-12">
      <ThemeToggle />
      <ul className="bg-white dark:bg-slate-800 dark:text-slate-50 rounded-xl p-6 max-w-[400px] m-auto">
        {data.map((item, i) => (
          <Card key={i} {...item} />
        ))}
      </ul>
    </main>
  );
}

function Card({ title, category }) {
  return (
    <li className="hover:bg-slate-100 dark:hover:bg-slate-700 rounded-lg p-4 group">
      <a href="#0" className="flex gap-4 items-center">
        <div className="aspect-square w-10 rounded-md bg-[#cbd5e1]"></div>
        <div className="flex flex-col justify-between">
          <p className="font-bold">{title}</p>
          <small className="text-slate-500 dark:text-slate-400">
            {category}
          </small>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          className="text-purple-600 dark:text-white opacity-0 group-hover:opacity-100 ml-auto transition-all duration-200 group-hover:translate-x-4"
        >
          <path
            fill="currentColor"
            d="m12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8l-8-8z"
          ></path>
        </svg>
      </a>
    </li>
  );
}
