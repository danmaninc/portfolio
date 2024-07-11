export default function NotFound() {
  return (
    <main className="w-auto my-10 mb-0 mx-[25rem] min-[374px]:max-[960px]:my-[2.5rem] min-[374px]:max-[960px]:mx-2 min-[768px]:max-[1600px]:my-10 min-[768px]:max-[1600px]:mx-24">
      <div className="flex flex-col justify-center items-center gap-8 h-96">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-7xl font-bold">404</h1>
          <h2 className="text-4xl font-semibold">Not Found</h2>
        </div>
        <a
          className="flex justify-center items-center gap-1 font-medium text-black no-underline p-2 px-4 bg-white w-fit rounded-lg hover:text-black hover:bg-white/80"
          href={"/"}
        >
          Return to main page
        </a>
      </div>
    </main>
  );
}
