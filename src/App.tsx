import { RecoilRoot } from "recoil";
import { Page } from "./layouts/Page";
import { Counter } from "./components/blocks/Counter/Counter";

function App() {
  return (
    <RecoilRoot>
      <Page>
        <Counter />
      </Page>
    </RecoilRoot>
  );
}

export default App;
