import { createDir } from "@/actions-dev/create-dir";
import { Button } from "@/components/ui/button";
import CodeMirror from "@uiw/react-codemirror";

export const runtime = "nodejs";

export default function Page() {
  return (
    <div>
      Admin
      <form action={createDir}>
        form<Button>submit</Button>
      </form>
    </div>
  );
}
