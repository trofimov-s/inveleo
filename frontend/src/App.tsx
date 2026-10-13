import { useEffect, useState } from "react";
import apiClient from "./api/axios";
import axios from "axios";

function App() {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function getMessage(): Promise<void> {
    try {
      setIsLoading(true);
      setError(null);

      const response = await apiClient.get<{ message: string }>("/api/message");

      setMessage(response.data.message);
    } catch (err: unknown) {
      if (axios.isAxiosError(err)) {
        if (err.status) {
          switch (err.status) {
            case 404:
              setError("Message item not found");
              break;

            case 503:
              setError("Service unavailale.");
              break;

            default:
              setError("Something went wrong.");
          }

          return;
        }

        setError("Something went wrong.");

        return;
      }

      setError("Something went wrong.");
    } finally {
      setIsLoading(false);
    }
  }

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    getMessage();
  }, []);

  return (
    <>
      <h1>Inveleo</h1>
      {isLoading && <p>Загрузка…</p>}
      {!isLoading && error && <p>{error}</p>}
      {!isLoading && !error && message && <p>{message}</p>}
      <button onClick={getMessage} disabled={isLoading}>
        Reload
      </button>
    </>
  );
}

export default App;
