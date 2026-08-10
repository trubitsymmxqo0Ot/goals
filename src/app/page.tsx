"use client";
import { Button } from "@/shared/ui/Button/Button";
import { useState } from "react";

export default function Home() {
  const [send, setSend] = useState(false);
  return (
    <div>
      <Button
        size="l"
        variant="primary"
        isLoading={send}
        // endContent={<div>end</div>}
        startContent={<div>start</div>}
        onClick={() => setSend(!send)}
      >
        some test
      </Button>
    </div>
  );
}
