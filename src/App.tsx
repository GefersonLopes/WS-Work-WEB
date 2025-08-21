import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";

import { ReactQueryProvider } from "./providers/ReactQueryProvider";
import UseRoutes from "./routes/index.routes";

function App() {
  return (
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}>
      <ReactQueryProvider>
        <UseRoutes />
        <ToastContainer />
      </ReactQueryProvider>
    </GoogleOAuthProvider>
  );
}

export default App;
