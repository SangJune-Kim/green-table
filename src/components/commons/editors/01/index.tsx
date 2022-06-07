import "@toast-ui/editor/dist/toastui-editor.css";
import dynamic from "next/dynamic";
import { EditorProps } from "@toast-ui/react-editor";

export default function Editor01() {
  const Editor = dynamic<EditorProps>(
    () => import("@toast-ui/react-editor").then((m) => m.Editor),
    { ssr: false }
  );
  return (
    <Editor
      initialValue="레시피를 작성해 주세요."
      previewStyle="vertical"
      height="600px"
      initialEditType="markdown"
      useCommandShortcut={true}
    />
  );
}
