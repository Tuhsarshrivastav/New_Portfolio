import "./App.css";
import Home from "./screens/Home";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

function App() {
  return (
    <div>
      <motion.div
        className="app"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <AnimatePresence exitBeforeEnter>
          <Home />
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

export default App;
