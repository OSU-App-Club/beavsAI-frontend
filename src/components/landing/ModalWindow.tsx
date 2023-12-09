import { useCallback, useEffect } from "react";
import { Selector } from "../misc";

export default function ModalWindow() {
  const mutation = {
    mutate: () => {},
  };
  const handleSelectCourse = useCallback((courseId: string) => {
    console.log(courseId);
  }, []);
  useEffect(() => {
    const popup = document.getElementById("popup") as HTMLDialogElement | null;
    if (popup) {
      popup.showModal();
    }
  }, []);
  return (
    <div className="mockup-window bg-zinc-700/30 dark:bg-zinc-900/40">
      <div className="flex flex-col items-center justify-center h-[500px]">
        <div className="modal-box w-96 bg-white dark:bg-gray-800/70  shadow-black-600/40  shadow-inner sh">
          <p className="text-lg text-gray-900 dark:text-zinc-200 font-normal">
            Easily <span className="text-orange-600">select a course</span> to
            chat with!
          </p>
          <div className="py-4">
            <Selector mock onSelectCourse={handleSelectCourse} />
          </div>
          <div className="modal-action">
            <button
              disabled
              className="btn btn-outline bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-white"
              onClick={() => {
                const popup = document.getElementById(
                  "popup",
                ) as HTMLDialogElement | null;
                if (popup) {
                  popup.close();
                }
              }}
            >
              Cancel
            </button>
            <button
              disabled
              className="btn btn-outline bg-orange-500 dark:bg-orange-600 text-white"
              onClick={() => {
                mutation.mutate();
                const popup = document.getElementById(
                  "popup",
                ) as HTMLDialogElement | null;
                if (popup) {
                  popup.close();
                }
              }}
            >
              Create Chat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
