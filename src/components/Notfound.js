import { RocketLaunchIcon } from "@heroicons/react/24/outline";
export default function Notfound(props) {
  function refreshPage() {
    window.location.reload(false);
  }
  return (
    <>
      <div className="w-full h-full flex flex-col justify-center items-center">
        <div className=" text-6xl">Something went wrong</div>
        <div className=" text-6xl">Please reload the page</div>
        <button
          onClick={refreshPage}
          className="m-5 bg-rose-500 hover:bg-rose-600 dark:bg-sky-500 dark:hover:bg-sky-600 px-6 p-3 text-3xl rounded-3xl duration-150 flex justify-center items-center"
        >
          <span>Click to reload</span>
          <span>
            <RocketLaunchIcon className="ml-2 h-8 w-8 inline" />
          </span>
        </button>
      </div>
    </>
  );
}
