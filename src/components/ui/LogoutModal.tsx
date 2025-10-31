"use client";
import { motion, AnimatePresence } from "framer-motion";
import Button from "./Button";
import { useUserStore } from "@/store/useUserStore";

export default function LogoutModal({isOpen, onClose}:any){
    const { user } = useUserStore();
    return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            onClick={(e) => e.stopPropagation()}
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-3xl shadow-lg p-6 w-full max-w-md relative"
          >
              <h2 className="text-lg font-semibold text-[var(--dark-purple)]">
                Are You Sure You Want To LogOut?
              </h2>
              <p className="text-sm" >
                Logout as {user?.email || "user.email@gmail.com"}
              </p>
              <Button>
                LogOut
              </Button>
              <Button onClick={onClose}>
                Cancel
              </Button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}