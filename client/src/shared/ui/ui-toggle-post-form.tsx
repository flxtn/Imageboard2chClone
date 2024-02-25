import { PostThreadForm } from "@/features/post-thread-form/ui/post-thread-form";
import { useState } from "react";

export function UITogglePostForm({
  isThread,
  buttonName,
}: {
  isThread: boolean;
  buttonName: string;
}) {
  const [showForm, setShowForm] = useState(false);

  const handleShowForm = () => {
    setShowForm((prev) => !prev);
  };

  return (
    <div className="mb-3">
      {showForm ? (
        <div>
          <button
            className="text-orange-600 text-xl mx-auto flex justify-center mb-4 hover:text-orange-700"
            onClick={handleShowForm}
          >
            Закрыть форму постинга
          </button>
          <PostThreadForm isThread={isThread} />
        </div>
      ) : (
        <button
          onClick={handleShowForm}
          className="text-orange-600 text-xl mx-auto flex justify-center hover:text-orange-700"
        >
          {buttonName}
        </button>
      )}
    </div>
  );
}
