import adaptData from "./adaptData";

function getData(): Promise<Awaited<ReturnType<typeof adaptData>>> {
  return new Promise(() => adaptData());
}

export default getData;
