import Form from "./Form";
import Forecast from "./Forecast";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
// Put any other imports below so that CSS from your
// components takes precedence over default styles.

export default function App() {
  return (
    <div>
      <Form />
      <Forecast />
    </div>
  );
}
