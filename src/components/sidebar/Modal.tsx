import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useCallback, useState } from "react";
import { createChat } from "../../lib/fetchers";
import { Selector } from "../misc";

interface AddChatModalProps {
  token: string;
  userId: string;
}

export default function AddChatModal({ token, userId }: AddChatModalProps) {
  const [courseId, setCourseId] = useState<string | null>(null);
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["createChat", userId],
    mutationFn: () => createChat(userId, token, courseId),
    onSuccess: (e) => {
      console.log(e);
      queryClient.invalidateQueries({
        queryKey: ["allUserChats", userId],
      });
      queryClient.invalidateQueries({
        queryKey: ["getSingleChatMessages", e._id],
      });
      queryClient.invalidateQueries({
        queryKey: ["getCourseById", courseId],
      });
      queryClient.invalidateQueries({
        queryKey: ["loadDocument", courseId],
      });
    },
  });

  const handleSelectCourse = useCallback(
    (courseId: string) => {
      setCourseId(courseId);
    },
    [setCourseId],
  );
  return (
    <>
      <button
        onClick={() => {
          const popup = document.getElementById(
            "popup",
          ) as HTMLDialogElement | null;
          if (popup) {
            popup.showModal();
          }
        }}
        className="relative inline-flex items-center justify-center p-1 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-orange-500 to-orange-700 group-hover:from-pink-500 group-hover:to-orange-400 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-offset-2 focus:ring-orange-500"
      >
        <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
          New Chat
        </span>
      </button>
      <div className="divider  text-black dark:text-white before:bg-orange-600 after:bg-orange-600">
        Chat History
      </div>

      <dialog id="popup" className="modal w-full h-full">
        <div className="modal-box w-96 bg-white dark:bg-gray-900">
          <p className="text-lg font-bold text-gray-900 dark:text-white">
            First, <span className="text-orange-600">select a course</span> to
            chat with!
          </p>
          <div className="py-4">
            <Selector onSelectCourse={handleSelectCourse} />
          </div>
          <div className="modal-action">
            <button
              className="btn btn-outline bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-white"
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
              className="btn btn-solid bg-orange-500 dark:bg-orange-600 text-white"
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
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </>
  );
}
