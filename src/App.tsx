import { RecoilRoot } from "recoil";
import { Page } from "./layouts/Page";
import { Counter } from "./components/blocks/Counter/Counter";
import { Select } from "./components/shared/Select";
import { useState } from "react";

function App() {
  const [value, setValue] = useState<number>();

  const options = [
    {
      id: 1,
      name: "Yellow",
    },
    {
      id: 2,
      name: "Blue",
    },
    {
      id: 3,
      name: "Green",
    },
    {
      id: 4,
      name: "Red",
    },
    {
      id: 5,
      name: "White",
    },
    {
      id: 6,
      name: "Orange Orange Orange",
    },
  ];

  return (
    <RecoilRoot>
      <div
        style={{
          position: "relative",
          // height: "calc(100vh - 40px)",
          // width: "calc(100vw - 40px)",
          // margin: "20px",
          padding: 20,
          height: "100vh",
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
        }}
      >
        <Select<number> options={options} value={value} setValue={setValue} />
        {/* <div style={{ position: "absolute", right: 0, top: 0 }}>
          <Select options={options} value={value} setValue={setValue} />
        </div>
        <div style={{ position: "absolute", left: 0, bottom: 0 }}>
          <Select options={options} value={value} setValue={setValue} />
        </div>
        <div style={{ position: "absolute", right: 0, bottom: 0 }}>
          <Select options={options} value={value} setValue={setValue} />
        </div> */}
      </div>
      {/* <Page>
        <Counter />
      </Page> */}
    </RecoilRoot>
  );
}

export default App;
