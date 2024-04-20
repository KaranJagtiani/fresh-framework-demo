import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";
import Table from "../islands/Table.tsx";
import LoginForm from "../islands/LoginForm.tsx";

export default function Home() {
  const count = useSignal(3);

  return (
    <div class="px-4 py-8 mx-auto h-screen bg-[#86efac]">
      <div class="max-w-screen-lg mx-auto flex flex-col items-center justify-center">
        <img
          class="my-6"
          src="/logo.svg"
          width="128"
          height="128"
          alt="the Fresh logo: a sliced lemon dripping with juice"
        />
        <h1 class="text-4xl font-bold">Welcome to Fresh</h1>

        <div class="md:container mt-40 grid grid-cols-3 grid-rows-6 md:grid-cols-5 lg:grid-cols-8 gap-6">
          <div class="tile bg-[#FFC470] col-span-2 md:col-span-3 lg:col-span-4 row-start-1 row-end-3 h-47 flex flex-col items-center justify-center">
            <Counter count={count} />
          </div>
          <div class="tile bg-[#BC7FCD] col-span-2 md:col-span-3 lg:col-span-4 row-start-3 row-end-6 h-47 flex flex-col items-center justify-center">
            <LoginForm />
          </div>
          <div class="tile bg-[#5BBCFF] row-start-1 row-end-6 col-span-1 md:col-span-2 lg:col-span-5 h-128 flex flex-col items-center justify-center">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
