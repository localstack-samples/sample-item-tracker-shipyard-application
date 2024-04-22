import { useEffect, useState } from "react";
import raw from "raw.macro";
import { Converter } from "showdown";

const converter = new Converter();

const Component = () => {
  const [md, setMd] = useState("");

  useEffect(() => {
    const file = raw("./GetStarted.md");
    setMd(file);
  }, []);

  return (
    <div dangerouslySetInnerHTML={{ __html: converter.makeHtml(md) }}></div>
  );
};

export default Component;
