import Modal from "../../components/Modal";
import Tabs from "../../components/Tabs";
import Disclosure from "../../components/Disclosure";

export default function Playground() {
  return (
    <div style={{ padding: "40px" }}>
      <h1>Accessibility Playground</h1>

      <Modal />
      <Tabs />
      <Disclosure />
    </div>
  );
}